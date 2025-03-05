
import './App.css';


import { BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer.tsx"
import Home from './components/home/Home.tsx';
import About from './components/about/About.tsx'



function App() {
  return (
 <>

<BrowserRouter>
<Home />
{/* <About /> */}
 <Footer />
</BrowserRouter>

 </>
  );
}

export default App;
