import React , { Component }from 'react';
import logo from './logo.svg';
import './App.css';
import Dashboard1 from './components/Dashboard1';
import Dashboard2 from './components/Dashboard2';
import Person from './components/Person';
import Pet from './components/Pet';
import Counter from './components/Counter';
import Banner from './components/Banner';

class App extends Component  {
  titleChangeListener = event =>{
    this.setState({title: event.target.value})
  }

  state = {
    persons:[
      { name:"Mark", age:43 },
      { name:"James", age:38 },
      { name:"Tim", age:33 },
      { name:"Mary", age:28 },
      { name:"abby", age:34 },
      { name:"Kevin", age:50 }
    ],
    title:"Hello React chtti302",
    showPersons:false
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

  toggleDisplayHandler =()=>{
    this.setState({ showPersons: ! this.state.showPersons},()=>{
      console.log(`current status= ${this.state.showPersons}`)
    })

  }
  render() {
    const style = {
      background: "yellow",
      font: "inherit",
      border: "2px solid red",
      padding: "4px",
      cursor: 'pointer'
    }

    let persons =null;
    if (this.state.showPersons === true) {
      persons = (<div>{
        this.state.persons.map(person => {
          return <Person name={person.name} age={person.age} />
        })
      }</div>)
    }

    return (
      <div className="App">
        <Counter step="2" />
        <h1>{this.state.title}</h1>
        <Banner clickCallback={this.titleChangeListener}
          name={this.state.title} />
        <Dashboard1 />
        <Dashboard2 />
        <button style={style} onClick={() => this.toggleDisplayHandler()}>
          show/hide persons</button>
        {
          // <button onClick={this.changeNameHandler.bind(this, "One Punch Man")}>Change</button>  
        }
        <button style={style} onClick={() => this.changeNameHandler("one Punch Man")}>Change</button>
        {persons}
      </div>
    );
  }
}
export default App;
