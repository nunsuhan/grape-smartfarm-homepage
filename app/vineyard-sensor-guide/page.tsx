'use client';

import { useState } from "react";

const ENVIRONMENTS = [
  { id: "rain-shelter", label: "노지 비가림", icon: "🏕️", desc: "비닐 지붕으로 비 막고 옆은 뚫린 구조" },
  { id: "greenhouse", label: "하우스(시설)", icon: "🏠", desc: "비닐/유리로 완전히 막힌 온실" },
  { id: "open-field", label: "완전 노지", icon: "🌿", desc: "지붕 없이 하늘 아래 포도밭" },
];

const SOIL_TYPES = [
  { id: "sandy-loam", label: "모래 섞인 흙", icon: "🏖️", desc: "물이 잘 빠지는 가벼운 흙" },
  { id: "loam", label: "보통 흙", icon: "🌾", desc: "물 빠짐도 적당한 일반 흙" },
  { id: "clay", label: "찰흙/진흙", icon: "🧱", desc: "무겁고 물이 잘 안 빠지는 흙" },
  { id: "unknown", label: "모르겠음", icon: "❓", desc: "직접 흙을 파서 확인하는 방법 안내" },
];

const IRRIGATION = [
  { id: "drip-1", label: "점적 1줄", icon: "💧", desc: "호스가 나무 한쪽에만" },
  { id: "drip-2", label: "점적 2줄", icon: "💧💧", desc: "호스가 나무 양쪽에" },
  { id: "sprinkler", label: "스프링클러", icon: "🚿", desc: "위에서 뿌리는 방식" },
  { id: "none", label: "손으로 줌", icon: "🪣", desc: "호스로 직접 물주기" },
];

const CHECKLIST_ITEMS = [
  { id: "c1", text: "센서와 흙 사이에 빈틈(공기층)이 없는지 확인 — 0.3mm만 떠도 물기를 70% 적게 읽음", critical: true },
  { id: "c2", text: "흙 되메울 때 원래 순서대로 층층이 다져넣기 — 섞으면 데이터 엉망", critical: true },
  { id: "c3", text: "센서 위에 흙을 볼록하게 쌓기 — 빗물이 구멍으로 직접 흘러가면 안 됨", critical: false },
  { id: "c4", text: "전선을 PVC 파이프로 감싸기 — 쥐가 갉아먹거나 삽에 끊김", critical: false },
  { id: "c5", text: "묻자마자 수치 바로 확인 — 이상한 값이면 빼고 다시 설치", critical: true },
  { id: "c6", text: "온습도 센서에 햇빛 가리개 씌우기 — 없으면 5~6도 높게 나옴", critical: true },
  { id: "c7", text: "전선을 기둥에 묶음끈(케이블타이)으로 깔끔하게 고정 (느슨하게 여유 두고)", critical: false },
  { id: "c8", text: "설치 후 이틀간 데이터를 자주 확인하기 — 이상 있으면 빨리 다시 설치", critical: true },
];

const MISTAKES = [
  {
    title: "센서와 흙 사이 빈틈",
    icon: "💨",
    problem: "센서 옆에 머리카락 굵기만큼만 뜨면 물기를 70%나 적게 읽음. 실제로는 축축한데 \"건조하다\"고 나와서 물을 과하게 줌",
    solution: "전용 도구로 흔들지 말고 천천히 똑바로 밀어넣기. 묻자마자 수치 확인",
  },
  {
    title: "설치 구멍으로 물이 바로 흘러내림",
    icon: "💧",
    problem: "구멍을 파고 센서를 넣으면 물 줄 때 물이 구멍을 따라 바로 내려감. 실제보다 훨씬 축축하게 나옴",
    solution: "센서 위에 흙을 볼록하게 쌓아서 물이 구멍으로 안 들어가게 막기",
  },
  {
    title: "파낸 흙에 다시 묻기",
    icon: "🪨",
    problem: "삽으로 쫙 파고 그 흙에 묻으면 원래 흙과 밀도가 달라져서 물기가 다르게 나옴",
    solution: "오거(둥근 드릴)로 좁은 구멍 파고, 옆벽에 수평으로 밀어넣기",
  },
  {
    title: "엉뚱한 위치에 설치",
    icon: "📍",
    problem: "돌 많은 곳, 물 빠짐 도랑 옆, 밭 가장자리에 묻으면 밭 전체를 대표 못 함",
    solution: "포도가 '보통' 자라는 곳을 골라서 설치. 너무 잘 자라는 곳도, 못 자라는 곳도 아닌 곳",
  },
  {
    title: "전선을 그냥 내버려둠",
    icon: "🔌",
    problem: "쥐가 갉아먹거나, 삽질하다 끊거나, 트랙터가 밟으면 데이터 끊김",
    solution: "PVC 파이프로 전선 감싸고, 자외선 견디는 묶음끈으로 기둥에 고정",
  },
];

function getRecommendation(env: string, soil: string, irrigation: string) {
  const isGreenhouse = env === "greenhouse";
  const isRainShelter = env === "rain-shelter";

  const depths = isGreenhouse
    ? [
        { depth: "15~20cm", purpose: "뿌리가 물 먹는 곳 — 여기가 마르면 물 줄 때!", color: "#ff7043" },
        { depth: "30~40cm", purpose: "물이 아래로 잘 내려가는지 확인하는 곳", color: "#ffb74d" },
        { depth: "50~60cm", purpose: "물을 너무 줬는지 확인 — 여기까지 젖으면 너무 많은 것!", color: "#66bb6a" },
      ]
    : [
        { depth: "20~30cm", purpose: "뿌리가 물 먹는 곳 — 여기가 마르면 물 줄 때!", color: "#ff7043" },
        { depth: "50~60cm", purpose: "물이 아래로 잘 내려가는지 + 비료 흘러내림 감시", color: "#ffb74d" },
        { depth: "80~100cm", purpose: "물을 너무 줬는지 확인 — 여기까지 젖으면 돈 버리는 중!", color: "#66bb6a" },
      ];

  const trunkDist = isGreenhouse
    ? { value: "20~30cm", explain: "하우스 포도는 뿌리가 좁게 모여서 줄기 가까이" }
    : { value: "20~45cm", explain: "줄기에서 손바닥 1~2개 거리" };

  const emitterDist =
    irrigation === "none" || irrigation === "sprinkler"
      ? {
          value: "해당 없음",
          explain:
            irrigation === "none"
              ? "점적호스가 없으므로 줄기 기준으로만 설치"
              : "스프링클러는 넓게 뿌리므로 줄기 기준으로 설치",
        }
      : { value: "10~15cm", explain: "점적호스에서 물방울 떨어지는 바로 그 지점 근처에 묻기" };

  const ecRequired = isGreenhouse
    ? {
        text: "꼭 필요!",
        explain: "하우스는 비가 안 들어와서 비료 성분이 흙에 계속 쌓임 → 소금기 체크 필수",
      }
    : {
        text: "있으면 좋음",
        explain: "비료를 주고 있다면 흙에 소금기가 쌓이는지 확인 가능",
      };

  const envSensors = isGreenhouse
    ? [
        { name: "온도·습도 (주 센서)", position: "하우스 한가운데, 포도 잎 높이", note: "햇빛 가리개 필수! 없으면 온도가 5~6도 높게 나옴", icon: "🌡️" },
        { name: "온도·습도 (보조)", position: "환기팬에서 가장 먼 곳 (바람이 제일 안 통하는 곳)", note: "하우스 안에서 가장 덥고 습한 곳을 찾는 것", icon: "🌡️" },
        { name: "이산화탄소(CO₂) 센서", position: "하우스 중앙, 허리~가슴 높이 (120~150cm)", note: "문이나 환기구 바로 옆은 피하기 — 바람에 수치가 확 변함", icon: "💨" },
        { name: "햇빛 밝기 센서", position: "하우스 지붕 안쪽 또는 바깥", note: "비닐이 햇빛을 얼마나 통과시키느냐에 따라 안팎이 다름", icon: "☀️" },
      ]
    : [
        { name: "온도·습도 센서", position: "비가림 안쪽, 포도 잎 높이", note: "벽이나 기둥 옆은 온도가 달라서 피하기. 햇빛 가리개 필수", icon: "🌡️" },
        { name: "바깥 날씨 센서", position: "비가림 밖 탁 트인 곳에 별도 설치", note: "온습도는 사람 키 높이(150cm), 풍속은 3m 이상 높이", icon: "🌤️" },
        { name: "잎 표면 온도 (선택)", position: "포도잎을 향해서 설치", note: "물 부족하면 잎 온도가 올라감 — 물 부족 신호 조기 발견", icon: "🍃" },
      ];

  const warnings: { text: string; icon: string }[] = [];
  if (isRainShelter) {
    warnings.push({ text: "비가림 비닐 끝에서 빗물이 줄줄 흘러내리는 곳 근처는 피할 것 — 거기는 물이 쏠려서 평균이 아님", icon: "🚫" });
    warnings.push({ text: "기상청 '강수량'을 믿으면 안 됨 — 비가림 안에는 비가 안 들어오니까. 물 준 양만 따로 기록할 것", icon: "🌧️" });
  }
  if (isGreenhouse) {
    warnings.push({ text: "하우스 입구/중앙/끝쪽 온도가 많이 다름 — 센서 최소 2군데에 설치해야 평균을 알 수 있음", icon: "🌡️" });
    warnings.push({ text: "하우스는 비가 없어서 비료 성분(소금기)이 흙에 계속 쌓임 — 소금기 센서로 반드시 감시", icon: "⚠️" });
    warnings.push({ text: "물 주면 잘 안 말라서 오래 축축함 — 바깥 기준으로 물 주면 물이 너무 많아짐", icon: "💧" });
  }
  if (soil === "unknown") {
    warnings.push({ text: "흙 종류를 모르면 센서 깊이를 정확히 정할 수 없음 — 둥근 드릴(오거)로 1m 깊이까지 파보고 흙 색깔이 바뀌는 지점을 확인하세요", icon: "🪨" });
  }
  if (irrigation === "none") {
    warnings.push({ text: "점적호스가 없으면 물 주는 양이 매번 달라짐 — 센서 수치를 보면서 일정하게 주는 연습 필요", icon: "🪣" });
  }

  return { depths, trunkDist, emitterDist, ecRequired, envSensors, warnings };
}

export default function VineyardSensorGuidePage() {
  const [step, setStep] = useState(0);
  const [env, setEnv] = useState<string | null>(null);
  const [soil, setSoil] = useState<string | null>(null);
  const [irrigation, setIrrigation] = useState<string | null>(null);
  const [checked, setChecked] = useState<Record<string, boolean>>({});
  const [showMistakes, setShowMistakes] = useState(false);

  const recommendation = env && soil && irrigation ? getRecommendation(env, soil, irrigation) : null;
  const allCriticalChecked = CHECKLIST_ITEMS.filter((c) => c.critical).every((c) => checked[c.id]);
  const envLabel = ENVIRONMENTS.find((e) => e.id === env)?.label || "";
  const soilLabel = SOIL_TYPES.find((s) => s.id === soil)?.label || "";
  const irrigLabel = IRRIGATION.find((i) => i.id === irrigation)?.label || "";

  const backBtn: React.CSSProperties = {
    padding: "13px",
    borderRadius: "14px",
    border: "1px solid rgba(255,255,255,0.08)",
    background: "transparent",
    color: "#a5d6a7",
    fontSize: "13px",
    fontWeight: 500,
    cursor: "pointer",
    marginTop: "12px",
    width: "100%",
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(160deg, #1a2e1a 0%, #243524 40%, #1e2e1e 70%, #121a12 100%)",
        fontFamily: "'Noto Sans KR', sans-serif",
        color: "#e8f0e8",
        padding: 0,
      }}
    >
      {/* 헤더 */}
      <div
        style={{
          background: "linear-gradient(180deg, rgba(46,125,50,0.25) 0%, transparent 100%)",
          padding: "28px 20px 20px",
          textAlign: "center",
          borderBottom: "1px solid rgba(76,175,80,0.15)",
        }}
      >
        <div style={{ fontSize: "12px", color: "#81c784", letterSpacing: "4px", fontWeight: 500, marginBottom: "6px" }}>
          FARMSENSE
        </div>
        <h1
          style={{
            fontSize: "24px",
            fontWeight: 900,
            margin: "0 0 6px",
            background: "linear-gradient(135deg, #c8e6c9, #66bb6a, #43a047)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          🍇 포도밭 센서 설치 가이드
        </h1>
        <p style={{ fontSize: "13px", color: "#a5d6a7", margin: 0, fontWeight: 300 }}>
          우리 밭에 맞는 센서 위치를 찾아드립니다
        </p>
      </div>

      {/* 진행 표시줄 */}
      <div style={{ padding: "14px 20px 0", display: "flex", gap: "3px" }}>
        {["환경", "흙 종류", "물주기", "설치 위치", "체크리스트"].map((label, i) => (
          <div key={i} style={{ flex: 1, textAlign: "center" }}>
            <div
              style={{
                height: "4px",
                borderRadius: "2px",
                marginBottom: "4px",
                background: i <= step ? "linear-gradient(90deg, #43a047, #66bb6a)" : "rgba(255,255,255,0.08)",
                transition: "all 0.4s ease",
              }}
            />
            <div
              style={{
                fontSize: "10px",
                color: i <= step ? "#81c784" : "rgba(255,255,255,0.25)",
                fontWeight: i === step ? 700 : 400,
              }}
            >
              {label}
            </div>
          </div>
        ))}
      </div>

      <div style={{ padding: "20px", maxWidth: "560px", margin: "0 auto" }}>
        {/* Step 0: 재배 환경 */}
        {step === 0 && (
          <div>
            <h2 style={{ fontSize: "19px", fontWeight: 700, marginBottom: "4px" }}>
              우리 포도밭은 어떤 구조인가요?
            </h2>
            <p style={{ fontSize: "13px", color: "#a5d6a7", marginBottom: "18px" }}>
              구조에 따라 센서 위치·깊이·주의할 점이 완전히 달라집니다
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {ENVIRONMENTS.map((e) => (
                <button
                  key={e.id}
                  onClick={() => { setEnv(e.id); setStep(1); }}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "14px",
                    padding: "18px",
                    borderRadius: "16px",
                    border: "none",
                    cursor: "pointer",
                    background: env === e.id ? "linear-gradient(135deg, #2e7d32, #388e3c)" : "rgba(255,255,255,0.05)",
                    color: "#e8f0e8",
                    textAlign: "left",
                    transition: "all 0.2s",
                    boxShadow: env === e.id ? "0 4px 20px rgba(46,125,50,0.3)" : "none",
                  }}
                >
                  <span style={{ fontSize: "32px" }}>{e.icon}</span>
                  <div>
                    <div style={{ fontSize: "16px", fontWeight: 700 }}>{e.label}</div>
                    <div style={{ fontSize: "12px", color: "#a5d6a7", marginTop: "2px" }}>{e.desc}</div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 1: 흙 종류 */}
        {step === 1 && (
          <div>
            <h2 style={{ fontSize: "19px", fontWeight: 700, marginBottom: "4px" }}>
              밭 흙이 어떤 종류인가요?
            </h2>
            <p style={{ fontSize: "13px", color: "#a5d6a7", marginBottom: "18px" }}>
              흙 종류에 따라 물이 빠지는 속도가 달라서 센서 깊이가 바뀝니다
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
              {SOIL_TYPES.map((s) => (
                <button
                  key={s.id}
                  onClick={() => { setSoil(s.id); setStep(2); }}
                  style={{
                    padding: "20px 14px",
                    borderRadius: "16px",
                    border: "none",
                    cursor: "pointer",
                    background: soil === s.id ? "linear-gradient(135deg, #2e7d32, #388e3c)" : "rgba(255,255,255,0.05)",
                    color: "#e8f0e8",
                    textAlign: "center",
                    transition: "all 0.2s",
                  }}
                >
                  <div style={{ fontSize: "24px", marginBottom: "6px" }}>{s.icon}</div>
                  <div style={{ fontSize: "15px", fontWeight: 700 }}>{s.label}</div>
                  <div style={{ fontSize: "11px", color: "#a5d6a7", marginTop: "4px" }}>{s.desc}</div>
                </button>
              ))}
            </div>
            <button onClick={() => setStep(0)} style={backBtn}>← 이전</button>
          </div>
        )}

        {/* Step 2: 물주기 방식 */}
        {step === 2 && (
          <div>
            <h2 style={{ fontSize: "19px", fontWeight: 700, marginBottom: "4px" }}>
              물은 어떻게 주고 있나요?
            </h2>
            <p style={{ fontSize: "13px", color: "#a5d6a7", marginBottom: "18px" }}>
              점적호스가 있으면 물방울 떨어지는 곳 기준으로 센서를 묻습니다
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
              {IRRIGATION.map((i) => (
                <button
                  key={i.id}
                  onClick={() => { setIrrigation(i.id); setStep(3); }}
                  style={{
                    padding: "20px 14px",
                    borderRadius: "16px",
                    border: "none",
                    cursor: "pointer",
                    background: irrigation === i.id ? "linear-gradient(135deg, #2e7d32, #388e3c)" : "rgba(255,255,255,0.05)",
                    color: "#e8f0e8",
                    textAlign: "center",
                    transition: "all 0.2s",
                  }}
                >
                  <div style={{ fontSize: "24px", marginBottom: "6px" }}>{i.icon}</div>
                  <div style={{ fontSize: "15px", fontWeight: 700 }}>{i.label}</div>
                  <div style={{ fontSize: "11px", color: "#a5d6a7", marginTop: "4px" }}>{i.desc}</div>
                </button>
              ))}
            </div>
            <button onClick={() => setStep(1)} style={backBtn}>← 이전</button>
          </div>
        )}

        {/* Step 3: 설치 위치 추천 */}
        {step === 3 && recommendation && (
          <div>
            <h2 style={{ fontSize: "19px", fontWeight: 700, marginBottom: "4px" }}>📍 이렇게 설치하세요</h2>
            <div style={{ display: "inline-flex", gap: "6px", flexWrap: "wrap", marginBottom: "16px", marginTop: "4px" }}>
              {[envLabel, soilLabel, irrigLabel].map((l, i) => (
                <span
                  key={i}
                  style={{
                    background: "rgba(76,175,80,0.15)",
                    border: "1px solid rgba(76,175,80,0.3)",
                    padding: "4px 10px",
                    borderRadius: "20px",
                    fontSize: "12px",
                    color: "#a5d6a7",
                  }}
                >
                  {l}
                </span>
              ))}
            </div>

            {/* 땅속 센서 */}
            <div
              style={{
                background: "rgba(0,0,0,0.25)",
                borderRadius: "20px",
                padding: "20px",
                marginBottom: "14px",
                border: "1px solid rgba(76,175,80,0.15)",
              }}
            >
              <div style={{ fontSize: "15px", fontWeight: 700, marginBottom: "14px", color: "#a5d6a7" }}>
                🌱 땅 속 센서 (흙 속 물기) — 어디에, 얼마나 깊이?
              </div>
              {/* 땅속 시각화 */}
              <div
                style={{
                  background: "linear-gradient(180deg, #5d4037 0%, #4e342e 40%, #3e2723 70%, #2e1c15 100%)",
                  borderRadius: "14px",
                  padding: "16px",
                  position: "relative",
                  minHeight: "200px",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: "3px",
                    background: "linear-gradient(90deg, #66bb6a, #81c784, #66bb6a)",
                  }}
                />
                <div style={{ display: "flex", alignItems: "flex-start" }}>
                  <div style={{ textAlign: "center", width: "55px", flexShrink: 0, marginTop: "-4px" }}>
                    <div style={{ fontSize: "22px" }}>🍇</div>
                    <div style={{ width: "3px", height: "160px", background: "#8d6e63", margin: "0 auto", borderRadius: "2px" }} />
                    <div style={{ fontSize: "9px", color: "#bcaaa4", marginTop: "2px" }}>줄기</div>
                  </div>
                  <div style={{ width: "50px", textAlign: "center", paddingTop: "45px" }}>
                    <div style={{ fontSize: "10px", color: "#ffcc80", fontWeight: 700, lineHeight: "1.3" }}>
                      ←{recommendation.trunkDist.value}→
                    </div>
                    <div style={{ fontSize: "8px", color: "#bcaaa4", marginTop: "2px" }}>줄기에서 거리</div>
                  </div>
                  <div style={{ flex: 1, paddingTop: "10px" }}>
                    {recommendation.depths.map((d, i) => (
                      <div
                        key={i}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "8px",
                          marginBottom: i < recommendation.depths.length - 1 ? "22px" : "0",
                        }}
                      >
                        <div
                          style={{
                            width: "12px",
                            height: "12px",
                            borderRadius: "50%",
                            background: d.color,
                            boxShadow: `0 0 8px ${d.color}60`,
                            flexShrink: 0,
                          }}
                        />
                        <div>
                          <div style={{ fontSize: "13px", fontWeight: 700, color: d.color }}>{d.depth}</div>
                          <div style={{ fontSize: "10px", color: "#d7ccc8", marginTop: "1px" }}>{d.purpose}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* 상세 수치 */}
              <div
                style={{
                  marginTop: "14px",
                  padding: "14px",
                  borderRadius: "12px",
                  background: "rgba(76,175,80,0.08)",
                  border: "1px solid rgba(76,175,80,0.15)",
                }}
              >
                <div style={{ fontSize: "13px", marginBottom: "10px" }}>
                  <span style={{ color: "#81c784", fontWeight: 700 }}>🌿 포도나무 줄기에서:</span>{" "}
                  {recommendation.trunkDist.value}
                  <div style={{ fontSize: "11px", color: "#a5d6a7", marginTop: "2px", paddingLeft: "4px" }}>
                    → {recommendation.trunkDist.explain}
                  </div>
                </div>
                <div style={{ fontSize: "13px", marginBottom: "10px" }}>
                  <span style={{ color: "#81c784", fontWeight: 700 }}>💧 점적호스 물방울 지점에서:</span>{" "}
                  {recommendation.emitterDist.value}
                  <div style={{ fontSize: "11px", color: "#a5d6a7", marginTop: "2px", paddingLeft: "4px" }}>
                    → {recommendation.emitterDist.explain}
                  </div>
                </div>
                <div style={{ fontSize: "13px" }}>
                  <span style={{ color: "#81c784", fontWeight: 700 }}>🧂 소금기 센서:</span>{" "}
                  {recommendation.ecRequired.text}
                  <div style={{ fontSize: "11px", color: "#a5d6a7", marginTop: "2px", paddingLeft: "4px" }}>
                    → {recommendation.ecRequired.explain}
                  </div>
                </div>
              </div>
            </div>

            {/* 공기 중 센서 */}
            <div
              style={{
                background: "rgba(0,0,0,0.25)",
                borderRadius: "20px",
                padding: "20px",
                marginBottom: "14px",
                border: "1px solid rgba(76,175,80,0.15)",
              }}
            >
              <div style={{ fontSize: "15px", fontWeight: 700, marginBottom: "12px", color: "#a5d6a7" }}>
                🌡️ 공기 중 센서 (온도·습도·CO₂) — 어디에 달까?
              </div>
              {recommendation.envSensors.map((s, i) => (
                <div
                  key={i}
                  style={{
                    padding: "12px 0",
                    borderBottom: i < recommendation.envSensors.length - 1 ? "1px solid rgba(255,255,255,0.05)" : "none",
                  }}
                >
                  <div style={{ fontSize: "14px", fontWeight: 700 }}>
                    <span style={{ marginRight: "6px" }}>{s.icon}</span>
                    {s.name}
                  </div>
                  <div style={{ fontSize: "12px", color: "#a5d6a7", marginTop: "3px", paddingLeft: "28px" }}>
                    📌 {s.position}
                  </div>
                  <div style={{ fontSize: "11px", color: "#ffb74d", marginTop: "3px", paddingLeft: "28px" }}>
                    ⚠️ {s.note}
                  </div>
                </div>
              ))}
            </div>

            {/* 주의사항 */}
            {recommendation.warnings.length > 0 && (
              <div
                style={{
                  background: "rgba(255,152,0,0.08)",
                  borderRadius: "18px",
                  padding: "18px",
                  marginBottom: "14px",
                  border: "1px solid rgba(255,152,0,0.2)",
                }}
              >
                <div style={{ fontSize: "15px", fontWeight: 700, color: "#ffb74d", marginBottom: "10px" }}>
                  ⚠️ 꼭 알아두세요
                </div>
                {recommendation.warnings.map((w, i) => (
                  <div
                    key={i}
                    style={{
                      fontSize: "13px",
                      color: "#ffe0b2",
                      marginBottom: "10px",
                      display: "flex",
                      gap: "8px",
                      alignItems: "flex-start",
                    }}
                  >
                    <span style={{ flexShrink: 0 }}>{w.icon}</span>
                    <span>{w.text}</span>
                  </div>
                ))}
              </div>
            )}

            {/* 5대 실수 토글 */}
            <button
              onClick={() => setShowMistakes(!showMistakes)}
              style={{
                width: "100%",
                padding: "14px",
                borderRadius: "14px",
                background: "rgba(244,67,54,0.08)",
                border: "1px solid rgba(244,67,54,0.2)",
                color: "#ef9a9a",
                fontSize: "14px",
                fontWeight: 700,
                cursor: "pointer",
                marginBottom: showMistakes ? "10px" : "14px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
              }}
            >
              🚫 이것만은 절대 하지 마세요 (5가지) {showMistakes ? "▲" : "▼"}
            </button>
            {showMistakes && (
              <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginBottom: "14px" }}>
                {MISTAKES.map((m, i) => (
                  <div
                    key={i}
                    style={{
                      background: "rgba(0,0,0,0.25)",
                      borderRadius: "14px",
                      padding: "16px",
                      border: "1px solid rgba(244,67,54,0.1)",
                    }}
                  >
                    <div style={{ fontSize: "14px", fontWeight: 700, marginBottom: "8px" }}>
                      {m.icon} {m.title}
                    </div>
                    <div style={{ fontSize: "12px", color: "#ef9a9a", marginBottom: "8px", lineHeight: "1.5" }}>
                      ❌ {m.problem}
                    </div>
                    <div style={{ fontSize: "12px", color: "#a5d6a7", lineHeight: "1.5" }}>✅ {m.solution}</div>
                  </div>
                ))}
              </div>
            )}

            <div style={{ display: "flex", gap: "10px" }}>
              <button onClick={() => setStep(2)} style={{ ...backBtn, flex: 1, marginTop: 0 }}>← 이전</button>
              <button
                onClick={() => setStep(4)}
                style={{
                  flex: 2,
                  padding: "16px",
                  borderRadius: "14px",
                  border: "none",
                  cursor: "pointer",
                  background: "linear-gradient(135deg, #2e7d32, #43a047)",
                  color: "#fff",
                  fontSize: "15px",
                  fontWeight: 700,
                  boxShadow: "0 4px 16px rgba(46,125,50,0.3)",
                }}
              >
                설치 체크리스트 →
              </button>
            </div>
          </div>
        )}

        {/* Step 4: 체크리스트 */}
        {step === 4 && (
          <div>
            <h2 style={{ fontSize: "19px", fontWeight: 700, marginBottom: "4px" }}>
              ✅ 설치하면서 하나씩 체크하세요
            </h2>
            <p style={{ fontSize: "13px", color: "#a5d6a7", marginBottom: "18px" }}>
              🔴 표시는 반드시 확인 — 빠뜨리면 데이터를 못 믿습니다
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginBottom: "20px" }}>
              {CHECKLIST_ITEMS.map((c) => (
                <button
                  key={c.id}
                  onClick={() => setChecked((prev) => ({ ...prev, [c.id]: !prev[c.id] }))}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "12px",
                    padding: "14px",
                    borderRadius: "14px",
                    border: "none",
                    cursor: "pointer",
                    background: checked[c.id] ? "rgba(46,125,50,0.2)" : "rgba(255,255,255,0.04)",
                    color: "#e8f0e8",
                    textAlign: "left",
                    transition: "all 0.2s",
                    outline: c.critical && !checked[c.id] ? "1px solid rgba(239,83,80,0.25)" : "none",
                  }}
                >
                  <div
                    style={{
                      width: "26px",
                      height: "26px",
                      borderRadius: "8px",
                      flexShrink: 0,
                      marginTop: "1px",
                      border: checked[c.id] ? "none" : "2px solid rgba(255,255,255,0.15)",
                      background: checked[c.id] ? "#43a047" : "transparent",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "15px",
                      transition: "all 0.2s",
                      color: "#fff",
                      fontWeight: 700,
                    }}
                  >
                    {checked[c.id] && "✓"}
                  </div>
                  <div style={{ flex: 1, fontSize: "13px", lineHeight: "1.5" }}>
                    {c.critical && <span style={{ color: "#ef5350", marginRight: "4px" }}>🔴</span>}
                    {c.text}
                  </div>
                </button>
              ))}
            </div>

            {/* 완료 상태 */}
            <div
              style={{
                background: allCriticalChecked
                  ? "linear-gradient(135deg, #2e7d32, #388e3c)"
                  : "rgba(255,255,255,0.04)",
                borderRadius: "20px",
                padding: "24px",
                textAlign: "center",
                transition: "all 0.4s ease",
                boxShadow: allCriticalChecked ? "0 4px 24px rgba(46,125,50,0.4)" : "none",
                border: allCriticalChecked ? "none" : "1px solid rgba(255,255,255,0.06)",
              }}
            >
              {allCriticalChecked ? (
                <>
                  <div style={{ fontSize: "40px", marginBottom: "10px" }}>🎉</div>
                  <div style={{ fontSize: "18px", fontWeight: 700, marginBottom: "6px" }}>설치 완료!</div>
                  <div style={{ fontSize: "13px", color: "#c8e6c9", marginBottom: "16px", lineHeight: "1.6" }}>
                    FarmSense가 센서 데이터를 읽기 시작합니다.<br />
                    <span style={{ color: "#ffb74d" }}>처음 2~4주는 흙이 안정되는 기간</span>이라<br />
                    데이터를 참고만 하고 크게 의존하지 마세요.
                  </div>
                  <div
                    style={{
                      background: "rgba(0,0,0,0.2)",
                      borderRadius: "14px",
                      padding: "16px",
                      fontSize: "12px",
                      color: "#c8e6c9",
                      textAlign: "left",
                      lineHeight: "1.6",
                    }}
                  >
                    <div style={{ fontWeight: 700, marginBottom: "8px", fontSize: "13px" }}>
                      🤖 설치가 잘 됐는지 AI가 자동 확인합니다
                    </div>
                    <div style={{ marginBottom: "6px" }}>
                      물을 주면 FarmSense가 센서 반응 패턴을 분석합니다:
                    </div>
                    <div style={{ color: "#a5d6a7" }}>
                      ✅ 정상: 물 준 후 30분에 얕은 센서 반응 → 2시간 후 깊은 센서 반응
                    </div>
                    <div style={{ color: "#ef9a9a", marginTop: "4px" }}>
                      ⚠️ 이상: 깊은 센서가 먼저 반응 → 물이 구멍으로 바로 빠진 것 → 다시 설치 필요
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div style={{ fontSize: "32px", marginBottom: "10px" }}>🔒</div>
                  <div style={{ fontSize: "15px", fontWeight: 600, color: "#a5d6a7" }}>
                    🔴 필수 항목을 모두 체크해주세요
                  </div>
                  <div style={{ fontSize: "13px", color: "#81c784", marginTop: "6px" }}>
                    {CHECKLIST_ITEMS.filter((c) => c.critical && !checked[c.id]).length}개 남았습니다
                  </div>
                </>
              )}
            </div>

            <button onClick={() => setStep(3)} style={{ ...backBtn, marginTop: "14px" }}>
              ← 설치 위치로 돌아가기
            </button>
          </div>
        )}
      </div>

      {/* 하단 */}
      <div
        style={{
          textAlign: "center",
          padding: "20px",
          fontSize: "10px",
          color: "rgba(255,255,255,0.2)",
          borderTop: "1px solid rgba(255,255,255,0.04)",
          marginTop: "32px",
        }}
      >
        FarmSense 센서 설치 가이드 | 논문 27편 + 국내 현장 연구 기반
      </div>
    </div>
  );
}
