import React from 'react';
import { COMPETENCES } from '../data/portfolioData';

export default function CompBadge(props) {
  const co = COMPETENCES[props.c];
  return <span className="badge comp" style={{ background: co.color }}>{co.label}</span>;
}
