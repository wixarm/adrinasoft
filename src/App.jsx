import "./App.css";
import Dashboard from "./Pages/Dashboard";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AppNavbar } from "./layout/Navbar";
import ContactPage from "./Pages/Contact";

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
  return (
    <div className="overflow-x-hidden z-0">
      <AppNavbar />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
