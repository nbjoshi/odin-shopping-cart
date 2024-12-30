import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import PromoBanner from "./components/PromoBanner.jsx";

export default function App() {
  return (
    <div className="grid grid-cols-1 gap-4">
      <PromoBanner />
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}
