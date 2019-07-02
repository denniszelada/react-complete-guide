import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state= {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manue', age: 29 },
      { name: 'Stephanie', age: 35 }
    ]
  }

  switchNameHandler= () => {
    //console.log('Was clicked!');
    //DO NOT USE THISthis.state.persons[0].name = 'Maximiliam';
    this.setState( {
      persons: [
        { name: 'Maximiliano', age: 28 },
        { name: 'Manue', age: 29 },
        { name: 'Stephanie', age: 35 }
      ]
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age="28"/>
        <Person name="Manu" age="29">My Hobbies: Racing</Person>
        <Person name="Stephanie" age="35"/>
      </div>
    );
  }
}

export default App;
