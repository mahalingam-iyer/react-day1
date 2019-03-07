import React, { Component } from 'react';
import './App.css';
import RegistrationForm from './components/RegistrationForm';
import UserList from './components/UserList'
import PropTypes from 'prop-types'

import {connect} from 'react-redux'
import {fetchUserList, addUserAction} from './actions/addUser'
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
    // Store.subscribe(()=>{
    //   console.log('store',Store.getState());
    // });
    // this.props.fetchUserList();
    // fetch('https://my-json-server.typicode.com/mahalingam-iyer/demoapi/users')
    //   .then(response => response.json())
    //   .then(json => {
    //     this.props.addUsers(json);
    //     // let action = {type:'ADD_USER_LIST',data:json}
    //     // Store.dispatch(action)
    //     // this.setState({ users: this.state.users.concat(json) });
    //   });
    Store.dispatch({type: 'USER_FETCH_REQUESTED', payload: {userId:1202}})
    Store.dispatch({type: 'USER_FETCH_REQUESTED', payload: {userId:1202}})
    Store.dispatch({type: 'USER_FETCH_REQUESTED', payload: {userId:1202}})
    Store.dispatch({type: 'USER_FETCH_REQUESTED', payload: {userId:1202}})
    Store.dispatch({type: 'USER_FETCH_REQUESTED', payload: {userId:1202}})
  }
  onSubmit = (user) => {
    console.log(user);
  }

  render() {
    console.log(this.props.userList);
    return (
      <div>
        Select Theme:
        <select onChange={this.changeTheme} value={this.state.theme}>
          <option value="lightTheme">Light</option>
          <option value="darkTheme">Dark</option>
        </select>
        <RegistrationForm theme={themes[this.state.theme]} onSubmit={this.onSubmit} />
        <UserList users={this.props.userList}></UserList>
      </div>
    );
  }
}

const mapStateToProps = store=>{
  console.log(store.userList);
  return {userList: store.userList}
}

const mapDispatchToProps = (dispatch,ownProps)=>({
  addUsers:(data)=>dispatch(addUserAction(data)),
  fetchUserList:()=>dispatch(fetchUserList())
})

export default connect(mapStateToProps,mapDispatchToProps)(App);
