import WeatherCard from "../dashboard/WeatherCard";
import PageLayout from "../PageLayout";
import Navbar from "../components/Navbar";
import Event from "../components/event";
import Flight from "../components/flight";
import CardForEvent from "../components/card";
import BrainStormCard from "../components/BrainStormCard";
import MeetingCard from "../components/MeetingProposalCard";
import AddCard from "../components/AddEventCard";

function Dashboard() {
  return (
    <>
      <PageLayout>
        <Navbar />
        <Event />
        {/* weekly meetings */}
        <div className="flex flex-col p-6 rounded-lg">
          <div className="flex justify-between items-center mb-6">
            <h1 className="font-bold text-lg">Upcoming Flight Details</h1>
          </div>
          <div className="grid grid-cols-1 justify-start md:grid-cols-2 gap-6">
            <div>
              <BrainStormCard />
            </div>
            <div>
              <BrainStormCard />
            </div>
          </div>
        </div>


        {/* Flight */}
        <div className="flex flex-col p-6 rounded-lg">
          <div className="flex justify-between items-center mb-6">
            <h1 className="font-bold text-lg">Upcoming Flight Details</h1>
          </div>
          <div className="grid grid-cols-1 justify-start md:grid-cols-3 gap-6">
            <div>
              <Flight />
            </div>
            <div>
              <Flight />
            </div>
            <div>
              <Flight />
            </div>
          </div>
        </div>

        {/* Meeting proposals */}
        <div className="flex flex-col p-6 rounded-lg">
          <div className="flex justify-between items-center mb-6">
            <h1 className="font-bold text-lg">Meeting Proposals</h1>
          </div>
          <div >
            <MeetingCard />
          </div>
        </div>
      </PageLayout>
    </>
  );
}

export default Dashboard;
