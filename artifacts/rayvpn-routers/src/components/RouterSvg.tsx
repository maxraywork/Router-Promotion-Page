export function RouterSvg({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 400 320"
      fill="none"
      className={className}
      aria-label="Xiaomi AX 3000T"
    >
      {/* Shadow */}
      <ellipse cx="200" cy="307" rx="115" ry="9" fill="black" opacity="0.4" />

      {/* Antennas */}
      <rect x="78" y="28" width="8" height="88" rx="4" fill="#CCCCCC" />
      <rect x="314" y="28" width="8" height="88" rx="4" fill="#CCCCCC" />
      <rect x="143" y="18" width="8" height="80" rx="4" fill="#DDDDDD" />
      <rect x="249" y="18" width="8" height="80" rx="4" fill="#DDDDDD" />
      {/* Antenna caps */}
      <circle cx="82" cy="28" r="7" fill="#BBBBBB" />
      <circle cx="318" cy="28" r="7" fill="#BBBBBB" />
      <circle cx="147" cy="18" r="5.5" fill="#CCCCCC" />
      <circle cx="253" cy="18" r="5.5" fill="#CCCCCC" />

      {/* Main body */}
      <rect x="38" y="108" width="324" height="152" rx="18" fill="#EFEFEF" />
      {/* Top highlight */}
      <rect x="38" y="108" width="324" height="8" rx="4" fill="white" opacity="0.9" />

      {/* Front panel */}
      <rect x="54" y="122" width="292" height="122" rx="12" fill="#E6E6E6" />

      {/* Brand stripe */}
      <rect x="54" y="122" width="292" height="34" rx="12" fill="#DC2C2C" />
      <rect x="54" y="144" width="292" height="12" fill="#DC2C2C" />

      {/* XIAOMI text */}
      <text
        x="110"
        y="146"
        fontFamily="Arial, sans-serif"
        fontSize="13"
        fontWeight="bold"
        fill="white"
        letterSpacing="2.5"
      >
        XIAOMI
      </text>

      {/* Model label on stripe */}
      <text
        x="290"
        y="146"
        fontFamily="Arial, sans-serif"
        fontSize="10"
        fill="rgba(255,255,255,0.7)"
        textAnchor="middle"
        letterSpacing="0.5"
      >
        AX3000T
      </text>

      {/* LED strip */}
      <rect x="220" y="162" width="110" height="10" rx="5" fill="#D0D0D0" />
      <circle cx="232" cy="167" r="4" fill="#22CC66" />
      <circle cx="246" cy="167" r="4" fill="#22CC66" opacity="0.75" />
      <circle cx="260" cy="167" r="4" fill="#FFAA00" />
      <circle cx="274" cy="167" r="4" fill="#DC2C2C" opacity="0.7" />
      <circle cx="288" cy="167" r="4" fill="#DC2C2C" opacity="0.4" />
      <circle cx="316" cy="167" r="3" fill="white" opacity="0.5" />

      {/* Port area */}
      <rect x="62" y="158" width="130" height="30" rx="5" fill="#D2D2D2" />
      {[0, 1, 2, 3, 4].map((i) => (
        <rect
          key={i}
          x={68 + i * 22}
          y={163}
          width="14"
          height="18"
          rx="2"
          fill={i === 0 ? "#DC2C2C" : "#BBBBBB"}
          opacity={i === 0 ? 0.7 : 1}
        />
      ))}

      {/* Vent grill */}
      <rect x="62" y="198" width="276" height="38" rx="7" fill="#DCDCDC" />
      {Array.from({ length: 27 }).map((_, i) => (
        <rect
          key={i}
          x={70 + i * 10}
          y={205}
          width="3"
          height="22"
          rx="1.5"
          fill="#C8C8C8"
        />
      ))}

      {/* Base */}
      <rect x="56" y="254" width="288" height="18" rx="7" fill="#D8D8D8" />
      {/* Rubber feet */}
      <rect x="76" y="267" width="28" height="8" rx="4" fill="#AAAAAA" />
      <rect x="296" y="267" width="28" height="8" rx="4" fill="#AAAAAA" />
    </svg>
  );
}
