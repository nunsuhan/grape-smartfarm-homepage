/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // ── 기본 배경/텍스트 토큰 (라이트 테마로 전환) ──────────────
        bg: {
          DEFAULT: "#FEFCF6",   // 크림 배경 (메인)
          2: "#F5F1E8",         // 샌드 배경 (섹션 교대)
          3: "#EDE9DC",         // 따뜻한 베이지
          4: "#E0DBD0",         // 조금 더 짙은 샌드
        },
        surface: "#FFFFFF",     // 카드 배경 (흰색)

        txt: {
          DEFAULT: "#2C1810",   // 짙은 나무색 (메인 텍스트)
          2: "#64503E",         // 중간 톤 (보조 텍스트)
          3: "#9C8A7A",         // 연한 톤 (힌트/캡션)
        },

        // 포인트 컬러: 에메랄드 → 포도잎 그린
        accent: {
          DEFAULT: "#3D7C47",   // 포도잎 그린
          glow: "rgba(61,124,71,0.15)",
          2: "#2D5F35",
        },

        // ── 모듈별 컬러 (유지) ────────────────────────────────────
        mod: {
          grow:    "#10b981",
          climate: "#06b6d4",
          protect: "#f43f5e",
          water:   "#3b82f6",
          yield:   "#f59e0b",
          trace:   "#8b5cf6",
          export:  "#ec4899",
        },

        // ── 신규 브랜드 팔레트 ───────────────────────────────────
        vine: {
          50:  "#F0FDF4",
          100: "#DCFCE7",
          200: "#BBF7D0",
          500: "#3D7C47",       // 메인 CTA (포도잎 그린)
          600: "#2D5F35",
          700: "#1E4425",
          800: "#183820",
          900: "#14532D",
        },

        grape: {
          400: "#A78BFA",       // 포도 퍼플 (데이터/AI 강조)
          500: "#7C3AED",
          600: "#6D28D9",
        },

        harvest: {
          400: "#FB923C",       // 수확 오렌지 (수출/인증 강조)
          500: "#F97316",
        },

        // ── 시멘틱 편의 토큰 ─────────────────────────────────────
        cream: "#FEFCF6",
        sand:  "#F5F1E8",
        bark:  "#2C1810",
      },

      fontFamily: {
        sans:        ["var(--font-pretendard)", "var(--font-outfit)", "system-ui", "sans-serif"],
        pretendard:  ["var(--font-pretendard)", "system-ui", "sans-serif"],
        outfit:      ["var(--font-outfit)", "sans-serif"],
        mono:        ["var(--font-mono)", "'JetBrains Mono'", "monospace"],
      },

      borderRadius: {
        card: "16px",
        sm:   "10px",
        xs:   "6px",
      },
    },
  },
  plugins: [],
};
