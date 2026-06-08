import React from 'react';
import { PDFS, GALLERIES, PV_TAGS, PV_HEADS } from '../data/portfolioData';
import SolarSystemPreview from './SolarSystemPreview';
import CyberInfra from './CyberInfra';
import PdfViewer from './PdfViewer';
import DashboardLaunch from './DashboardLaunch';
import Gallery from './Gallery';

export default function Preview(props) {
  const id = props.id;
  let body = null;
  if (id === "solaire") body = <SolarSystemPreview />;
  else if (id === "cyber") body = <CyberInfra />;
  else if (PDFS[id]) body = <PdfViewer id={id} />;
  else if (id === "dataviz") body = <DashboardLaunch />;
  else if (GALLERIES[id]) body = <Gallery id={id} />;
  if (!body) return null;
  return (
    <div className="preview">
      <div className="preview-head">
        <div className="pv-title"><span className="lvdot"></span>{PV_HEADS[id] || "Aperçu"}</div>
        <div className="pv-tag">{PV_TAGS[id]}</div>
      </div>
      {body}
    </div>
  );
}
