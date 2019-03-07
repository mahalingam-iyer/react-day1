import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './App';
import Enzyme,{ shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {userReducer} from './store/configureStore'

Enzyme.configure({ adapter: new Adapter() });

it('renders without crashing', () => {
  const div = document.createElement('div');
  const props = {userList:[]}
  ReactDOM.render(<App {...props}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('shallow render component', ()=>{
  const props = {userList:[]}
  let wrapper = shallow(<App {...props}/>)
  expect(wrapper.find('div').length).toEqual(1);
});

it('mount component', ()=>{
  const props = {userList:[]}
  const wrapper = mount(<App {...props} />);
  expect(wrapper.find('div').length).toEqual(4)
});

it('testing default state', ()=>{
  let initialState = {
    userList:[{
      username: 'localUser',
      password: 'local@!@#'
    }, {
      username: 'localAdmin',
      password: 'localAdmin@!@#'
    }]
  };
  expect(userReducer()).toEqual(initialState)
});

it('testing reducer action', ()=>{
  let newUserList = [{
      username: 'localUser',
      password: 'local@!@#'
    }, {
      username: 'localAdmin',
      password: 'localAdmin@!@#'
    },{
      username: 'newUser',
      password: 'newPass'
  }]
  expect(userReducer(undefined,{type:'ADD_USER_LIST',data:[newUserList[2]]}).userList).toEqual(newUserList)
});