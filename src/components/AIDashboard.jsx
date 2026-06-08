import React, { useState } from 'react';
import { DV } from '../data/portfolioData';

export default function AIDashboard() {
  const [k, setK] = useState("sect");
  const set = DV[k];
  const color = { sect: "#52b788", job: "#ef4444", year: "#0ea5a4" }[k];
  return (
    <div className="preview-stage">
      <div className="pv-tabs">
        <button className={"pv-tab " + (k === "sect" ? "on" : "")} onClick={function () { setK("sect"); }}>Par secteur</button>
        <button className={"pv-tab " + (k === "job" ? "on" : "")} onClick={function () { setK("job"); }}>Pertes d'emploi</button>
        <button className={"pv-tab " + (k === "year" ? "on" : "")} onClick={function () { setK("year"); }}>Confiance / année</button>
      </div>
      <div className="pv-ctrl" style={{ fontWeight: 700 }}>{set.title}</div>
      <div className="pv-bars">
        {set.data.map(function (row) {
          const lbl = row[0], v = row[1];
          return (
            <div className="pv-bar-row" key={lbl}>
              <span className="lbl">{lbl}</span>
              <div className="pv-bar-track"><div className="pv-bar-fill" style={{ width: (v / set.max * 100) + "%", background: color }}></div></div>
              <span className="num">{v.toFixed(1)}</span>
            </div>
          );
        })}
      </div>
      <p className="pv-hint">Données réelles agrégées du dataset Kaggle <i>Global AI Content Impact</i> (200 observations, 2020-2025) — l'original combinait barres, box plots, heatmap et carte choroplèthe sous Plotly JS.</p>
    </div>
  );
}
