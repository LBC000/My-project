// action types
const AXIOS_DATA = 'AXIOS_DATA';
const UPLOADING_TRUE = 'UPLOADING_TRUE';


// AXIOS_DATA字段发送到store。请求数据
export function axios_data(action) {
    return {
        type: AXIOS_DATA,
        payload: {
            url: action.url,
            type: action.type
        }
    }
}

//更新loading为true
export function upLoadingTrue() {
    return {
        type: UPLOADING_TRUE
    }
}