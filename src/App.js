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

export default class App extends Component {
 
  render() {
    return (
      // <div>First Class based component <strong>{this.name}</strong> </div>
      <>
       
          <NavBar />
          <Routes>
            <Route exact path="/" element={<News key="in" pageSize={6} country="in" category="business" />}></Route>
            <Route exact path="/Portugal" element={<News key="pt" pageSize={6} country="pt" category="business" />} ></Route>
            <Route exact path="/Japan" element={<News key="jp" pageSize={6} country="jp" category="business" />}></Route>
            <Route exact path="/US" element={<News key="us" pageSize={6} country="us" category="business" />}></Route>
            <Route exact path="/Singapore" element={<News key="si" pageSize={6} country="si" category="business" />}></Route>
            <Route exact path="/Germany" element={<News key="de" pageSize={6} country="de" category="business" />}></Route>
            <Route exact path="/France" element={<News key="fr" pageSize={6} country="fr" category="business" />}></Route>
          </Routes>
          {/* <News pageSize={6} country="us" category="business" /> */}
          {/* <News pageSize="6" />  This is also working*/}
       
      </>
    );
  }
}
