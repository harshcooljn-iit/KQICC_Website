import { useState,useRef } from 'react'
import Navbar from './Navbar'
import Home from './Home'
import Register from './Register';
import Schedule from './Schedule';
import AboutUs from './AboutUs';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom/cjs/react-router-dom.min';
import Registration from './Registration';

function App() {
  const [count, setCount] = useState(0);
  // const f = ()=>{
  //   location.replace("https://www.google.com");
  // }
  // setTimeout(()=>f(),1000);

  return (
    <Router>
      <>
        <div className="bg-image-container">
          <img src="/Qiskit_Fall-Fest_Wallpaper-01.jpg" alt="IBM Qiskit Fall Fest" className="constant-background-image"/>
        </div>
        <Navbar/>
        <Switch>
          <Route exact path="/">
            <Home/>
            <Schedule/>
            <Register/>
            <AboutUs/> 
          </Route>
          <Route path="/register">
            <Registration/>
          </Route>
        </Switch> 
      </>
    </Router>
  );
}

export default App;
