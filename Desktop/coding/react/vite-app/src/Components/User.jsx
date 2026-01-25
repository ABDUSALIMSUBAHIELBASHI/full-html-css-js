export default function User({ name, email, role }) {
  return (
    <div className="user-profile">
      <h4>Name: {name || "Unknown"}</h4>
      <p>Email: {email || "No Email"}</p>
      <span className="role-tag">{role || "User"}</span>
    </div>
  );
}