import {createStore} from 'redux'

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
        default:
            return state;
    }
}

//create store
let store = createStore(userReducer);

export default store;
