import { Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Generic from "./components/Generic";
import Elements from "./components/Elements";
import NotFound from "./components/NotFound";

function App() {
  return (

    <Routes>
      <Route pathname="/" element={<Layout />} >
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="Contact" element={<Contact />} />
        <Route path="generic" element={<Generic />} />
        <Route path="elements" element={<Elements />} />
        <Route path="*" element={<NotFound />} />*/
      </Route>
    </Routes>
  );
}

export default App;
