import "../styles/main.css";

export default function Footer() {
  return (
    <footer className="app-footer">
      <p>
        © {new Date().getFullYear()} <strong>TaskifyPro</strong>
      </p>
      <p>
        Created & Developed by <strong>Mohit Solanki</strong> | MERN Stack Project
      </p>
    </footer>
  );
}
