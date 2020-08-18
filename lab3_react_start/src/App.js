import React from 'react';
//import logo from './logo.svg';
import './App.css';

function App() {
  return (     /////一個return只能回傳一個div
    // <div className="App">
    //   // <h1>hello</h1>
    //   // <h2>React Programming</h2>
      
    // </div>
    //React.createElement('div',null,null)
    //React.createElement('div',null,<h1>hello</h1>)

    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    // React.createElement('div', null, React.createElement('h1', null, "Hello World"),
    //   React.createElement('h2', null, "React Programming"),
    //   React.createElement('h3', null, '2020-Aug-18'))

    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    React.createElement('div', {className:'App'}, React.createElement('h1', null, "Hello World"),
      React.createElement('h2', null, "React Programming"),
      React.createElement('h3', null, '2020-Aug-18'))
  );
}

export default App;
