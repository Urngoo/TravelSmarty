import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  ClerkProvider,
  RedirectToSignIn,
  SignedIn,
  SignedOut,
  UserButton,
  SignInButton,
  useUser,
} from "@clerk/clerk-react"; // Import Clerk components
import "./App.css";
import Calendar from "./Pages/Cal";
import Dashboard from "./Pages/Dashboard";
import Inbox from "./Pages/Inbox";
import Integration from "./Pages/Integration";
import Map from "./Pages/Map";
import Flight from "./components/flight";
import SideBar from "./components/Sidebar";
import PageLayout from "./PageLayout";

function ProtectedRoute({ children }) {
  const { isLoaded, isSignedIn } = useUser();

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  if (!isSignedIn) {
    return <RedirectToSignIn />;
  }

  return children;
}

function App() {
  const { user } = useUser(); // Get the current user information
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <div className="flex flex-col">
        {/* Header Section */}
        <PageLayout>
          <header className="flex justify-between items-center p-4 bg-blue-800 rounded-lg text-white">
            <div className="text-lg font-bold">
              Hello {user ? user.firstName : "Guest"} !
            </div>
            <div className="flex items-center space-x-4">
              {/* Show User Button when signed in */}
              <SignedIn>
                <UserButton />
              </SignedIn>
              {/* Show Sign In Button when signed out */}
              <SignedOut>
                <SignInButton>
                  <button className="bg-blue-500 text-white px-4 py-2 rounded">
                    Sign In
                  </button>
                </SignInButton>
              </SignedOut>
            </div>
          </header>
        </PageLayout>

        {/* Main content */}
        <div className="flex">
          <SideBar />
          <div className="w-full">
            <Routes>
              {/* Protected Route for main content */}
              <Route
                path="/"
                element={
                  <ProtectedRoute>
                    <Dashboard />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/calendar"
                element={
                  <ProtectedRoute>
                    <Calendar />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/integration"
                element={
                  <ProtectedRoute>
                    <Integration />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/inbox"
                element={
                  <ProtectedRoute>
                    <Inbox />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/map"
                element={
                  <ProtectedRoute>
                    <Map />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/flight"
                element={
                  <ProtectedRoute>
                    <Flight />
                  </ProtectedRoute>
                }
              />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
