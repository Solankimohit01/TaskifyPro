// export default function Card({ title, subtitle, children, onClick }) {
//   return (
//     <div className="card" onClick={onClick}>
//       {title && <h3>{title}</h3>}
//       {subtitle && <p className="muted">{subtitle}</p>}
//       {children && <div className="card-body">{children}</div>}
//     </div>
//   );
// }


import "../styles/main.css";

export default function Card({
  title,
  subtitle,
  children,
  onClick,
  className = "",
}) {
  return (
    <div
      className={`card ${onClick ? "card-clickable" : ""} ${className}`}
      onClick={onClick}
    >
      {(title || subtitle) && (
        <div className="card-header">
          {title && <h3 className="card-title">{title}</h3>}
          {subtitle && <p className="card-subtitle">{subtitle}</p>}
        </div>
      )}

      {children && <div className="card-body">{children}</div>}
    </div>
  );
}
