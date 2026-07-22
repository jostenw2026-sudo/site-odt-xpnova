// Composants de données de l'Observatoire — chaque valeur porte source + millésime
// (doctrine : rien sans source). SVG maison, aucune librairie externe.

import { WDI, SERIES_CM, PAYS_CEMAC, WDI_SOURCE, cmValue } from "@/content/wdi";

const fmt = (v: number, unit: string) => {
  if (unit === "habitants") {
    return v >= 1_000_000 ? `${(v / 1_000_000).toFixed(1).replace(".", ",")} M` : v.toLocaleString("fr-FR");
  }
  if (unit.startsWith("USD")) return v.toLocaleString("fr-FR", { maximumFractionDigits: 0 });
  return v.toLocaleString("fr-FR", { maximumFractionDigits: 1 });
};

/** Étiquette de source — obligatoire sous chaque donnée. */
export function SourceTag({ year }: { year: string }) {
  return (
    <p className="mt-1 text-[11px] leading-snug text-grey">
      {WDI_SOURCE} · {year}
    </p>
  );
}

/** Carte indicateur (valeur Cameroun). */
export function StatCard({ code }: { code: string }) {
  const ind = WDI[code];
  const v = cmValue(code);
  if (!ind || !v) return null;
  return (
    <div className="rounded-lg border border-line bg-paper p-5">
      <p className="text-sm font-semibold text-navy">{ind.label}</p>
      <p className="mt-2 font-display text-3xl font-extrabold text-teal">
        {fmt(v.value, ind.unit)}
        <span className="ml-1 text-base font-semibold text-grey">
          {ind.unit === "habitants" ? "hab." : ind.unit.startsWith("USD") ? "USD" : "%"}
        </span>
      </p>
      <p className="text-xs text-grey">Cameroun</p>
      <SourceTag year={v.year} />
    </div>
  );
}

/** Comparateur CEMAC — barres horizontales, données réelles par pays. */
export function CemacCompare({ code }: { code: string }) {
  const ind = WDI[code];
  if (!ind) return null;
  const rows = Object.entries(ind.values)
    .map(([iso, v]) => ({ iso, nom: PAYS_CEMAC[iso] ?? iso, ...v }))
    .sort((a, b) => b.value - a.value);
  const max = Math.max(...rows.map((r) => r.value));
  const years = [...new Set(rows.map((r) => r.year))].sort();
  return (
    <div className="rounded-lg border border-line bg-paper p-6">
      <p className="font-semibold text-navy">{ind.label} — comparaison CEMAC</p>
      <div className="mt-4 space-y-2.5">
        {rows.map((r) => (
          <div key={r.iso} className="grid grid-cols-[7.5rem_1fr_auto] items-center gap-3">
            <span className={`truncate text-sm ${r.iso === "CMR" ? "font-bold text-navy" : "text-grey"}`}>
              {r.nom}
            </span>
            <div className="h-3 overflow-hidden rounded-full bg-light">
              <div
                className={`h-full rounded-full ${r.iso === "CMR" ? "bg-teal" : "bg-navy/30"}`}
                style={{ width: `${Math.max(3, (r.value / max) * 100)}%` }}
              />
            </div>
            <span className="text-sm font-semibold tabular-nums text-ink">{fmt(r.value, ind.unit)}</span>
          </div>
        ))}
      </div>
      <SourceTag year={years.length === 1 ? years[0] : `${years[0]}–${years[years.length - 1]}`} />
    </div>
  );
}

/** Courbe d'évolution (série Cameroun 2000–2024). */
export function TrendChart({ code }: { code: string }) {
  const serie = SERIES_CM[code];
  const ind = WDI[code];
  if (!serie || serie.length < 2 || !ind) return null;
  const W = 560;
  const H = 180;
  const PAD = { l: 34, r: 10, t: 10, b: 22 };
  const xs = serie.map((p) => p.year);
  const ys = serie.map((p) => p.value);
  const xMin = Math.min(...xs);
  const xMax = Math.max(...xs);
  const yMax = Math.ceil(Math.max(...ys) / 10) * 10;
  const X = (yr: number) => PAD.l + ((yr - xMin) / (xMax - xMin)) * (W - PAD.l - PAD.r);
  const Y = (v: number) => H - PAD.b - (v / yMax) * (H - PAD.t - PAD.b);
  const path = serie.map((p, i) => `${i === 0 ? "M" : "L"}${X(p.year).toFixed(1)},${Y(p.value).toFixed(1)}`).join(" ");
  const last = serie[serie.length - 1];
  return (
    <div className="rounded-lg border border-line bg-paper p-6">
      <p className="font-semibold text-navy">
        {ind.label} — Cameroun, {xMin}–{xMax}
      </p>
      <svg viewBox={`0 0 ${W} ${H}`} className="mt-3 w-full" role="img" aria-label={`Évolution : ${ind.label}`}>
        {[0, 25, 50, 75, 100].filter((g) => g <= yMax).map((g) => (
          <g key={g}>
            <line x1={PAD.l} x2={W - PAD.r} y1={Y(g)} y2={Y(g)} stroke="#E2E5EC" strokeWidth="1" />
            <text x={PAD.l - 6} y={Y(g) + 4} textAnchor="end" fontSize="10" fill="#5A6072">
              {g}
            </text>
          </g>
        ))}
        {[xMin, Math.round((xMin + xMax) / 2), xMax].map((yr) => (
          <text key={yr} x={X(yr)} y={H - 6} textAnchor="middle" fontSize="10" fill="#5A6072">
            {yr}
          </text>
        ))}
        <path d={path} fill="none" stroke="#0FA3B1" strokeWidth="2.5" strokeLinejoin="round" />
        <circle cx={X(last.year)} cy={Y(last.value)} r="4" fill="#0FA3B1" />
        <text x={X(last.year) - 6} y={Y(last.value) - 8} textAnchor="end" fontSize="11" fontWeight="700" fill="#0D1F5C">
          {fmt(last.value, ind.unit)} %
        </text>
      </svg>
      <SourceTag year={`${xMin}–${xMax}`} />
    </div>
  );
}

/** Tableau d'indicateurs (tous codes, valeurs Cameroun + meilleure/moins bonne CEMAC). */
export function IndicatorTable({ codes }: { codes: string[] }) {
  return (
    <div className="overflow-x-auto rounded-lg border border-line">
      <table className="w-full min-w-[560px] text-sm">
        <thead>
          <tr className="bg-navy text-left text-white">
            <th className="px-4 py-2.5 font-semibold">Indicateur</th>
            <th className="px-4 py-2.5 font-semibold">Cameroun</th>
            <th className="px-4 py-2.5 font-semibold">Millésime</th>
            <th className="px-4 py-2.5 font-semibold">Unité</th>
          </tr>
        </thead>
        <tbody>
          {codes.map((c) => {
            const ind = WDI[c];
            const v = cmValue(c);
            if (!ind || !v) return null;
            return (
              <tr key={c} className="border-t border-line odd:bg-paper even:bg-light">
                <td className="px-4 py-2.5 text-ink">{ind.label}</td>
                <td className="px-4 py-2.5 font-semibold tabular-nums text-navy">{fmt(v.value, ind.unit)}</td>
                <td className="px-4 py-2.5 text-grey">{v.year}</td>
                <td className="px-4 py-2.5 text-grey">{ind.unit}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <p className="px-4 py-2 text-[11px] text-grey">{WDI_SOURCE}</p>
    </div>
  );
}
