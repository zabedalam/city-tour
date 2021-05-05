import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom"
import Home from './components/LandingPage/Home/Home';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      
      <Router>
      {/* <Header></Header> */}
      {/* <Home></Home> */}
      <Switch>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route exact path="/">
          <Home/>
          </Route>
        <Route path="/login">
          <Login></Login>
        </Route>
        <Route path="/signup">
          <SignUp></SignUp>
        </Route>
        <Route path="*">
          <NotFound></NotFound>
          </Route>
      </Switch>
      </Router>
      
    </div>
  );
}

export default App;
