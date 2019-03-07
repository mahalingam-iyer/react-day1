import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'
import mySaga from '../sagas/saga'

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

const sagaMiddleware = createSagaMiddleware()

//reducer
//action = {type:'',data:{}}
let userReducer = (state=defaultstate,action)=>{
    let currentUsers = state.userList;
    switch(action.type){
        case 'ADD_USER_LIST':
            return {...state, userList:currentUsers.concat(action.data)} //return new state
        case 'REQUESTED':
            console.log('API request is sent');
            return state;
        case 'COMPLETED':
            console.log('API request is completed');
            return state;
        case 'USER_FETCH_SUCCEEDED':
            console.log('got user response');
            console.log(action);
            return {...state, userList:currentUsers.concat(action.user)}
        default:
            return state;
    }
}

//create store
//added middleware called for every event
let store = createStore(userReducer,applyMiddleware(sagaMiddleware,thunk));
sagaMiddleware.run(mySaga);

export default store;
