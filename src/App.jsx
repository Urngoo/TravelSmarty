import { useState } from "react";
import "./App.css";
import SideBar from "./dashboard/Sidebar";
import ToggleSwitch from "./dashboard/toggle";
import CardComponent from "./dashboard/card";


function App() {
  const [count, setCount] = useState(0);//test hiiv

  return (
    <>
      <CardComponent />
      <ToggleSwitch />
      <SideBar/>
    </>
  );
}

export default App;
