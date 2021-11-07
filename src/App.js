import Header from "./components/header";
import Footer from "./components/footer";
import Notice from "./components/Notice";
import About from "./components/about";
import Attendance from "./components/attend";
import Complain from "./components/complain";
import Leave from "./components/leave";
import Login from "./components/login";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
      
        <Switch>
          <Route path="/about">
            <Header/>
            <About/>
            <Footer/>
          </Route>

          <Route path="/">
          <Header/>
      <Notice/>
     <Footer/>
          </Route>

          <Route path="/attendance">
            <Header/>
            <Attendance/>
            <Footer/>
          </Route>

          <Route path="/complain">
            <Header/>
            <Complain/>
            <Footer/>
          </Route>

          <Route path="/leave">
            <Header/>
            <Leave/>
            <Footer/>
          </Route>

          <Route path="/login">
            
            <Login/>
            
          </Route>

          <Route path="/about">
            <Header/>
            <About/>
            <Footer/>
          </Route>

        </Switch>
      </div>
    </Router>
    
      
    
  );
}

export default App;
