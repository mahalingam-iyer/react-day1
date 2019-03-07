import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
const delay = (ms) => new Promise(res => setTimeout(res, ms))

function fetchUserDetails(args){
    console.log(args);
    return fetch('https://my-json-server.typicode.com/mahalingam-iyer/demoapi/users')
}

function* fetchUser(action) {
   try {
       yield delay(2000)
      const response = yield call(fetchUserDetails, action.payload.userId);
      const users = yield call([response,'json'])
      yield put({type: "USER_FETCH_SUCCEEDED", user: users});
   } catch (e) {
      yield put({type: "USER_FETCH_FAILED", message: e.message});
   }
}

/*
  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/
// function* mySaga() {
//   yield takeEvery("USER_FETCH_REQUESTED", fetchUser);
// }
/*
  Alternatively you may use takeLatest.

  Does not allow concurrent fetches of user. If "USER_FETCH_REQUESTED" gets
  dispatched while a fetch is already pending, that pending fetch is cancelled
  and only the latest one will be run.
*/
function* mySaga() {
    // yield takeEvery("USER_FETCH_REQUESTED", fetchUser);
  yield takeLatest("USER_FETCH_REQUESTED", fetchUser);
}

export default mySaga;