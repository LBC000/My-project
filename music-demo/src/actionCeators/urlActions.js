// action types
// const AXIOS_DATA = 'AXIOS_DATA';
const UPDATE_RECOLIST = 'UPDATE_RECOLIST';


// // AXIOS_DATA字段发送到store。请求数据
// export function axios_data(action) {
//     return {
//         type: AXIOS_DATA,
//         payload: {
//             url: action.url,
//             type: action.type
//         }
//     }
// }

// Action creators
//获取推荐歌单
export const upDataRecolist = {
    url: 'http://localhost:4000/personalized',
    type: 'UPDATE_RECOLIST'
}