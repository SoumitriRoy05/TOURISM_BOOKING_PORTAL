import "./Dashboard.css";

import Sidebar from "../components/Dashboard/Sidebar";
import Topbar from "../components/Dashboard/Topbar";
import WelcomeBanner from "../components/Dashboard/WelcomeBanner";
import StatsCards from "../components/Dashboard/StatsCards";
import QuickActions from "../components/Dashboard/QuickActions";
import UpcomingTrip from "../components/Dashboard/UpcomingTrip";
import DashboardGrid from "../components/Dashboard/DashboardGrid";
import TrendingDestinations from "../components/Dashboard/TrendingDestinations";
import NotificationCard from "../components/Dashboard/NotificationCard";
import FloatingAI from "../components/Dashboard/FloatingAI";

function Dashboard() {
  return (
    <div className="dashboard-page-dark">
      {/* Image 2 Liquid Aurora Fluid Blobs */}
      <div className="dashboard-aurora-bg">
        <div className="liquid-blob blob-cyan"></div>
        <div className="liquid-blob blob-purple"></div>
        <div className="liquid-blob blob-deep"></div>
        <div className="dashboard-mesh-grid"></div>
      </div>

      <div className="dashboard-layout">
        <Sidebar />

        <main className="dashboard-main-content">
          <Topbar />
          <WelcomeBanner />
          <StatsCards />
          <QuickActions />
          <UpcomingTrip />
          <DashboardGrid />
          <TrendingDestinations />
          <NotificationCard />
          <FloatingAI />
        </main>
      </div>
    </div>
  );
}

export default Dashboard;