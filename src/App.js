import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state= {
    persons: [
      { key: '1', name: 'Max', age: 28 },
      { key: '2', name: 'Manue', age: 29 },
      { key: '3', name: 'Stephanie', age: 35 }
    ],
    showPersons: false
  }

  switchNameHandler= (newName) => {
    //console.log('Was clicked!');
    //DO NOT USE THISthis.state.persons[0].name = 'Maximiliam';
    this.setState( {
      persons: [
        { name: newName, age: 28 },
        { name: 'Manuel', age: 29 },
        { name: 'Stephanie', age: 35 }
      ]
    });
  }

  nameChangeHandler= (event) => {
    this.setState( {
      persons: [
        { name: 'Max', age: 28 },
        { name: event.target.value, age: 29 },
        { name: 'Stephanie', age: 35 }
      ]
    });
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1x solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
        {this.state.persons.map(person => {
          return <Person
            key = {person.key}
            name={person.name}
            age ={person.age} />
        })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <button
          style={style}
          onClick={this.togglePersonsHandler}>Toggle Persons
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
