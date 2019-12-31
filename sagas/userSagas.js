import{LOGIN_TC,LOGIN_TB,LOGIN} from '../action/actionTypes';
import {put,takeLatest} from 'redux-saga/effects';
import Api from '../sagas/Api';

function* fetchUser(){
    try {
        const dsUser = yield Api.getUserFromApi();
        yield put({type:LOGIN_TC,dsUser:dsUser});
    } catch (error) {
         yield put({type:LOGIN_TB,error})
    }
}
export function* wacthFecthUser(){
    yield takeLatest(LOGIN,fetchUser)
}


function* addNewUser(action){
    try {
        const result = yield Api.insertUserFromApi(action.newUser);
        yield put ({type:LOGIN,sort:'desc'});
      
    } catch (error) {
        
    }
}
export function* wacthNewUser(){
    yield takeLatest(LOGIN,addNewUser);
}
