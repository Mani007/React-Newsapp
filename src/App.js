
import './App.css';

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
import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';

export default class App extends Component {
  name = "Jacob"
  render() {
    return (
      // <div>First Class based component <strong>{this.name}</strong> </div>
      <>
      <NavBar/>
      <News pageSize={6} country="in" category="business"/>
      {/* <News pageSize="6" />  This is also working*/}
      </>
      
      )
  }
}



