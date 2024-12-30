import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <div className="grid grid-cols-1 gap-4 px-4 sm:px-6 lg:px-8">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}
