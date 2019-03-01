import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

//default store
let defaultstate = {
    userList:[{
      username: 'localUser',
      password: 'local@!@#'
    }, {
      username: 'localAdmin',
      password: 'localAdmin@!@#'
    }]
};

//reducer
//action = {type:'',data:{}}
let userReducer = (state=defaultstate,action)=>{
    switch(action.type){
        case 'ADD_USER_LIST':
            let currentUsers = state.userList;
            return {...state, userList:currentUsers.concat(action.data)} //return new state
        case 'REQUESTED':
            console.log('API request is sent');
            return state;
        case 'COMPLETED':
            console.log('API request is completed');
            return state;
        default:
            return state;
    }
}

//create store
//added middleware called for every event
let store = createStore(userReducer,applyMiddleware(thunk));

export default store;
