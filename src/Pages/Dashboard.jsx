import WeatherCard from "../dashboard/WeatherCard";
import ToggleSwitch from "../dashboard/ToggleSwitch";
import PageLayout from "../PageLayout";

function Dashboard() {
  return (
    <>
      <PageLayout>
        <ToggleSwitch />
        <WeatherCard />
      </PageLayout>
    </>
  );
}

export default Dashboard;
