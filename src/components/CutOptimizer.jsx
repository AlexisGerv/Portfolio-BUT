import React, { useState } from 'react';

export default function CutOptimizer() {
  const [t, setT] = useState(26);
  const R = 86, cx = 96, cy = 96;
  const planks = [];
  const palette = ["#3d5afe", "#0ea5a4", "#8b5cf6", "#f59e0b", "#ef4444", "#10b981", "#6366f1", "#ec4899"];
  let y = -R, k = 0;
  while (y < R) {
    const yTop = y, yBot = Math.min(y + t, R);
    const edge = Math.max(Math.abs(yTop), Math.abs(yBot));
    const half = Math.sqrt(Math.max(0, R * R - edge * edge));
    if (yBot - yTop > 3 && half > 6) {
      planks.push({ x: cx - half, y: cy + yTop, w: half * 2, h: yBot - yTop, c: palette[k % palette.length] });
      k++;
    }
    y += t;
  }
  const logArea = Math.PI * R * R;
  const used = planks.reduce(function (a, p) { return a + p.w * p.h; }, 0);
  const yld = Math.round(used / logArea * 100);
  return (
    <div className="preview-stage">
      <p className="pv-hint">Cœur du logiciel : transformer une grume ronde en plateaux rectangulaires. Faites varier l'épaisseur de coupe pour voir le rendement matière se recalculer.</p>
      <div style={{ display: "flex", gap: 16, flexWrap: "wrap", alignItems: "center" }}>
        <svg className="pv-svg" viewBox="0 0 192 192" style={{ maxWidth: 210, background: "#1a2030", border: "1px solid var(--line)" }}>
          <circle cx={cx} cy={cy} r={R} fill="#efe7da" stroke="#cdbfa6" strokeWidth="2" />
          {[70, 52, 34].map(function (r, i) { return <circle key={i} cx={cx} cy={cy} r={r} fill="none" stroke="#dfd2bd" strokeWidth="1" />; })}
          {planks.map(function (p, i) {
            return (
              <rect key={i} x={p.x} y={p.y} width={p.w} height={Math.max(0, p.h - 1.4)} rx="1.5"
                fill={p.c} fillOpacity="0.82" stroke={p.c} strokeWidth="0.5" />
            );
          })}
        </svg>
        <div style={{ flex: 1, minWidth: 170, display: "flex", flexDirection: "column", gap: 12 }}>
          <div className="pv-ctrl">Épaisseur <span className="val">{t} mm</span></div>
          <input className="pv-range" type="range" min="14" max="46" value={t} onChange={function (e) { setT(+e.target.value); }} />
          <div className="pv-stat-row">
            <div className="pv-stat"><b>{planks.length}</b><span>plateaux</span></div>
            <div className="pv-stat"><b>{yld}%</b><span>rendement</span></div>
          </div>
        </div>
      </div>
    </div>
  );
}
