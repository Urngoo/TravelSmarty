import { useState } from "react";
import "./App.css";
import AddEvent from "./component/event";
import SideBar from "./dashboard/Sidebar";
import Flight from "./component/flight";



function App() {
  const [count, setCount] = useState(0);//test hiiv

  return (
    <>
      {/* <AddEvent />
      <SideBar /> */}
      <Flight />
    </>
  );
}

export default App;
