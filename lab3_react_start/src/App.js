import React , { Component }from 'react';
import logo from './logo.svg';
import './App.css';
import Dashboard1 from './components/Dashboard1';
import Dashboard2 from './components/Dashboard2';
import Person from './components/Person';
import Pet from './components/Pet';
import Counter from './components/Counter';

class App extends Component  {
  state = {
    persons:[
      { name:"Mark", age:43 },
      { name:"James", age:38 },
      { name:"Tim", age:33 },
      { name:"Mary", age:28 },
      { name:"abby", age:34 },
      { name:"Kevin", age:50 }
    ]
  }


  changeNameHandler = (leaderName)=>{
    console.log("change button clicked")
    this.setState({
      persons:[
        { name:leaderName, age:43 },
        { name:"captain america", age:38 },
        { name:"iron man", age:33 },
        { name:"Thor", age:28 },
        { name:"groot", age:34 },
        { name:"Hawk", age:50 }
      ]
    })
  }

  render() {
  return (
    <div className="App">
      <Counter step="2" />
      {
        //commentinside JSX
      }
      <Dashboard1 />
      <Dashboard2 />

      {
        //<button onClick={this.changeNameHandler.bind(this, "One Punch Man")}>Change</button>

      }
      <button onClick={() => this.changeNameHandler("One Punch Man")}>Change</button>

        <Person
          clickCallback={this.changeNameHandler.bind(this,"Peter Pan")}
          name={this.state.persons[0].name}
          age={this.state.persons[0].age} />
        <Pet name="king" species="cat" />
      <Person name={this.state.persons[1].name} age={this.state.persons[1].age} />
      <Person name={this.state.persons[2].name} age={this.state.persons[2].age} >Team Leader</Person>
      <Person name="James" age="38" />
      <Person name="Tim" age="33" >Team Leader</Person>
      <Person name="Mary" age="28" />
      <Person name="abby" age="34" />
      <Person name="Kevin" age="50" />
      <Pet />
    </div>
  );
}
}
export default App;
