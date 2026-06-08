import React from 'react';
import { COMPETENCES } from '../data/portfolioData';

export default function CompBadge(props) {
  const c = props.c;
  const co = (c && Object.keys(COMPETENCES).includes(c)) ? COMPETENCES[c] : null;
  if (!co) return null;
  return <span className="badge comp" style={{ background: co.color }}>{co.label}</span>;
}
