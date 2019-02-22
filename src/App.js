import React, { Component } from 'react';
import './App.css';
import RegistrationForm from './components/RegistrationForm';

class App extends Component {
  onSubmit = (user) => {
    console.log(user);
  }

  render() {
    return <RegistrationForm onSubmit={this.onSubmit} />
  }
}

export default App;
