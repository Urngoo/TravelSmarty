import { useState } from "react";
import "./App.css";
import SideBar from "./dashboard/Sidebar";
import { DatePicker } from 'antd';
import ToggleSwitch from "./dashboard/toggle";


function App() {
  const [count, setCount] = useState(0);//test hiiv

  return (
    <>
      <DatePicker/>
      <ToggleSwitch />
      <SideBar/>
    </>
  );
}

export default App;
