// Illustrations vectorielles ODT — blueprint hérité de la charte + motif
// territorial (courbes de niveau, réseau) + icônes des observatoires.

const GOLD = "#D4A017";
const GOLD_SOFT = "#E9C25A";
const TEAL = "#0FA3B1";

function CompassStar() {
  return (
    <g>
      <polygon points="0,-30 4,-8 0,-3 -4,-8" fill={GOLD} />
      <polygon points="0,30 4,8 0,3 -4,8" fill={GOLD} />
      <polygon points="-30,0 -8,4 -3,0 -8,-4" fill={GOLD} />
      <polygon points="30,0 8,4 3,0 8,-4" fill={GOLD} />
      <polygon points="22,-22 6,-3 3,-3 3,-6" fill={GOLD_SOFT} />
      <polygon points="-22,-22 -3,-6 -3,-3 -6,-3" fill={GOLD_SOFT} />
      <polygon points="22,22 3,6 3,3 6,3" fill={GOLD_SOFT} />
      <polygon points="-22,22 -6,3 -3,3 -3,6" fill={GOLD_SOFT} />
      <circle r="4.5" fill={GOLD} />
    </g>
  );
}

/** Fond décoratif des hero navy : grille + courbes topographiques + boussole. */
export function HeroTerritory({ className = "" }: { className?: string }) {
  const grid = Array.from({ length: 14 });
  return (
    <svg viewBox="0 0 560 560" fill="none" aria-hidden className={className}>
      <g stroke="#ffffff" strokeWidth="1" opacity="0.05">
        {grid.map((_, i) => (
          <line key={`h${i}`} x1="0" y1={i * 40} x2="560" y2={i * 40} />
        ))}
        {grid.map((_, i) => (
          <line key={`v${i}`} x1={i * 40} y1="0" x2={i * 40} y2="560" />
        ))}
      </g>
      {/* courbes de niveau */}
      <g stroke={TEAL} fill="none" opacity="0.4">
        <path d="M40,420 Q180,330 320,400 T600,370" strokeWidth="2" />
        <path d="M20,460 Q180,375 330,445 T610,415" strokeWidth="1.5" />
        <path d="M0,500 Q180,420 340,490 T620,460" strokeWidth="1.2" />
      </g>
      {/* réseau territorial */}
      <g opacity="0.7">
        <g stroke={GOLD} strokeWidth="1.2" opacity="0.6">
          <line x1="330" y1="120" x2="440" y2="90" />
          <line x1="440" y1="90" x2="500" y2="180" />
          <line x1="330" y1="120" x2="380" y2="230" />
          <line x1="380" y1="230" x2="500" y2="180" />
          <line x1="380" y1="230" x2="300" y2="300" />
        </g>
        {[
          [330, 120],
          [440, 90],
          [500, 180],
          [380, 230],
          [300, 300],
        ].map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r={i === 3 ? 7 : 4.5} fill={i % 2 ? GOLD : TEAL} />
        ))}
      </g>
      <g transform="translate(160,180) scale(2.2)" opacity="0.9">
        <CompassStar />
      </g>
    </svg>
  );
}

/** Icône d'observatoire (24×24, stroke = currentColor). */
export function ObsIcon({ slug, className = "" }: { slug: string; className?: string }) {
  const p = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
    className,
  };
  switch (slug) {
    case "eau":
      return (
        <svg {...p}>
          <path d="M12 3c3.5 4.5 6 7.6 6 10.6a6 6 0 01-12 0C6 10.6 8.5 7.5 12 3z" />
          <path d="M9 14a3 3 0 003 3" />
        </svg>
      );
    case "energie":
      return (
        <svg {...p}>
          <path d="M13 2L5 13h5l-1 9 8-11h-5l1-9z" />
        </svg>
      );
    case "infrastructures":
      return (
        <svg {...p}>
          <path d="M3 20h18" />
          <path d="M5 20V9l7-5 7 5v11" />
          <path d="M9 20v-6h6v6" />
        </svg>
      );
    case "economie":
      return (
        <svg {...p}>
          <line x1="4" y1="20" x2="21" y2="20" />
          <polyline points="5,16 10,10 14,13 20,5" />
          <polyline points="15,5 20,5 20,10" />
        </svg>
      );
    case "agriculture":
      return (
        <svg {...p}>
          <path d="M12 21V11" />
          <path d="M12 13Q5 12 4 5q7 1 8 8z" />
          <path d="M12 11q7-1 8-7-7 0-8 7z" />
        </svg>
      );
    case "climat-resilience":
      return (
        <svg {...p}>
          <circle cx="8" cy="8" r="3.4" />
          <path d="M8 2v1.6M8 12.4V14M2 8h1.6M12.4 8H14M3.8 3.8l1.1 1.1M11.1 11.1l1.1 1.1M12.2 3.8l-1.1 1.1" />
          <path d="M14 20h5.5a2.7 2.7 0 000-5.4 4.4 4.4 0 00-8.5-1.3A3.4 3.4 0 0011 20h3z" />
        </svg>
      );
    case "gouvernance":
      return (
        <svg {...p}>
          <path d="M3 9l9-5 9 5" />
          <line x1="5" y1="9" x2="5" y2="18" />
          <line x1="9.5" y1="9" x2="9.5" y2="18" />
          <line x1="14.5" y1="9" x2="14.5" y2="18" />
          <line x1="19" y1="9" x2="19" y2="18" />
          <path d="M3 18h18v2H3z" />
        </svg>
      );
    default:
      return (
        <svg {...p}>
          <circle cx="12" cy="12" r="8" />
        </svg>
      );
  }
}

/** Icône de type de programme. */
export function ProgIcon({ type, className = "" }: { type: string; className?: string }) {
  const p = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
    className,
  };
  switch (type) {
    case "Agropole":
      return (
        <svg {...p}>
          <path d="M4 21V10l5-3 5 3v11" />
          <path d="M14 21V13l6-3v11" />
          <path d="M7 21v-4h4v4" />
        </svg>
      );
    case "Corridor économique":
      return (
        <svg {...p}>
          <path d="M7 21L10 3M17 21L14 3" />
          <path d="M9.2 8h5.6M8.4 14h7.2" strokeDasharray="2 2.5" />
        </svg>
      );
    case "Pôle de croissance":
      return (
        <svg {...p}>
          <path d="M2 8l10-4 10 4-10 4z" />
          <path d="M6 10v4.5c0 1.4 2.7 2.5 6 2.5s6-1.1 6-2.5V10" />
          <line x1="22" y1="8" x2="22" y2="13" />
        </svg>
      );
    case "Bassin de développement":
      return (
        <svg {...p}>
          <path d="M3 7c3 0 3 2 6 2s3-2 6-2 3 2 6 2" />
          <path d="M3 12c3 0 3 2 6 2s3-2 6-2 3 2 6 2" />
          <path d="M3 17c3 0 3 2 6 2s3-2 6-2 3 2 6 2" />
        </svg>
      );
    default: // Portefeuille
      return (
        <svg {...p}>
          <rect x="3" y="8" width="18" height="12" rx="2" />
          <path d="M9 8V6a2 2 0 012-2h2a2 2 0 012 2v2" />
          <path d="M3 13h18" />
        </svg>
      );
  }
}
