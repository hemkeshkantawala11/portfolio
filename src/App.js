import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Home from "./Home";
import About from "./About";
import Portfolio from "./Portfolio";
import Academic from "./Components/Academic";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
function App() {
  return (
    <div className="App">
      <Navbar/>

        <div className="FullContent">
            <Home/>
            <About/>
            <Portfolio/>
            <Academic/>
            <Contact/>
            <Footer/>
        </div>
    </div>
  );
}

export default App;
