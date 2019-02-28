import React, { Component } from 'react';
import './App.css';
import RegistrationForm from './components/RegistrationForm';
import UserList from './components/UserList'

class App extends Component {
  onSubmit = (user) => {
    console.log(user);
  }

  render() {
    return (
      <div>
        <RegistrationForm onSubmit={this.onSubmit} />
        <UserList></UserList>
      </div>
    );
  }
}

export default App;
