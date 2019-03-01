import React, { Component } from 'react';
import './App.css';
import RegistrationForm from './components/RegistrationForm';
import UserList from './components/UserList'
import PropTypes from 'prop-types'
import Store from './store/configureStore'


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
    theme: 'lightTheme'
  }
  static childContextTypes = {
    theme: PropTypes.object
  }
  getChildContext(){
    return {
      //whatever here will be passed to children as context
      theme: themes[this.state.theme]
    }
  }
  changeTheme=(e)=> {
    this.setState({ theme:e.target.value});
  }
  componentDidMount() {
    //get store state
    Store.subscribe(()=>{
      console.log('store',Store.getState());
    });
    fetch('https://my-json-server.typicode.com/mahalingam-iyer/demoapi/users')
      .then(response => response.json())
      .then(json => {
        let action = {type:'ADD_USER_LIST',data:json}
        Store.dispatch(action)
        // this.setState({ users: this.state.users.concat(json) });
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
        {/*<UserList users={this.state.users}></UserList>*/}
      </div>
    );
  }
}

export default App;
