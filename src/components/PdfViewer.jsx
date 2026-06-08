import React from 'react';
import { PDFS } from '../data/portfolioData';

export default function PdfViewer(props) {
  const id = props.id;
  const d = (id && Object.keys(PDFS).includes(id)) ? PDFS[id] : null;
  if (!d) {
    return <div className="preview-stage"><p className="pv-hint">Document non trouvé.</p></div>;
  }
  return (
    <div className="preview-stage">
      <p className="pv-hint">{d.note}</p>
      <div className="pdf-frame">
        <iframe src={d.file + "#view=FitH&toolbar=1"} title="Document PDF" loading="lazy"></iframe>
      </div>
      <div className="pdf-bar">
        <span className="pdf-meta"><b>Document source</b> · PDF · {d.pages}</span>
        <a className="pdf-open" href={d.file} target="_blank" rel="noopener noreferrer">Ouvrir en plein écran ↗</a>
      </div>
    </div>
  );
}
