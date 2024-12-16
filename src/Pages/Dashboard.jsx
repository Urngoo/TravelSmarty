import WeatherCard from "../dashboard/WeatherCard";
import PageLayout from "../PageLayout";
import Navbar from "../components/Navbar";
import Event from "../components/event";

function Dashboard() {
  return (
    <>
      <PageLayout>
        <Navbar />
        <Event />
        <WeatherCard />
      </PageLayout>
    </>
  );
}

export default Dashboard;
