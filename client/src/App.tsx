import './App.css';
// import axios from 'axios';
// import { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import LandingPage from './components/LandingPage';
import SignUpPage from './components/SignUpPage';
import LoginPage from './components/LoginPage';
import Home from './components/Home';


function App() {
  // const [message, setMessage] = useState('')

  // useEffect(() => {
  //   axios.get("http://localhost:3001/")
  //     .then(res => {
  //       console.log("hi")
  //       console.log(res.data)
  //       setMessage(res.data.message)
  //     })
  // }, [])

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/signup">
            <SignUpPage />
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/">
            <LandingPage />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App;
