import "./App.css";
import Dashboard from "./Pages/Dashboard";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AppNavbar } from "./layout/Navbar";
import ContactPage from "./Pages/Contact";
import { useEffect } from "react";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/contact",
    element: <ContactPage />,
  },
]);

function App() {
  useEffect(() => {
    const preferredLanguage = localStorage.getItem("preferredLanguage") || "en";
    if (preferredLanguage === "fa") {
      document.documentElement.style.fontFamily = "iranyekan";
    }
  }, []);

  return (
    <div className="overflow-x-hidden z-0">
      <AppNavbar />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
