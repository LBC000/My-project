import { call, put } from 'redux-saga/effects';
import { takeEvery } from 'redux-saga';
import axios from 'axios';

export function* axiosData(action) {
    try {
        const data = yield call(axios, action.payload.url);
        yield put({type: action.payload.type, data});
        yield put({type: 'UPLOADING_FALSE'});
    } catch (error) {
        console.log(error);
        yield put({type: 'UPLOADING_FALSE', error});
    }
}

export default function* rootSaga() {
    yield takeEvery('AXIOS_DATA', axiosData);
}