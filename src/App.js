import './App.css';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';

function App() {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <About/>
      <Projects/>
      <Skills/>
      <Experience/>
      <Education/>
      <Contact/>
    </div>
  );
}

export default App;
