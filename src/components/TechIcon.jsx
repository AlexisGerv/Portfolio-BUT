import React from 'react';

export default function TechIcon({ id, size = 20, className = "" }) {
  const imgStyle = {
    width: size,
    height: size,
    objectFit: 'contain',
    display: 'inline-block',
    verticalAlign: 'middle',
    // Apply a white rounded tile background only for small badge icons (size <= 15)
    background: size <= 15 ? '#ffffff' : 'transparent',
    padding: size <= 15 ? '1px' : '0',
    borderRadius: size <= 15 ? '2px' : '0'
  };

  const svgProps = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: className,
    style: { display: 'inline-block', verticalAlign: 'middle' }
  };

  switch (id) {
    case "cs":
      return <img src="/logo/cs.png" alt="C#" style={imgStyle} className={className} />;
    
    case "js":
      return <img src="/logo/js.png" alt="JavaScript" style={imgStyle} className={className} />;
    
    case "htmlcss":
      // Scale down slightly to fit two logos side-by-side within standard bounding box
      const halfSize = Math.round(size * 0.58);
      const subImgStyle = {
        ...imgStyle,
        width: halfSize,
        height: halfSize
      };
      return (
        <span style={{ display: 'inline-flex', gap: '2px', alignItems: 'center' }} className={className}>
          <img src="/logo/html.png" alt="HTML" style={subImgStyle} />
          <img src="/logo/css.jpg" alt="CSS" style={{ ...subImgStyle, borderRadius: size <= 15 ? '1px' : '2px' }} />
        </span>
      );
    
    case "blazor":
      return <img src="/logo/blazor.png" alt="Blazor" style={imgStyle} className={className} />;
    
    case "react":
      return <img src="/logo/react.png" alt="React" style={imgStyle} className={className} />;
    
    case "threejs":
      return <img src="/logo/threejs.png" alt="Three.js" style={imgStyle} className={className} />;
    
    case "plotly":
      return <img src="/logo/plotly.png" alt="Plotly" style={imgStyle} className={className} />;
    
    case "docker":
      return <img src="/logo/docker.png" alt="Docker" style={imgStyle} className={className} />;
    
    case "linux":
      return <img src="/logo/linux.png" alt="Linux" style={imgStyle} className={className} />;
    
    case "git":
      return <img src="/logo/git.png" alt="Git" style={imgStyle} className={className} />;
    
    case "nginx":
      return <img src="/logo/nginx.png" alt="Nginx" style={imgStyle} className={className} />;

    // Fallbacks to SVG for missing image assets (SQL, Bash)
    case "sql":
      return (
        <svg {...svgProps}>
          <ellipse cx="12" cy="5" rx="9" ry="3" />
          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
          <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
        </svg>
      );
    
    case "bash":
      return (
        <svg {...svgProps}>
          <polyline points="4 17 10 11 4 5" />
          <line x1="12" y1="19" x2="20" y2="19" />
        </svg>
      );

    default:
      return (
        <svg {...svgProps}>
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M9 21V9a3 3 0 0 1 3-3h0a3 3 0 0 1 3 3v12" />
        </svg>
      );
  }
}
