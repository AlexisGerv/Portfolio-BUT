import React, { useState } from 'react';
import { CY_NODES } from '../data/portfolioData';

export default function CyberInfra() {
  const [sel, setSel] = useState("npm");
  function Node(id, x, y, w, c) {
    const on = sel === id;
    return (
      <g className="pv-node" onClick={function () { setSel(id); }} transform={"translate(" + x + "," + y + ")"}>
        <rect width={w} height="40" rx="9" fill={on ? c : "#253044"} stroke={c} strokeWidth={on ? 0 : 1.5} />
        <text x={w / 2} y="25" textAnchor="middle" fontSize="11.5" fontWeight="700" fontFamily="Inter" fill={on ? "#0d1117" : "#b0bcc9"}>{CY_NODES[id].label}</text>
      </g>
    );
  }
  function line(x1, y1, x2, y2) { return <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="#3a4d64" strokeWidth="2" strokeDasharray="4 4" />; }
  return (
    <div className="preview-stage">
      <p className="pv-hint">Architecture du Home Lab. Cliquez un maillon pour voir comment il est durci.</p>
      <svg className="pv-svg" viewBox="0 0 360 232" style={{ maxWidth: 420, margin: "0 auto", background: "#1a2030", border: "1px solid var(--line)" }}>
        {line(80, 46, 180, 86)}{line(180, 106, 180, 140)}{line(180, 160, 180, 186)}
        {Node("net", 30, 26, 100, "#ef4444")}
        {Node("npm", 130, 86, 100, "#52b788")}
        {Node("docker", 110, 140, 140, "#8b5cf6")}
        {Node("host", 110, 186, 140, "#0ea5a4")}
        <text x="296" y="50" fontSize="9.5" fontFamily="'JetBrains Mono',monospace" fill="#4a5a6e">:443 only</text>
        <text x="244" y="116" fontSize="9.5" fontFamily="'JetBrains Mono',monospace" fill="#4a5a6e">TLS</text>
      </svg>
      <div className="pv-cyber-detail">{CY_NODES[sel].detail}</div>
    </div>
  );
}
