type Mood = "wink" | "happy" | "shocked" | "smirk";

const OUT = "#1A1023";

/** Rasidi, the hisaab buddy: a cream receipt with a torn zigzag bottom. */
export function Rasidi({
  mood = "wink",
  body = "#FFF4E6",
  cheek = "#FF95C2",
  sparkle = false,
  wave = true,
  className = "",
  tilt = -6,
}: {
  mood?: Mood;
  body?: string;
  cheek?: string;
  sparkle?: boolean;
  wave?: boolean;
  className?: string;
  tilt?: number;
}) {
  return (
    <svg viewBox="0 0 230 250" className={className} role="img" aria-label="Rasidi, the Hisaab Desk mascot">
      <style>{`
        @keyframes rasidi-wave { 0%,100%{transform:rotate(0deg)} 50%{transform:rotate(-18deg)} }
        @keyframes rasidi-float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-6px)} }
        .r-hand{transform-origin:176px 128px;animation:rasidi-wave 1.6s ease-in-out infinite}
        .r-body{animation:rasidi-float 4s ease-in-out infinite}
      `}</style>
      {sparkle && (
        <g fill="#C6FF3D" stroke={OUT} strokeWidth="2.5" strokeLinejoin="round">
          <path d="M196 14 L201 30 L217 35 L201 40 L196 56 L191 40 L175 35 L191 30 Z" />
          <path d="M18 70 L21 79 L30 82 L21 85 L18 94 L15 85 L6 82 L15 79 Z" />
        </g>
      )}
      <g className="r-body">
        <g transform={`rotate(${tilt} 110 130)`}>
          {/* waving arm */}
          <g className={wave ? "r-hand" : ""}>
            <path d="M172 132 Q196 122 200 96" fill="none" stroke={OUT} strokeWidth="7" strokeLinecap="round" />
            <circle cx="201" cy="88" r="13" fill={body} stroke={OUT} strokeWidth="6" />
          </g>
          {/* receipt body with torn bottom */}
          <path
            d="M50 26 H160 Q176 26 176 42 V206 L161 222 L146 206 L131 222 L116 206 L101 222 L86 206 L71 222 L56 206 L41 222 L34 214 V42 Q34 26 50 26 Z"
            fill={body}
            stroke={OUT}
            strokeWidth="7"
            strokeLinejoin="round"
          />
          {/* face */}
          {mood === "shocked" ? (
            <>
              <circle cx="82" cy="86" r="14" fill="#fff" stroke={OUT} strokeWidth="5" />
              <circle cx="128" cy="86" r="14" fill="#fff" stroke={OUT} strokeWidth="5" />
              <circle cx="84" cy="88" r="5" fill={OUT} />
              <circle cx="126" cy="88" r="5" fill={OUT} />
              <ellipse cx="105" cy="128" rx="11" ry="14" fill={OUT} />
              <path d="M160 52 Q170 68 160 76 Q150 68 160 52 Z" fill="#4FB6FF" stroke={OUT} strokeWidth="3" />
            </>
          ) : (
            <>
              {mood === "smirk" ? (
                <>
                  <path d="M72 88 Q82 82 92 88" fill="none" stroke={OUT} strokeWidth="6" strokeLinecap="round" />
                  <path d="M118 88 Q128 82 138 88" fill="none" stroke={OUT} strokeWidth="6" strokeLinecap="round" />
                  <path d="M86 122 Q106 132 126 116" fill="none" stroke={OUT} strokeWidth="6" strokeLinecap="round" />
                </>
              ) : (
                <>
                  <ellipse cx="82" cy="86" rx="7" ry="10" fill={OUT} />
                  {mood === "wink" ? (
                    <path d="M118 90 Q128 78 138 90" fill="none" stroke={OUT} strokeWidth="6" strokeLinecap="round" />
                  ) : (
                    <ellipse cx="128" cy="86" rx="7" ry="10" fill={OUT} />
                  )}
                  <path
                    d={mood === "happy" ? "M80 112 Q105 146 130 112 Z" : "M82 114 Q105 138 128 114"}
                    fill={mood === "happy" ? OUT : "none"}
                    stroke={OUT}
                    strokeWidth="6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </>
              )}
              <ellipse cx="64" cy="112" rx="10" ry="6" fill={cheek} />
              <ellipse cx="146" cy="112" rx="10" ry="6" fill={cheek} />
            </>
          )}
          {/* total line */}
          <line x1="56" y1="170" x2="154" y2="170" stroke="#9A9AA6" strokeWidth="5" strokeDasharray="19 8" strokeLinecap="round" />
        </g>
      </g>
    </svg>
  );
}
