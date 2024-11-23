import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import SideBar from "./dashboard/Sidebar";

function App() {
  const [count, setCount] = useState(0);//test hiiv

  return (
    <>
      <SideBar/>
    </>
  );
}

export default App;
