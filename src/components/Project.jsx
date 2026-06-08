import React, { useState } from 'react';
import CompBadge from './CompBadge';
import Preview from './Preview';

export default function Project(props) {
  const p = props.p, idx = props.idx, filter = props.filter;
  const visible = !filter || p.comps.indexOf(filter) >= 0;
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
          </div>
        </div>
        <div className="proj-right">
          <span className={"grade " + (p.rightTag.type === "grade" ? "" : "type")}>{p.rightTag.label}</span>
          <span className={"toggle " + (open ? "open" : "")}>+</span>
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
          <p>{s.eval}</p>
          <div className="axis"><b>Axe de progression — </b>{s.axis}</div>
        </div>
        <div className="ac-list">
          {p.acs.map(function (a) { return <span className="ac" key={a[0]}><b>{a[0]}</b> · {a[1]}</span>; })}
        </div>
      </div>
    </div>
  );
}
