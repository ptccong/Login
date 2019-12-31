import  {call,call} from 'redux-saga/effect';
import {wacthFetchUser, wacthNewUser} from './userSagas.js';
export default function* rootSaga(){
    yield [
        fork(wacthFetchUser),
        fork(wacthNewUser)
    ]
}
