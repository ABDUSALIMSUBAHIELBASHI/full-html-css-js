export default function Navbar({ logoText, menu1, menu2, menu3 }) {
  return (
    <nav className="navbar">
      <div className="logo">{logoText}</div>
      <ul className="nav-links">
        <li>{menu1}</li>
        <li>{menu2}</li>
        <li>{menu3}</li>
      </ul>
    </nav>
  );
}