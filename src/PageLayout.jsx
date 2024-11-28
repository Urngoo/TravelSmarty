import SideBar from "./components/Sidebar";
import Navbar from "./components/Navbar";

const PageLayout = ({ children }) => {
  return (
    <>
      <SideBar />
      {children}
      <Navbar />
    </>
  );
};

export default PageLayout;
