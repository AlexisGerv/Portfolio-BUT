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
  const hasPdf = id && Object.keys(PDFS).includes(id);
  const hasGallery = id && Object.keys(GALLERIES).includes(id);

  if (id === "solaire") body = <SolarSystemPreview />;
  else if (id === "cyber") body = <CyberInfra />;
  else if (hasPdf) body = <PdfViewer id={id} />;
  else if (id === "dataviz") body = <DashboardLaunch />;
  else if (hasGallery) body = <Gallery id={id} />;

  if (!body) return null;

  const title = (id && Object.keys(PV_HEADS).includes(id)) ? PV_HEADS[id] : "Aperçu";
  const tag = (id && Object.keys(PV_TAGS).includes(id)) ? PV_TAGS[id] : "";

  return (
    <div className="preview">
      <div className="preview-head">
        <div className="pv-title"><span className="lvdot"></span>{title}</div>
        <div className="pv-tag">{tag}</div>
      </div>
      {body}
    </div>
  );
}
