import React, { useState } from 'react';

export default function ValdKit() {
  const [m, setM] = useState("pan");
  const pan = m === "pan";
  const bg = pan ? "radial-gradient(120% 120% at 30% 0%, #2a1216 0%, #0b0b0d 70%)" : "radial-gradient(120% 120% at 70% 0%, #fdfaf2 0%, #efe7d6 75%)";
  const ink = pan ? "#f4eef0" : "#1a1410";
  const sub = pan ? "#c9939c" : "#9a7b4a";
  const accent = pan ? "#b3122b" : "#caa14a";
  return (
    <div className="preview-stage">
      <div className="pv-tabs">
        <button className={"pv-tab " + (pan ? "on" : "")} onClick={function () { setM("pan"); }}>Pandémonium</button>
        <button className={"pv-tab " + (!pan ? "on" : "")} onClick={function () { setM("mag"); }}>Magnificat</button>
      </div>
      <div className="pv-vald" style={{ background: bg, color: ink }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
          <span style={{ fontSize: 11, letterSpacing: ".22em", textTransform: "uppercase", color: sub, fontWeight: 600 }}>Dossier de presse</span>
          <span style={{ fontSize: 11, color: sub, fontFamily: "'JetBrains Mono',monospace" }}>{pan ? "Mars 2025" : "Accor Arena"}</span>
        </div>
        <div>
          <div style={{ fontSize: 13, letterSpacing: ".3em", textTransform: "uppercase", color: sub, marginBottom: 6 }}>VALD</div>
          <div style={{ fontSize: "clamp(30px,7vw,46px)", fontWeight: 800, lineHeight: .95, letterSpacing: "-.02em" }}>{pan ? "PANDÉMONIUM" : "MAGNIFICAT"}</div>
          <div style={{ height: 3, width: 70, background: accent, margin: "14px 0 10px" }}></div>
          <p style={{ fontSize: 13, maxWidth: 380, color: ink, opacity: .85, margin: 0 }}>
            {pan
              ? "Univers sombre et abrasif : direction artistique brute, typographie tranchante, codes du rap underground."
              : "Renouveau lumineux : palette dorée, mise en page aérée, lancement-surprise à l'Accor Arena."}
          </p>
        </div>
        <div style={{ display: "flex", gap: 8, fontSize: 10.5, color: sub, flexWrap: "wrap" }}>
          <span>Échelon Records</span><span>·</span><span>Sony / Hall Access</span><span>·</span><span>Booking Live Nation</span>
        </div>
      </div>
      <p className="pv-hint">Le press kit (11 pages) jouait sur la dualité de marque de l'artiste — une même charte déclinée de l'obscurité vers la lumière. Basculez pour voir les deux directions artistiques.</p>
    </div>
  );
}
