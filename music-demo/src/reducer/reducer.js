import { combineReducers } from 'redux';

const UPDATE_RECOLIST = 'UPDATE_RECOLIST';
const UPLOADING_FALSE = 'UPLOADING_FALSE';
const UPLOADING_TRUE = 'UPLOADING_TRUE';

//更新recoListData
function recoListData(state={}, action) {
    switch (action.type) {
        case UPDATE_RECOLIST:
            return action.data;
        default:
            return state
    }
}

//更新Loading
function loading(state=null, action) {
    switch (action.type) {
        case UPLOADING_FALSE:
            return false;
        case UPLOADING_TRUE:
            return true;
        default:
            return state
    }
}

  
export default combineReducers({
    recoListData,
    loading
})