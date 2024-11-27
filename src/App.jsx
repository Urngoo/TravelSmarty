import { useState } from "react";
import "./App.css";
import SideBar from "./dashboard/Sidebar";
import ToggleSwitch from "./dashboard/toggle";
import CardComponent from "./dashboard/card";
import AddEvent from "./dashboard/event";


function App() {
  const [count, setCount] = useState(0);//test hiiv

  return (
    <>
      <AddEvent/>
      {/* <CardComponent />
      <ToggleSwitch />
      <SideBar/> */}
    </>
  );
}

export default App;
