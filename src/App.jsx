import { useState } from "react";
import "./App.css";
import SideBar from "./components/Sidebar";
import Navbar from "./components/Navbar";

function App() {
  const [count, setCount] = useState(0); //test hiiv

  return (
    <>
      <SideBar />
      <Navbar />
    </>
  );
}

export default App;
