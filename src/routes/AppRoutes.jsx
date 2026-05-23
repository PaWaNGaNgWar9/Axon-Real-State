import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Properties from "../pages/Properties";
import Contact from "../pages/Contact";
import GetStarted from "../pages/GetStarted";
import Terms from "../pages/Terms";
import Privacy from "../pages/PrivacyPolicy";
import About from "../pages/About";
import PropertyDetails from "../pages/PropertyDetails";
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/properties" element={<Properties />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/get-started" element={<GetStarted />} />
      <Route path="/terms" element={<Terms />} />
      <Route path="/privacy-Policy" element={<Privacy />} />
      <Route path="/about" element={<About />} />
     <Route path="/property/:id"element={<PropertyDetails />}/>
    </Routes>
  );
};

export default AppRoutes;