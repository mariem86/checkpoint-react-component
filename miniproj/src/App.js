import React from 'react';
import ReactDOM from "react-dom";
import './App.css';
import Main from './Main';
function App() {
  return (
    <div className="App">
     <Main /> 
    </div>
  );
}
ReactDOM.render(
  <App />,
  document.getElementById("root")
);
export default App;

