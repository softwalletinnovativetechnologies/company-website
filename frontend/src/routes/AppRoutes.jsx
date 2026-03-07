import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import Services from "../pages/Services";
import Contact from "../pages/Contact";
import AITutorial from "../pages/AITutorial";
import AIExam from "../pages/AIExam";
import AIDescription from "../pages/AIDescription";
import AIRegister from "../pages/AIRegister";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="/ai/tutorial" element={<AITutorial />} />
          <Route path="/ai/exam" element={<AIExam />} />
          <Route path="/ai/description" element={<AIDescription />} />
          <Route path="/ai/register" element={<AIRegister />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
