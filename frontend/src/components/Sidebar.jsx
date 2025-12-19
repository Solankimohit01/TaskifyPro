import { Link, useLocation } from "react-router-dom";
import "../styles/main.css";

export default function Sidebar({ onGoToTasks, onGoToDashboard }) {
  const location = useLocation();

  return (
    <aside className="sidebar">
      {/* Logo / Title */}
      {/* <div className="sidebar-header">
        <h2>TaskifyPro</h2>
        <p className="sidebar-subtitle">Task Manager</p>
      </div> */}

      {/* Navigation */}
      <nav className="sidebar-nav">
        <button
          type="button"
          className="sidebar-link active"
          onClick={onGoToDashboard}
        >
          📋 Create Task
        </button>

        <button
          type="button"
          className="sidebar-link active"
          onClick={onGoToTasks}
          // style={{ textAlign: "left", background: "none", border: "none" }}
        >
          ✅ My Tasks
        </button>
      </nav>

      {/* Footer Info */}
      {/* <div className="sidebar-footer">
        <p>© {new Date().getFullYear()}</p>
        <small>TaskifyPro</small>
      </div> */}
    </aside>
  );
}
