// Composants de données de l'Observatoire — bilingues (fr/en). Chaque valeur
// porte source + millésime (doctrine : rien sans source). SVG maison.

import { WDI, SERIES_CM, PAYS_CEMAC, WDI_SOURCE, cmValue } from "@/content/wdi";
import { WDI_LABELS_EN, PAYS_EN, WDI_SOURCE_EN } from "@/content/en";

type Lang = "fr" | "en";

const T = {
  fr: {
    cameroun: "Cameroun",
    compare: "comparaison CEMAC",
    evo: (l: string, a: number, b: number) => `${l} — Cameroun, ${a}–${b}`,
    cols: ["Indicateur", "Cameroun", "Millésime", "Unité"],
    hab: "hab.",
    source: WDI_SOURCE,
    locale: "fr-FR",
  },
  en: {
    cameroun: "Cameroon",
    compare: "CEMAC comparison",
    evo: (l: string, a: number, b: number) => `${l} — Cameroon, ${a}–${b}`,
    cols: ["Indicator", "Cameroon", "Vintage", "Unit"],
    hab: "people",
    source: WDI_SOURCE_EN,
    locale: "en-US",
  },
} as const;

const label = (code: string, lang: Lang) =>
  lang === "en" ? (WDI_LABELS_EN[code] ?? WDI[code]?.label) : WDI[code]?.label;
const unitEn: Record<string, string> = {
  "% population": "% of population",
  "% population rurale": "% of rural population",
  "USD courants": "current USD",
  "%/an": "%/yr",
  "% PIB": "% of GDP",
  habitants: "people",
};
const unit = (code: string, lang: Lang) => {
  const u = WDI[code]?.unit ?? "";
  return lang === "en" ? (unitEn[u] ?? u) : u;
};
const fmt = (v: number, u: string, lang: Lang) => {
  const loc = T[lang].locale;
  if (u.startsWith("habitants") || u === "people") {
    return v >= 1_000_000 ? `${(v / 1_000_000).toFixed(1).replace(".", lang === "fr" ? "," : ".")} M` : v.toLocaleString(loc);
  }
  if (u.startsWith("USD") || u.startsWith("current")) return v.toLocaleString(loc, { maximumFractionDigits: 0 });
  return v.toLocaleString(loc, { maximumFractionDigits: 1 });
};
const pays = (iso: string, lang: Lang) => (lang === "en" ? (PAYS_EN[iso] ?? iso) : (PAYS_CEMAC[iso] ?? iso));

export function SourceTag({ year, lang = "fr" }: { year: string; lang?: Lang }) {
  return (
    <p className="mt-1 text-[11px] leading-snug text-grey">
      {T[lang].source} · {year}
    </p>
  );
}

export function StatCard({ code, lang = "fr" }: { code: string; lang?: Lang }) {
  const ind = WDI[code];
  const v = cmValue(code);
  if (!ind || !v) return null;
  const u = unit(code, lang);
  return (
    <div className="rounded-lg border border-line bg-paper p-5">
      <p className="text-sm font-semibold text-navy">{label(code, lang)}</p>
      <p className="mt-2 font-display text-3xl font-extrabold text-teal">
        {fmt(v.value, ind.unit, lang)}
        <span className="ml-1 text-base font-semibold text-grey">
          {ind.unit === "habitants" ? T[lang].hab : ind.unit.startsWith("USD") ? "USD" : "%"}
        </span>
      </p>
      <p className="text-xs text-grey">{T[lang].cameroun}</p>
      <SourceTag year={v.year} lang={lang} />
    </div>
  );
}

export function CemacCompare({ code, lang = "fr" }: { code: string; lang?: Lang }) {
  const ind = WDI[code];
  if (!ind) return null;
  const rows = Object.entries(ind.values)
    .map(([iso, v]) => ({ iso, nom: pays(iso, lang), ...v }))
    .sort((a, b) => b.value - a.value);
  const max = Math.max(...rows.map((r) => r.value));
  const years = [...new Set(rows.map((r) => r.year))].sort();
  return (
    <div className="rounded-lg border border-line bg-paper p-6">
      <p className="font-semibold text-navy">
        {label(code, lang)} — {T[lang].compare}
      </p>
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
            <span className="text-sm font-semibold tabular-nums text-ink">{fmt(r.value, ind.unit, lang)}</span>
          </div>
        ))}
      </div>
      <SourceTag year={years.length === 1 ? years[0] : `${years[0]}–${years[years.length - 1]}`} lang={lang} />
    </div>
  );
}

export function TrendChart({ code, lang = "fr" }: { code: string; lang?: Lang }) {
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
      <p className="font-semibold text-navy">{T[lang].evo(label(code, lang) ?? "", xMin, xMax)}</p>
      <svg viewBox={`0 0 ${W} ${H}`} className="mt-3 w-full" role="img" aria-label={label(code, lang)}>
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
        <text x={X(last.year) - 6} y={Y(last.value) - 8} textAnchor="end" fontSize="11" fontWeight="700" fill="#0e4c5a">
          {fmt(last.value, ind.unit, lang)} %
        </text>
      </svg>
      <SourceTag year={`${xMin}–${xMax}`} lang={lang} />
    </div>
  );
}

export function IndicatorTable({ codes, lang = "fr" }: { codes: string[]; lang?: Lang }) {
  const cols = T[lang].cols;
  return (
    <div className="overflow-x-auto rounded-lg border border-line">
      <table className="w-full min-w-[560px] text-sm">
        <thead>
          <tr className="bg-navy text-left text-white">
            {cols.map((c) => (
              <th key={c} className="px-4 py-2.5 font-semibold">
                {c}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {codes.map((c) => {
            const ind = WDI[c];
            const v = cmValue(c);
            if (!ind || !v) return null;
            return (
              <tr key={c} className="border-t border-line odd:bg-paper even:bg-light">
                <td className="px-4 py-2.5 text-ink">{label(c, lang)}</td>
                <td className="px-4 py-2.5 font-semibold tabular-nums text-navy">{fmt(v.value, ind.unit, lang)}</td>
                <td className="px-4 py-2.5 text-grey">{v.year}</td>
                <td className="px-4 py-2.5 text-grey">{unit(c, lang)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <p className="px-4 py-2 text-[11px] text-grey">{T[lang].source}</p>
    </div>
  );
}
