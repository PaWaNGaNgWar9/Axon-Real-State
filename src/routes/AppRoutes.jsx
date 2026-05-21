import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Properties from "../pages/Properties";
import Contact from "../pages/Contact";
import GetStarted from "../pages/GetStarted";
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/properties" element={<Properties />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/get-started" element={<GetStarted />} />
    </Routes>
  );
};

export default AppRoutes;