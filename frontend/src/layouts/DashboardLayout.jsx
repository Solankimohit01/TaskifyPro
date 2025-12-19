import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import "../styles/main.css";

export default function DashboardLayout({ children, onSearch, onGoToTasks, onGoToDashboard}) {
  return (
    <div className="dashboard-layout">
      {/* Header */}
      <Header onSearch={onSearch} />

      {/* Body */}
      <div className="dashboard-body">
        {/* Sidebar */}
        <Sidebar onGoToTasks={onGoToTasks} onGoToDashboard={onGoToDashboard}/>


        {/* Main Content */}
        <main className="dashboard-content">{children}</main>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
