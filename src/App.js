import Hero from './components/Hero';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Contact from './components/Contact';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App top-0 z-[-2] h-auto w-full bg-[#181818] bg-[radial-gradient(#ffffff10_1px,#0f0f0f_1px)] bg-[size:20px_20px]">
      <ToastContainer/>
      <Navbar/>
      <Hero/>
      <About/>
      <Projects/>
      <Contact/>
      <Footer/>
      
    </div>
  );
}

export default App;
