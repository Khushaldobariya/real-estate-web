import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer.tsx";
import Home from "./components/Home.tsx";
import About from "./components/about/About.tsx";
import Project from "./components/project/index.tsx";
import Contact from "./components/contact/Contact.tsx";
import Innovations from "./components/innovations/Innovations.tsx";
import LatestBlogs from "./components/latestBlogs/LatestBlogs.tsx";
import BlogDetail from "./components/latestBlogs/BlogDetail.tsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Fix: Use "path" instead of "to" */}
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/commercial" element={<Project />} /> */}
        <Route path="/residence" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/innovations" element={<Innovations />} />
        <Route path="/blog" element={<LatestBlogs />} />
        <Route path="/blog/blog-detail/:index" element={<BlogDetail />} />
      </Routes>

      {/* Footer should be outside of Routes to display on all pages */}
      <Footer />
    </BrowserRouter>
  );
}

export default App;
