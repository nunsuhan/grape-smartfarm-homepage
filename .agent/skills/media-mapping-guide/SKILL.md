---
name: Evidence-Based Media Mapping Guide
description: 증거 기반 미디어 매핑 가이드 - 텍스트와 멀티미디어 자료의 논리적 결합 표준
---

# 증거 기반 미디어 매핑 가이드 (Evidence-Based Media Mapping)

이 스킬은 FarmSense의 기술적 주장에 대한 신뢰성을 높이기 위해, 텍스트 설명과 멀티미디어 증거 자료(동영상, 슬라이드, 코드)를 논리적으로 1:1 매핑하는 표준입니다. [The Evidence Mapper] 에이전트가 수행합니다.

## 1. 영상 타임라인 매핑 (Time-Stamped Video Evidence)
기술적 로직이나 알고리즘을 설명할 때, 해당 내용이 시연되거나 설명된 동영상의 정확한 시점을 명시합니다.

- **규칙**: 설명 문구 하단 또는 옆에 `[영상 타임라인: MM:SS]` 배지를 부착하거나 링크를 제공합니다.
- **예시**:
  > "토양 수분 장력이 -15kPa에 도달하면 관수 밸브가 개방됩니다."
  > <br> `▶ 시연 영상 보기 (02:14)`

## 2. 슬라이드 교차 검증 (Slide Cross-Reference)
웹페이지에 삽입된 도표나 그래프 이미지는 원본 발표 자료나 논문 슬라이드의 번호를 명시하여 출처를 투명하게 밝힙니다.

- **규칙**: 이미지 캡션 또는 하단에 `Source: [자료명] Slide #XX` 형식을 기재합니다.
- **예시**:
  - `[이미지: GDD 수확량 예측 그래프]`
  - `Source: FarmSense Technical Deck v2.0, Slide #14`
  - 사용자가 탭(Tab) UI를 통해 슬라이드 전체를 넘겨볼 수 있도록 구성하는 것을 권장합니다.

## 3. 실행 가능한 코드 블록 (Executable Code Blocks)
DIY 가이드나 알고리즘 로직 공개 시, 사용자가 즉시 활용할 수 있는 형태의 UI를 제공합니다.

- **규칙**:
  - 반드시 Syntax Highlighting이 적용된 `CodeBlock` 컴포넌트를 사용합니다.
  - 우측 상단에 '복사하기(Copy)' 버튼을 배치하여 UX를 최적화합니다.
  - 코드 상단에 파일명(예: `sensor_logic.py`, `esp32_main.ino`)을 명시합니다.
- **예시**:
  ```python
  # water_logic.py
  def check_irrigation(soil_psi):
      if soil_psi < -15: return True
      return False
  ```

---
**[The Evidence Mapper]** 에이전트는 모든 시각 자료가 단순 장식이 아닌 '증거'로서 기능하도록 배치하십시오.
