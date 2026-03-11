'use client';

import { useState, useMemo } from "react";

// ===== 센서 카탈로그 =====
const SENSORS: Record<string, { id: string; name: string; desc: string; price: number; icon: string; category: string; perUnit: string; onlyGreenhouse?: boolean; note?: string }> = {
  temp_humidity: { id: "temp_humidity", name: "온도·습도 센서", desc: "하우스/밭 안의 온도와 습도를 실시간으로 알려줌", price: 15000, icon: "🌡️", category: "basic", perUnit: "개" },
  soil_moisture: { id: "soil_moisture", name: "흙 속 물기 센서", desc: "흙이 마른지 축축한지 알려줌 — 물 줄 타이밍 판단", price: 12000, icon: "💧", category: "basic", perUnit: "개" },
  leaf_wetness: { id: "leaf_wetness", name: "잎 젖음 센서", desc: "잎에 이슬/물기가 있는지 감지 — 곰팡이병 예방 핵심", price: 40000, icon: "🍃", category: "disease", perUnit: "개" },
  soil_ec: { id: "soil_ec", name: "흙 소금기 센서", desc: "비료가 흙에 너무 쌓이지 않는지 확인", price: 40000, icon: "🧂", category: "precision", perUnit: "개" },
  ir_temp: { id: "ir_temp", name: "잎 온도 센서 (적외선)", desc: "잎이 뜨거우면 물이 부족하다는 신호 — 열 스트레스 감지", price: 25000, icon: "🔥", category: "precision", perUnit: "개" },
  co2: { id: "co2", name: "이산화탄소(CO₂) 센서", desc: "하우스 안 이산화탄소 농도 — 환기 타이밍 판단", price: 75000, icon: "💨", category: "precision", onlyGreenhouse: true, perUnit: "개" },
  weather: { id: "weather", name: "바깥 날씨 센서", desc: "외부 온도·습도·풍속·햇빛 — 환기 판단에 필요", price: 120000, icon: "🌤️", category: "weather", perUnit: "세트" },
  flir: { id: "flir", name: "열화상 카메라 (FLIR One Pro)", desc: "눈에 안 보이는 병을 3~5일 전에 발견 + 물 부족 구역 한눈에", price: 500000, icon: "📷", category: "premium", perUnit: "대", note: "갤럭시 S10/S20/S21/Note10 호환. A시리즈는 안 될 수 있음" },
  flir_phone: { id: "flir_phone", name: "열화상 전용폰 (중고 S10)", desc: "FLIR 카메라 연결용 — 기존 폰이 안 되면 필요", price: 100000, icon: "📱", category: "premium", perUnit: "대", note: "WiFi만 연결되면 유심 없이 사용 가능" },
};

// ===== 통신 장비 =====
const COMM = {
  nbiot_module: { name: "NB-IoT 통신모듈", desc: "센서 데이터를 서버로 전송 (폰 터지면 됨)", price: 25000, monthly: 3000, icon: "📡" },
  lora_node: { name: "LoRa 무선 모듈", desc: "센서 데이터를 게이트웨이로 전송", price: 15000, monthly: 0, icon: "📻" },
  lora_gateway: { name: "LoRa 게이트웨이", desc: "집에 설치 — 밭의 센서 데이터를 모아서 인터넷으로 전송", price: 180000, monthly: 0, icon: "🏠" },
  lte_router: { name: "LTE 라우터", desc: "인터넷이 없는 곳에 설치 — 유심으로 인터넷 연결", price: 40000, monthly: 10000, icon: "🌐" },
  wifi_module: { name: "WiFi 모듈", desc: "센서 데이터를 WiFi로 전송 (가장 저렴)", price: 5000, monthly: 0, icon: "📶" },
};

const NODE_BASE = { name: "센서 본체 (방수함+배터리+태양광)", price: 50000, icon: "🔋" };

// ===== 스타일 =====
const h2Style: React.CSSProperties = { fontSize: "18px", fontWeight: 700, marginBottom: "14px", color: "#e8f0e8" };
const selBg = "linear-gradient(135deg, #2e7d32, #388e3c)";
const defBg = "rgba(255,255,255,0.04)";
const selShadow = "0 4px 16px rgba(46,125,50,0.3)";
const optionBtn: React.CSSProperties = { display: "flex", alignItems: "center", gap: "14px", padding: "16px", borderRadius: "14px", border: "none", cursor: "pointer", color: "#e8f0e8", textAlign: "left", transition: "all 0.2s", width: "100%" };
const counterBtn: React.CSSProperties = { width: "44px", height: "44px", borderRadius: "12px", border: "1px solid rgba(76,175,80,0.3)", background: "rgba(76,175,80,0.1)", color: "#66bb6a", fontSize: "22px", fontWeight: 700, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" };
const nextBtn: React.CSSProperties = { padding: "15px", borderRadius: "14px", border: "none", cursor: "pointer", background: "linear-gradient(135deg, #2e7d32, #43a047)", color: "#fff", fontSize: "15px", fontWeight: 700, width: "100%", marginTop: "14px", boxShadow: "0 4px 16px rgba(46,125,50,0.3)" };
const backBtn: React.CSSProperties = { padding: "13px", borderRadius: "14px", border: "1px solid rgba(255,255,255,0.08)", background: "transparent", color: "#a5d6a7", fontSize: "13px", fontWeight: 500, cursor: "pointer" };
const smallBtn: React.CSSProperties = { width: "32px", height: "32px", borderRadius: "10px", border: "1px solid rgba(76,175,80,0.3)", background: "rgba(76,175,80,0.1)", color: "#66bb6a", fontSize: "18px", fontWeight: 700, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" };
const cardStyle: React.CSSProperties = { background: "rgba(0,0,0,0.25)", borderRadius: "18px", padding: "18px", marginTop: "10px", border: "1px solid rgba(76,175,80,0.12)" };
const cardTitle: React.CSSProperties = { fontSize: "14px", fontWeight: 700, color: "#a5d6a7", marginBottom: "10px" };
const lineItem: React.CSSProperties = { display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: "13px", padding: "6px 0", borderBottom: "1px solid rgba(255,255,255,0.04)" };
const subtotalLine: React.CSSProperties = { display: "flex", justifyContent: "space-between", fontSize: "14px", fontWeight: 700, color: "#e8f0e8", paddingTop: "10px", marginTop: "6px", borderTop: "1px solid rgba(76,175,80,0.2)" };
const sectionLabel: React.CSSProperties = { fontSize: "12px", fontWeight: 700, color: "#81c784", marginTop: "16px", marginBottom: "8px", paddingLeft: "4px", letterSpacing: "1px" };
const infoBox: React.CSSProperties = { background: "rgba(76,175,80,0.08)", borderRadius: "14px", padding: "14px", border: "1px solid rgba(76,175,80,0.15)" };
const warnBox: React.CSSProperties = { background: "rgba(255,152,0,0.08)", borderRadius: "14px", padding: "14px", border: "1px solid rgba(255,152,0,0.2)", marginBottom: "12px" };

function Tag({ children }: { children: React.ReactNode }) {
  return <span style={{ background: "rgba(76,175,80,0.15)", border: "1px solid rgba(76,175,80,0.3)", padding: "3px 10px", borderRadius: "20px", fontSize: "11px", color: "#a5d6a7" }}>{children}</span>;
}

function renderSensorGroup(ids: string[], cart: Record<string, number>, updateCart: (id: string, qty: number) => void, envType: string | null) {
  return ids.map(id => {
    const s = SENSORS[id];
    if (!s) return null;
    if (s.onlyGreenhouse && envType !== "greenhouse") return null;
    const qty = cart[id] || 0;
    return (
      <div key={id} style={{ background: qty > 0 ? "rgba(46,125,50,0.15)" : "rgba(255,255,255,0.03)", borderRadius: "14px", padding: "14px", marginBottom: "8px", border: qty > 0 ? "1px solid rgba(76,175,80,0.3)" : "1px solid rgba(255,255,255,0.05)", transition: "all 0.2s" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: "14px", fontWeight: 700 }}>{s.icon} {s.name}</div>
            <div style={{ fontSize: "11px", color: "#a5d6a7", marginTop: "2px", lineHeight: "1.4" }}>{s.desc}</div>
            {s.note && <div style={{ fontSize: "10px", color: "#ffb74d", marginTop: "3px" }}>⚠️ {s.note}</div>}
            <div style={{ fontSize: "12px", color: "#81c784", marginTop: "4px", fontWeight: 700 }}>{s.price.toLocaleString()}원/{s.perUnit}</div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "8px", marginLeft: "12px", flexShrink: 0 }}>
            <button onClick={() => updateCart(id, qty - 1)} style={{ ...smallBtn, opacity: qty === 0 ? 0.3 : 1 }}>−</button>
            <span style={{ fontSize: "18px", fontWeight: 900, color: qty > 0 ? "#66bb6a" : "#555", minWidth: "24px", textAlign: "center" }}>{qty}</span>
            <button onClick={() => updateCart(id, qty + 1)} style={smallBtn}>+</button>
          </div>
        </div>
      </div>
    );
  });
}

export default function SensorConfiguratorPage() {
  const [step, setStep] = useState(0);
  const [envType, setEnvType] = useState<string | null>(null);
  const [houseCount, setHouseCount] = useState(3);
  const [hasWifi, setHasWifi] = useState<boolean | null>(null);
  const [phoneSignal, setPhoneSignal] = useState<string | null>(null);
  const [hasElectricity, setHasElectricity] = useState<boolean | null>(null);
  const [cart, setCart] = useState<Record<string, number>>({});

  const commType = useMemo(() => {
    if (hasWifi) return "wifi";
    if (phoneSignal === "good" && houseCount <= 3) return "nbiot";
    if (phoneSignal === "good" && houseCount > 3) return "lora_lte";
    if (phoneSignal === "weak") return "lora_lte";
    if (phoneSignal === "none") return "lora_lte";
    return null;
  }, [hasWifi, phoneSignal, houseCount]);

  const recommended = useMemo(() => {
    if (!envType) return [];
    const n = houseCount;
    const recs: Array<typeof SENSORS[string] & { qty: number; reason: string }> = [
      { ...SENSORS.temp_humidity, qty: n, reason: "하우스(밭)마다 1개씩" },
      { ...SENSORS.soil_moisture, qty: n * 2, reason: `하우스당 2개 (얕은곳 + 깊은곳)` },
    ];
    if (envType === "greenhouse") {
      recs.push({ ...SENSORS.co2, qty: Math.ceil(n / 2), reason: "하우스 2동당 1개" });
    }
    return recs;
  }, [envType, houseCount]);

  const updateCart = (id: string, qty: number) => {
    setCart(prev => {
      const next = { ...prev };
      if (qty <= 0) delete next[id];
      else next[id] = qty;
      return next;
    });
  };

  const applyRecommended = () => {
    const next: Record<string, number> = {};
    recommended.forEach(r => { next[r.id] = r.qty; });
    setCart(next);
  };

  const costs = useMemo(() => {
    let sensorCost = 0;
    const sensorItems: Array<typeof SENSORS[string] & { qty: number; subtotal: number }> = [];
    Object.entries(cart).forEach(([id, qty]) => {
      const s = SENSORS[id];
      if (s && qty > 0) {
        const subtotal = s.price * qty;
        sensorCost += subtotal;
        sensorItems.push({ ...s, qty, subtotal });
      }
    });

    const nodeCount = houseCount;
    const nodeCost = NODE_BASE.price * nodeCount;

    let commInitial = 0;
    let commMonthly = 0;
    const commItems: Array<{ name: string; icon: string; qty: number; subtotal: number; monthlyTotal?: number }> = [];

    if (commType === "wifi") {
      commInitial = COMM.wifi_module.price * nodeCount;
      commItems.push({ ...COMM.wifi_module, qty: nodeCount, subtotal: COMM.wifi_module.price * nodeCount });
    } else if (commType === "nbiot") {
      commInitial = COMM.nbiot_module.price * nodeCount;
      commMonthly = COMM.nbiot_module.monthly * nodeCount;
      commItems.push({ ...COMM.nbiot_module, qty: nodeCount, subtotal: COMM.nbiot_module.price * nodeCount, monthlyTotal: COMM.nbiot_module.monthly * nodeCount });
    } else if (commType === "lora_lte") {
      commInitial = COMM.lora_node.price * nodeCount + COMM.lora_gateway.price + COMM.lte_router.price;
      commMonthly = COMM.lte_router.monthly;
      commItems.push({ ...COMM.lora_node, qty: nodeCount, subtotal: COMM.lora_node.price * nodeCount });
      commItems.push({ ...COMM.lora_gateway, qty: 1, subtotal: COMM.lora_gateway.price });
      commItems.push({ ...COMM.lte_router, qty: 1, subtotal: COMM.lte_router.price, monthlyTotal: COMM.lte_router.monthly });
    }

    const totalInitial = sensorCost + nodeCost + commInitial;
    const totalMonthly = commMonthly;

    return { sensorCost, sensorItems, nodeCost, nodeCount, commInitial, commMonthly, commItems, totalInitial, totalMonthly };
  }, [cart, commType, houseCount]);

  const fmt = (n: number) => n.toLocaleString("ko-KR");

  return (
    <div style={{ minHeight: "100vh", background: "linear-gradient(160deg, #0f1a0f 0%, #1a2e1a 40%, #162016 100%)", fontFamily: "'Noto Sans KR', sans-serif", color: "#e8f0e8", paddingTop: "80px" }}>

      {/* 헤더 */}
      <div style={{ background: "linear-gradient(180deg, rgba(46,125,50,0.25) 0%, transparent 100%)", padding: "24px 20px 18px", textAlign: "center", borderBottom: "1px solid rgba(76,175,80,0.15)" }}>
        <div style={{ fontSize: "11px", color: "#81c784", letterSpacing: "4px", fontWeight: 500, marginBottom: "4px" }}>FARMSENSE</div>
        <h1 style={{ fontSize: "22px", fontWeight: 900, margin: "0 0 4px", background: "linear-gradient(135deg, #c8e6c9, #66bb6a)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>🍇 우리 밭 맞춤 센서 견적</h1>
        <p style={{ fontSize: "12px", color: "#a5d6a7", margin: 0 }}>3분이면 끝 — 환경 고르고, 센서 고르면 견적이 나옵니다</p>
      </div>

      {/* 진행률 */}
      <div style={{ padding: "12px 20px 0", display: "flex", gap: "3px" }}>
        {["우리 밭", "인터넷", "센서 고르기", "견적서"].map((l, i) => (
          <div key={i} style={{ flex: 1, textAlign: "center" }}>
            <div style={{ height: "4px", borderRadius: "2px", marginBottom: "3px", background: i <= step ? "linear-gradient(90deg, #43a047, #66bb6a)" : "rgba(255,255,255,0.08)", transition: "all 0.3s" }} />
            <div style={{ fontSize: "10px", color: i <= step ? "#81c784" : "rgba(255,255,255,0.25)", fontWeight: i === step ? 700 : 400 }}>{l}</div>
          </div>
        ))}
      </div>

      <div style={{ padding: "18px", maxWidth: "560px", margin: "0 auto" }}>

        {/* ===== Step 0: 환경 ===== */}
        {step === 0 && (
          <div>
            <h2 style={h2Style}>우리 포도밭은 어떤 구조인가요?</h2>
            {[
              { id: "rain-shelter", icon: "🏕️", label: "노지 비가림", desc: "비닐 지붕으로 비 막고 옆은 뚫림" },
              { id: "greenhouse", icon: "🏠", label: "하우스 (시설)", desc: "비닐/유리로 완전히 막힌 온실" },
              { id: "open-field", icon: "🌿", label: "완전 노지", desc: "지붕 없이 하늘 아래" },
            ].map(e => (
              <button key={e.id} onClick={() => setEnvType(e.id)} style={{ ...optionBtn, background: envType === e.id ? selBg : defBg, boxShadow: envType === e.id ? selShadow : "none", marginBottom: "8px" }}>
                <span style={{ fontSize: "28px" }}>{e.icon}</span>
                <div><div style={{ fontSize: "15px", fontWeight: 700 }}>{e.label}</div><div style={{ fontSize: "11px", color: "#a5d6a7", marginTop: "2px" }}>{e.desc}</div></div>
              </button>
            ))}

            {envType && (
              <div style={{ marginTop: "16px" }}>
                <div style={{ fontSize: "14px", fontWeight: 700, marginBottom: "10px" }}>
                  {envType === "open-field" ? "관리 구역이 몇 곳인가요?" : "하우스가 몇 동인가요?"}
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "16px", justifyContent: "center" }}>
                  <button onClick={() => setHouseCount(Math.max(1, houseCount - 1))} style={counterBtn}>−</button>
                  <span style={{ fontSize: "32px", fontWeight: 900, color: "#66bb6a", minWidth: "50px", textAlign: "center" }}>{houseCount}</span>
                  <button onClick={() => setHouseCount(Math.min(20, houseCount + 1))} style={counterBtn}>+</button>
                  <span style={{ fontSize: "13px", color: "#a5d6a7" }}>{envType === "open-field" ? "구역" : "동"}</span>
                </div>
                <button onClick={() => setStep(1)} style={nextBtn}>다음 →</button>
              </div>
            )}
          </div>
        )}

        {/* ===== Step 1: 통신 환경 ===== */}
        {step === 1 && (
          <div>
            <h2 style={h2Style}>밭에 인터넷(WiFi)이 되나요?</h2>
            <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
              {[
                { val: true, icon: "📶", label: "WiFi 됨", desc: "공유기가 밭 근처에 있음" },
                { val: false, icon: "🚫", label: "WiFi 안 됨", desc: "밭에 인터넷 선이 없음" },
              ].map(o => (
                <button key={String(o.val)} onClick={() => setHasWifi(o.val)} style={{ ...optionBtn, flex: 1, flexDirection: "column", textAlign: "center", padding: "18px 12px", background: hasWifi === o.val ? selBg : defBg }}>
                  <span style={{ fontSize: "28px" }}>{o.icon}</span>
                  <div style={{ fontSize: "14px", fontWeight: 700, marginTop: "6px" }}>{o.label}</div>
                  <div style={{ fontSize: "11px", color: "#a5d6a7", marginTop: "2px" }}>{o.desc}</div>
                </button>
              ))}
            </div>

            {hasWifi === false && (
              <>
                <h2 style={{ ...h2Style, marginTop: "16px" }}>밭에서 폰은 잘 터지나요?</h2>
                <div style={{ display: "flex", gap: "8px", marginBottom: "16px", flexWrap: "wrap" }}>
                  {[
                    { val: "good", icon: "📱", label: "잘 터짐", desc: "카톡 잘 됨" },
                    { val: "weak", icon: "📱", label: "약하게 터짐", desc: "가끔 끊김" },
                    { val: "none", icon: "❌", label: "안 터짐", desc: "산속/음영지역" },
                  ].map(o => (
                    <button key={o.val} onClick={() => setPhoneSignal(o.val)} style={{ ...optionBtn, flex: 1, flexDirection: "column", textAlign: "center", padding: "16px 8px", background: phoneSignal === o.val ? selBg : defBg, minWidth: "90px" }}>
                      <span style={{ fontSize: "24px" }}>{o.icon}</span>
                      <div style={{ fontSize: "13px", fontWeight: 700, marginTop: "4px" }}>{o.label}</div>
                      <div style={{ fontSize: "10px", color: "#a5d6a7", marginTop: "2px" }}>{o.desc}</div>
                    </button>
                  ))}
                </div>

                {phoneSignal === "none" && (
                  <div style={warnBox}>
                    <div style={{ fontSize: "14px", fontWeight: 700, color: "#ffb74d", marginBottom: "6px" }}>⚠️ 폰이 안 터지는 곳</div>
                    <div style={{ fontSize: "12px", color: "#ffe0b2", lineHeight: "1.6" }}>
                      별도 통신 장비가 필요합니다. 밭에 전기가 있으면 LoRa+LTE 방식으로 가능해요.
                    </div>
                  </div>
                )}

                {phoneSignal && phoneSignal !== "none" && houseCount > 3 && (
                  <div style={{ ...infoBox, marginBottom: "12px" }}>
                    <div style={{ fontSize: "12px", color: "#c8e6c9", lineHeight: "1.5" }}>
                      💡 {houseCount}동이면 LoRa 방식이 더 경제적이에요. 밭에 전기가 있나요?
                    </div>
                  </div>
                )}
              </>
            )}

            {(hasWifi || (hasWifi === false && phoneSignal)) && (
              <>
                {!hasWifi && (phoneSignal === "none" || (phoneSignal && houseCount > 3)) && (
                  <>
                    <h2 style={{ ...h2Style, marginTop: "16px" }}>밭에 전기가 들어오나요?</h2>
                    <div style={{ display: "flex", gap: "10px", marginBottom: "16px" }}>
                      {[
                        { val: true, icon: "⚡", label: "전기 있음" },
                        { val: false, icon: "🔋", label: "전기 없음 (태양광)" },
                      ].map(o => (
                        <button key={String(o.val)} onClick={() => setHasElectricity(o.val)} style={{ ...optionBtn, flex: 1, textAlign: "center", padding: "16px", background: hasElectricity === o.val ? selBg : defBg }}>
                          <span style={{ fontSize: "24px" }}>{o.icon}</span>
                          <div style={{ fontSize: "13px", fontWeight: 700, marginTop: "4px" }}>{o.label}</div>
                        </button>
                      ))}
                    </div>
                  </>
                )}

                {commType && (
                  <div style={infoBox}>
                    <div style={{ fontSize: "13px", fontWeight: 700, color: "#81c784", marginBottom: "6px" }}>
                      ✅ 통신 방식이 정해졌어요
                    </div>
                    <div style={{ fontSize: "13px", color: "#c8e6c9" }}>
                      {commType === "wifi" && "📶 WiFi로 연결합니다 — 가장 저렴해요"}
                      {commType === "nbiot" && `📡 NB-IoT (폰 통신망) — 노드마다 유심, 월 ${fmt(COMM.nbiot_module.monthly * houseCount)}원`}
                      {commType === "lora_lte" && `📻 LoRa + LTE — 집에 게이트웨이 설치, 월 ${fmt(COMM.lte_router.monthly)}원`}
                    </div>
                  </div>
                )}

                <div style={{ display: "flex", gap: "10px", marginTop: "14px" }}>
                  <button onClick={() => setStep(0)} style={{ ...backBtn, flex: 1 }}>← 이전</button>
                  <button onClick={() => { applyRecommended(); setStep(2); }} style={{ ...nextBtn, flex: 2, marginTop: 0 }}>센서 고르기 →</button>
                </div>
              </>
            )}
          </div>
        )}

        {/* ===== Step 2: 센서 선택 ===== */}
        {step === 2 && (
          <div>
            <h2 style={h2Style}>센서를 골라주세요</h2>
            <p style={{ fontSize: "12px", color: "#a5d6a7", marginBottom: "6px", marginTop: "-8px" }}>추천 수량이 미리 채워져 있어요. 조절하거나 추가할 수 있습니다</p>

            <div style={sectionLabel}>기본 (필수)</div>
            {renderSensorGroup(["temp_humidity", "soil_moisture"], cart, updateCart, envType)}

            <div style={sectionLabel}>병 예방</div>
            {renderSensorGroup(["leaf_wetness"], cart, updateCart, envType)}

            <div style={sectionLabel}>꼼꼼한 관리</div>
            {renderSensorGroup(
              envType === "greenhouse" ? ["soil_ec", "ir_temp", "co2"] : ["soil_ec", "ir_temp"],
              cart, updateCart, envType
            )}

            <div style={sectionLabel}>바깥 날씨</div>
            {renderSensorGroup(["weather"], cart, updateCart, envType)}

            <div style={sectionLabel}>열화상 (프리미엄)</div>
            {renderSensorGroup(["flir", "flir_phone"], cart, updateCart, envType)}

            <div style={{ display: "flex", gap: "10px", marginTop: "16px" }}>
              <button onClick={() => setStep(1)} style={{ ...backBtn, flex: 1 }}>← 이전</button>
              <button onClick={() => setStep(3)} style={{ ...nextBtn, flex: 2, marginTop: 0 }}>견적서 보기 →</button>
            </div>
          </div>
        )}

        {/* ===== Step 3: 견적서 ===== */}
        {step === 3 && (
          <div>
            <h2 style={h2Style}>💰 견적서</h2>
            <div style={{ display: "inline-flex", gap: "6px", flexWrap: "wrap", marginBottom: "14px" }}>
              <Tag>{envType === "rain-shelter" ? "노지 비가림" : envType === "greenhouse" ? "하우스" : "노지"}</Tag>
              <Tag>{houseCount}{envType === "open-field" ? "구역" : "동"}</Tag>
              <Tag>{commType === "wifi" ? "WiFi" : commType === "nbiot" ? "NB-IoT" : "LoRa+LTE"}</Tag>
            </div>

            {/* 센서 비용 */}
            <div style={cardStyle}>
              <div style={cardTitle}>🌱 센서</div>
              {costs.sensorItems.map((s, i) => (
                <div key={i} style={lineItem}>
                  <span>{s.icon} {s.name} × {s.qty}{s.perUnit}</span>
                  <span style={{ color: "#a5d6a7", fontWeight: 700 }}>{fmt(s.subtotal)}원</span>
                </div>
              ))}
              {costs.sensorItems.length === 0 && <div style={{ fontSize: "12px", color: "#81c784" }}>센서를 선택하지 않았어요</div>}
              <div style={subtotalLine}>
                <span>센서 소계</span>
                <span>{fmt(costs.sensorCost)}원</span>
              </div>
            </div>

            {/* 본체 비용 */}
            <div style={cardStyle}>
              <div style={cardTitle}>🔋 센서 본체 (방수함+배터리+태양광)</div>
              <div style={lineItem}>
                <span>{NODE_BASE.icon} 본체 × {costs.nodeCount}개</span>
                <span style={{ color: "#a5d6a7", fontWeight: 700 }}>{fmt(costs.nodeCost)}원</span>
              </div>
              <div style={{ fontSize: "11px", color: "#81c784", marginTop: "4px" }}>
                {envType === "open-field" ? "구역" : "하우스"}당 1개 — 센서 여러 개를 하나의 본체에 연결
              </div>
            </div>

            {/* 통신 비용 */}
            <div style={cardStyle}>
              <div style={cardTitle}>📡 통신 장비</div>
              {costs.commItems.map((c, i) => (
                <div key={i}>
                  <div style={lineItem}>
                    <span>{c.icon} {c.name} {c.qty > 1 ? `× ${c.qty}` : ""}</span>
                    <span style={{ color: "#a5d6a7", fontWeight: 700 }}>{fmt(c.subtotal)}원</span>
                  </div>
                  {c.monthlyTotal && c.monthlyTotal > 0 && (
                    <div style={{ fontSize: "11px", color: "#ffb74d", paddingLeft: "28px" }}>+ 월 {fmt(c.monthlyTotal)}원</div>
                  )}
                </div>
              ))}
              <div style={subtotalLine}>
                <span>통신 소계</span>
                <span>{fmt(costs.commInitial)}원</span>
              </div>
            </div>

            {/* 총합 */}
            <div style={{ background: "linear-gradient(135deg, #2e7d32, #388e3c)", borderRadius: "20px", padding: "24px", textAlign: "center", marginTop: "14px", boxShadow: "0 4px 24px rgba(46,125,50,0.4)" }}>
              <div style={{ fontSize: "13px", color: "#c8e6c9", marginBottom: "8px" }}>설치비 (1회)</div>
              <div style={{ fontSize: "36px", fontWeight: 900, color: "#fff" }}>{fmt(costs.totalInitial)}원</div>
              {costs.totalMonthly > 0 && (
                <div style={{ fontSize: "16px", color: "#a5d6a7", marginTop: "8px" }}>
                  + 매달 <span style={{ color: "#fff", fontWeight: 700 }}>{fmt(costs.totalMonthly)}원</span>
                </div>
              )}
              <div style={{ marginTop: "16px", fontSize: "12px", color: "#c8e6c9", lineHeight: "1.6" }}>
                약값 한 번 아끼면 본전 | 보조사업 아님, 내 돈으로 바로 가능
              </div>
            </div>

            {/* 연간 비용 */}
            <div style={{ ...infoBox, marginTop: "14px", textAlign: "center" }}>
              <div style={{ fontSize: "12px", color: "#81c784", marginBottom: "4px" }}>1년 총 비용</div>
              <div style={{ fontSize: "20px", fontWeight: 700, color: "#e8f0e8" }}>
                {fmt(costs.totalInitial + costs.totalMonthly * 12)}원
              </div>
              <div style={{ fontSize: "11px", color: "#a5d6a7", marginTop: "4px" }}>
                설치비 {fmt(costs.totalInitial)}원 + 통신비 {fmt(costs.totalMonthly * 12)}원/년
              </div>
            </div>

            {/* 포함 서비스 */}
            <div style={{ ...cardStyle, marginTop: "14px" }}>
              <div style={cardTitle}>📱 FarmSense 앱 (무료 포함)</div>
              {[
                "환기 언제 열지 알려줌",
                "병 오기 전에 미리 경보",
                "물 언제 줄지 추천",
                "사진 찍으면 병 이름 + 약 알려줌",
                "포도 전문 AI 상담 (12만건 데이터)",
              ].map((t, i) => (
                <div key={i} style={{ fontSize: "13px", color: "#c8e6c9", padding: "4px 0", paddingLeft: "20px", position: "relative" }}>
                  <span style={{ position: "absolute", left: 0, color: "#66bb6a" }}>✓</span> {t}
                </div>
              ))}
            </div>

            <div style={{ display: "flex", gap: "10px", marginTop: "16px" }}>
              <button onClick={() => setStep(2)} style={{ ...backBtn, flex: 1 }}>← 센서 수정</button>
              <a href="tel:01054771190" style={{ ...nextBtn, flex: 2, marginTop: 0, background: "linear-gradient(135deg, #e65100, #f57c00)", textDecoration: "none", display: "flex", alignItems: "center", justifyContent: "center" }}>
                📞 문의하기
              </a>
            </div>

            <div style={{ textAlign: "center", marginTop: "12px", fontSize: "14px", color: "#a5d6a7" }}>
              한문수 010-5477-1190
            </div>
          </div>
        )}
      </div>

      <div style={{ textAlign: "center", padding: "20px", fontSize: "10px", color: "rgba(255,255,255,0.15)", borderTop: "1px solid rgba(255,255,255,0.04)", marginTop: "32px" }}>
        FarmSense 센서 견적 시스템 | farmsense.kr
      </div>
    </div>
  );
}
