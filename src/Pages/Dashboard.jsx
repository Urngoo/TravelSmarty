import WeatherCard from "../dashboard/WeatherCard";
import ToggleSwitch from "../dashboard/ToggleSwitch";
import PageLayout from "../PageLayout";
import Navbar from "../components/Navbar";

function Dashboard() {
  return (
    <>
      <PageLayout>
        <Navbar />
        <WeatherCard />
      </PageLayout>
    </>
  );
}

export default Dashboard;
