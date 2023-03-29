import "./App.css";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
import React, { Component } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
import { Route, Routes } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

export default class App extends Component {
  apikey = process.env.REACT_APP_API_KEY
  state = {
    progress: 0
  }

  setProgress = (progress) => {
    this.setState({
      progress: progress
    })
  }
  render() {
    return (
      // <div>First Class based component <strong>{this.name}</strong> </div>
      <>
        <NavBar />
        <LoadingBar
        height={4}
          color="#f11946"
          progress={this.state.progress}
          
        />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <News setProgress={this.setProgress} apikey={this.apikey} key="in" pageSize={6} country="in" category="business" />
            }
          ></Route>
          <Route
            exact
            path="/Portugal"
            element={
              <News setProgress={this.setProgress} apikey={this.apikey} key="pt" pageSize={6} country="pt" category="business" />
            }
          ></Route>
          <Route
            exact
            path="/Japan"
            element={
              <News setProgress={this.setProgress} apikey={this.apikey} key="jp" pageSize={6} country="jp" category="business" />
            }
          ></Route>
          <Route
            exact
            path="/US"
            element={
              <News setProgress={this.setProgress} apikey={this.apikey} key="us" pageSize={6} country="us" category="business" />
            }
          ></Route>
          <Route
            exact
            path="/Singapore"
            element={
              <News setProgress={this.setProgress} apikey={this.apikey} key="si" pageSize={6} country="si" category="business" />
            }
          ></Route>
          <Route
            exact
            path="/Germany"
            element={
              <News setProgress={this.setProgress} apikey={this.apikey} key="de" pageSize={6} country="de" category="business" />
            }
          ></Route>
          <Route
            exact
            path="/France"
            element={
              <News setProgress={this.setProgress} apikey={this.apikey} key="fr" pageSize={6} country="fr" category="business" />
            }
          ></Route>
        </Routes>
        {/* <News setProgress={setProgress} pageSize={6} country="us" category="business" /> */}
        {/* <News setProgress={setProgress} pageSize="6" />  This is also working*/}
      </>
    );
  }
}
