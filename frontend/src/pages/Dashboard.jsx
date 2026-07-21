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
    <div className="dashboard">

      <Sidebar />

      <div className="dashboard-main">

        <Topbar />

        <WelcomeBanner />

        <StatsCards />
        <QuickActions />
        <UpcomingTrip />
        <DashboardGrid />
        <TrendingDestinations />

        <NotificationCard />

        <FloatingAI />
      </div>

    </div>
  );
}

export default Dashboard;