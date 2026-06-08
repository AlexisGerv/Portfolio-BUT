import React, { useState } from 'react';
import { GALLERIES } from '../data/portfolioData';

export default function Gallery(props) {
  const id = props.id;
  const g = (id && Object.keys(GALLERIES).includes(id)) ? GALLERIES[id] : null;
  const [i, setI] = useState(0);
  if (!g) {
    return <div className="preview-stage"><p className="pv-hint">Galerie non trouvée.</p></div>;
  }
  const cur = g.shots[i];
  return (
    <div className="preview-stage">
      {g.intro && <p className="pv-hint">{g.intro}</p>}
      <div className="gal-main"><img src={cur[0]} alt={cur[1]} loading="lazy" /></div>
      <p className="gal-cap"><b>{cur[1]}</b> — {cur[2]}</p>
      {g.shots.length > 1 &&
        <div className="gal-thumbs">
          {g.shots.map(function (sh, n) {
            return (
              <button key={n} className={"gal-thumb " + (n === i ? "on" : "")} onClick={function () { setI(n); }} title={sh[1]}>
                <img src={sh[0]} alt={sh[1]} loading="lazy" />
              </button>
            );
          })}
        </div>}
    </div>
  );
}
