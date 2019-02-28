import React, { Component } from 'react';
import './App.css';
import RegistrationForm from './components/RegistrationForm';
import UserList from './components/UserList'
let themes = {
  'darkTheme': {
    backgroundColor: "green",
    borderColor: "black",
    color: "yellow"
  },
  'lightTheme': {
    backgroundColor: "white",
    borderColor: "red",
    color: "blue"
  }
}
class App extends Component {
  state = {
    users: [{
      username: 'localUser',
      password: 'local@!@#'
    }, {
      username: 'localAdmin',
      password: 'localAdmin@!@#'
    }],
    theme: 'lightTheme'
  }
  changeTheme=(e)=> {
    this.setState({ theme:e.target.value});
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
        Select Theme:
        <select onChange={this.changeTheme} value={this.state.theme}>
          <option value="lightTheme">Light</option>
          <option value="darkTheme">Dark</option>
        </select>
        <RegistrationForm theme={themes[this.state.theme]} onSubmit={this.onSubmit} />
        <UserList users={this.state.users}></UserList>
      </div>
    );
  }
}

export default App;
