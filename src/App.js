import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Home from "./Home";
import About from "./About";
import Portfolio from "./Portfolio";
function App() {
  return (
    <div className="App">
      <Navbar/>

        <div className="FullContent">
            <Home/>
            <About/>
            <Portfolio/>
        </div>
    </div>
  );
}

export default App;
