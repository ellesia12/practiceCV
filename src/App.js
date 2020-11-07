import React from "react";
import './App.css';
import { Link, Route, Switch } from "react-router-dom";


//import navbar and footer
import NavBar from "./components/NavBar";
import Footer from "./components/Footer"
// import pages here
import HomePage from "./pages/HomePage";
import Cv from "./pages/Cv";
import Spanish from "./pages/Spanish";





const App = () => {
  
  
  
  
  
  return (
    <div className="App">
      <header>
        <NavBar />
      </header>
      <div>
      <Switch>
        <Route path="/cv"
          render={(props)=>(<Cv {...props}/>)}
        />
        <Route path="/spanish"
          render={(props)=> (<Spanish {...props} />)}
        />
        <Route
         exact path="/"
         render={(props)=>(<HomePage {...props} />)}
        />
      </Switch>
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
