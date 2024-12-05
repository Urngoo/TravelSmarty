import SideBar from "./components/Sidebar";
import Navbar from "./components/Navbar";

const PageLayout = ({ children }) => {
  return (
    <>
      <SideBar />
      <Navbar />
      {children}
    </>
  );
};

export default PageLayout;
