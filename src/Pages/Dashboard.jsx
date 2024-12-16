import WeatherCard from "../dashboard/WeatherCard";
import PageLayout from "../PageLayout";
import Navbar from "../components/Navbar";
import Event from "../component/event";

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
