# FarmSense 농약 잔류 반감기 예측 모듈 스펙

> 기반 논문: Fantke et al. 2014, Wu & Nofziger, PMC9957015 (2023), PMC8434416 (2019)

---

## 1. 기본 분해 모델 (1차 반응식)

$$C(t) = C_0 \times e^{-k \cdot t}$$

| 기호 | 의미 | 단위 |
|------|------|------|
| `C(t)` | t일 후 잔류 농도 | mg/kg (ppm) |
| `C₀` | 살포 직후 초기 농도 | mg/kg |
| `k` | 분해 속도 상수 | 1/일 |
| `t` | 경과 일수 | 일 |

**반감기(DT50)와 k의 관계:**

$$DT50 = \frac{\ln 2}{k} \approx \frac{0.693}{k}$$

---

## 2. 온도 보정 (Arrhenius / Q10)

### 2-A. Q10 보정식 (실용적, 권장)

$$k(T) = k_{ref} \times Q10^{\frac{T - T_{ref}}{10}}$$

| 파라미터 | 기본값 | 출처 |
|----------|--------|------|
| `Q10` | **1.22** (식물체) | Fantke et al. 2014 |
| `T_ref` | 20 ℃ | 표준 참조온도 |
| `k_ref` | 농약별 DT50에서 역산 | 국내 고시 또는 논문 |

> **Q10 = 1.22 의미:** 온도 10℃ 상승 시 분해속도 22% 증가 (반감기 18% 단축)

### 2-B. Arrhenius 보정식 (정밀, 선택)

$$k(T) = k_{ref} \times \exp\left[\frac{E_a}{R}\left(\frac{1}{T_{ref}} - \frac{1}{T}\right)\right]$$

| 파라미터 | 기본값 | 단위 |
|----------|--------|------|
| `Ea` | **14,250** (식물체 평균) | J/mol |
| `R` | 8.314 | J/(mol·K) |
| `T` | 켈빈(K) 변환 필요 | T(K) = T(℃) + 273.15 |

---

## 3. 상대습도(RH) 보정

> 출처: PMC9957015 (2023) — 온도·RH 다중회귀 모델 (밀가루 저장)

**RH 보정 계수:**

$$f_{RH} = 1 + \alpha \times \left(\frac{RH - RH_{ref}}{100}\right)$$

| 파라미터 | 기본값 | 설명 |
|----------|--------|------|
| `α` | **0.5** | RH 민감도 계수 (논문 추정치, 작물별 조정 필요) |
| `RH_ref` | 60% | 참조 상대습도 |
| `RH` | 실측값 | % |

**최종 k (온도 + 습도 동시 보정):**

$$k(T, RH) = k_{ref} \times Q10^{\frac{T - T_{ref}}{10}} \times f_{RH}$$

> **주의:** α 값은 포도 대상 실측 데이터로 캘리브레이션 필요.
> 현재는 보수적 추정치(0.5) 사용. RH 60% 이상에서 분해 촉진.

---

## 4. 품종별 보정 계수 (K_cultivar)

> 출처: Fantke et al. 2014 plant group factor, J.Clean.Prod. 2020 포도 실측

**적용 방식:**

$$k_{final} = k(T, RH) \times K_{cultivar}$$

### 포도 품종별 K_cultivar 초기값 (실측 데이터 부족 시 1.0 기준)

| 품종 | K_cultivar | 근거 |
|------|-----------|------|
| 샤인머스켓 | **1.00** | 기준 (참조 품종) |
| 거봉 | 0.90 | 왁스층 두꺼움 → 분해 느림 (추정) |
| MBA (캠벨) | 1.05 | 과피 얇음 → 분해 빠름 (추정) |
| 청수 | 1.10 | 과피 얇고 수분 많음 (추정) |
| 홍이슬 | 0.95 | 중간 (추정) |

> **⚠️ 위 K_cultivar는 실측 전 초기 추정값.**
> 포도 품종별 실제 살포 후 잔류 데이터 축적 시 업데이트 필요.

---

## 5. 최종 예측 계산식 요약

### 입력값

| 입력 | 설명 |
|------|------|
| `C₀` | 살포 농도 (희석배수·살포량으로 역산) |
| `DT50_ref` | 농약별 참조 반감기 (20℃, RH 60% 기준) |
| `T` | 평균 기온 (℃) |
| `RH` | 평균 상대습도 (%) |
| `t` | 살포 후 경과일 |
| `K_cultivar` | 품종 보정 계수 |

### 계산 순서

```
1. k_ref = ln(2) / DT50_ref
2. k_T   = k_ref × 1.22^((T - 20) / 10)
3. f_RH  = 1 + 0.5 × ((RH - 60) / 100)
4. k_TRH = k_T × f_RH
5. k_fin = k_TRH × K_cultivar
6. C(t)  = C₀ × exp(-k_fin × t)
7. 잔류 비율 = C(t) / MRL × 100  (MRL: 농약별 잔류허용기준)
```

### 출력값

| 출력 | 설명 |
|------|------|
| `C(t)` | t일 후 예상 잔류량 (mg/kg) |
| `안전일수` | C(t) < MRL × 0.7 이 되는 최소 t |
| `잔류 비율` | MRL 대비 % |

---

## 6. 농약별 참조 DT50 데이터 (포도, 식물체 기준)

> 아래 값은 국내 농약 등록 자료 및 논문 기반 초기값. 실측으로 갱신 필요.

| 농약명 (성분) | DT50_ref (일) | 참조 온도 | MRL (mg/kg) | 계열 |
|--------------|-------------|----------|-------------|------|
| 델타메트린 (deltamethrin) | 5.8 | 20℃ | 0.1 | 살충제 |
| 아바멕틴 (abamectin) | 4.0 | 20℃ | 0.02 | 살충제 |
| 스피노사드 (spinosad) | 7.0 | 20℃ | 0.5 | 살충제 |
| 테부코나졸 (tebuconazole) | 10.2 | 20℃ | 2.0 | 살균제 |
| 플루트리아폴 (flutriafol) | 8.5 | 20℃ | 0.5 | 살균제 |
| 사이플루페나미드 (cyflufenamid) | 6.3 | 20℃ | 1.0 | 살균제 |
| 클로르피리포스 (chlorpyrifos) | 14.0 | 20℃ | 0.5 | 살충제 |
| 이미다클로프리드 (imidacloprid) | 11.0 | 20℃ | 1.0 | 살충제 |

---

## 7. 구현 시 고려사항

1. **온도 데이터**: 기상청 API 또는 사용자 입력 → 일별 평균기온 사용
2. **RH 데이터**: IoT 센서 우선, 없으면 기상청 습도 데이터
3. **C₀ 추정**: 살포량(L/10a) × 희석배수 → 단위면적당 약량 → ppm 환산
4. **누적 살포**: 복수 살포 시 각 살포별 C(t) 합산
5. **강우 보정**: 강우 후 세척 효과 (표면 잔류 감소) → 추후 추가 파라미터
6. **MRL 데이터**: 식약처 농약잔류허용기준 DB 연동 필요

---

## 8. 참조 논문

1. Fantke et al. (2014). *Estimating Half-Lives for Pesticide Dissipation from Plants.* Environ. Sci. Technol. 48(15), 8588–8602.
2. Wu & Nofziger. *Temperature-Dependent Degradation of Pesticides.* Oklahoma State Univ.
3. PMC9957015 (2023). *Quantitative Modeling of the Degradation of Pesticide Residues in Grain Products.*
4. PMC8434416 (2019). *Highly variable soil dissipation of metaldehyde.*
5. ACS AgSciTech (2024). *Flutriafol, cyflufenamid in grape berries/leaves.*
6. J. Clean. Prod. (2020). *Dissipation behavior of fungicide and insecticide residues in grape.*
