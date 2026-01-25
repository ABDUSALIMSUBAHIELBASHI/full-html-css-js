export default function Card({ title, description, buttonText }) {
  return (
    <div className="card">
      <h3>{title || "Default Title"}</h3>
      <p>{description || "No description provided."}</p>
      <button className="btn">{buttonText || "Click Me"}</button>
    </div>
  );
}