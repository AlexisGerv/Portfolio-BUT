import React, { useState } from 'react';
import CompBadge from './CompBadge';
import Preview from './Preview';
import TechIcon from './TechIcon';
import { SKILLS } from '../data/portfolioData';

export default function Project(props) {
  const p = props.p, idx = props.idx, filter = props.filter, selectedTech = props.selectedTech;
  const visible = (!filter || p.comps.indexOf(filter) >= 0) &&
                  (!selectedTech || (p.techs && p.techs.indexOf(selectedTech) >= 0));
  const [open, setOpen] = useState(idx === 0);
  if (!visible) return null;
  const s = p.star;
  return (
    <div className="project" id={p.id}>
      <div className="proj-top" onClick={function () { setOpen(function (o) { return !o; }); }}>
        <div>
          <div className="proj-index">{p.index}</div>
          <div className="proj-title">{p.title}</div>
          <div className="proj-sub">{p.sub}</div>
          <div className="proj-badges">
            {p.comps.map(function (c) { return <CompBadge key={c} c={c} />; })}
            {p.techs && p.techs.map(function (t) {
              const skill = SKILLS.find(s => s.id === t);
              if (!skill) return null;
              return (
                <span key={t} className="badge tech">
                  <TechIcon id={t} size={12} className="tech-badge-icon" />
                  {skill.name}
                </span>
              );
            })}
          </div>
        </div>
        <div className="proj-right">
          <span className={"grade " + (p.rightTag.type === "grade" ? "" : "type")}>{p.rightTag.label}</span>
          <div className={"proj-toggle-btn " + (open ? "open" : "")} aria-expanded={open}>
            <span className="proj-toggle-text">{open ? "Réduire" : "Voir les détails"}</span>
            <svg className="chevron-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </div>
        </div>
      </div>
      <div className={"proj-body " + (open ? "open" : "")}>
        {open && <Preview id={p.id} />}
        <div className="star">
          <p>
            {s.s} {s.t} {s.a} {s.r}
          </p>
        </div>
        <div className="star eval">
          <div className="star-label">Auto-évaluation & pistes d'amélioration</div>
          <div className="eval-content">{s.eval}</div>
          <div className="axis"><b>Axe de progression — </b>{s.axis}</div>
        </div>
        <div className="ac-list">
          {p.acs.map(function (a) { return <span className="ac" key={a[0]}><b>{a[0]}</b> · {a[1]}</span>; })}
        </div>
      </div>
    </div>
  );
}
