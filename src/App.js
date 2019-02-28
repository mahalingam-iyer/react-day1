import React, { Component } from 'react';
import './App.css';
import RegistrationForm from './components/RegistrationForm';
import UserList from './components/UserList'

class App extends Component {
  state = {
    users:[{
      username: 'localUser',
      password: 'local@!@#'
    },{
      username: 'localAdmin',
      password: 'localAdmin@!@#'
    }]
  }
  componentDidMount() {
    fetch('https://my-json-server.typicode.com/mahalingam-iyer/demoapi/users')
      .then(response => response.json())
      .then(json => {
        this.setState({ users: this.state.users.concat(json) });
      });
  }
  onSubmit = (user) => {
    console.log(user);
  }

  render() {
    return (
      <div>
        <RegistrationForm onSubmit={this.onSubmit} />
        <UserList users={this.state.users}></UserList>
      </div>
    );
  }
}

export default App;
