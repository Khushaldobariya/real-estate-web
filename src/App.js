import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer.tsx";
import Home from './components/Home.tsx';
import About from './components/about/About.tsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Fix: Use "path" instead of "to" */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>

      {/* Footer should be outside of Routes to display on all pages */}
      <Footer />
    </BrowserRouter>
  );
}

export default App;
