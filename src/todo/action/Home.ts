
import * as types from '../constant/User';
import { GET_COMMENT_USER, GET_POST_USER, UserActionThunk } from '../reducer/User/type.action';
import getApi from '../Utils/GetApi';
export const GET_ALL_USER=():UserActionThunk=>{
    return async (dispatch)=>{
       await getApi("users","GET",null).then((res:any)=>{
            dispatch({
                type:types.GetAllUser,
                payload:res.data
            })
        })
    }
}


// export const GET_USER_DETAIL=(id)=>{
//     return async dispatch=>{
//         await getApi("users/"+id,'GET',null).then(res=>{
//             dispatch({
//                 type:types.GET_USER_DETAIL,
//                 payload:res.data
//             })
//         })
//     }
// }

export const GET_USER_DATA_BY_ID_TODO=(id:number):UserActionThunk=>{
    return async dispatch=>{
        await getApi("users/"+id+"/todos","GET",null).then( async (res:any)=>{
            dispatch({
                type:types.GET_USER_DATA_BY_ID_TODO,
                payload:res.data
            })
        })
    }
}
// export const GET_USER_DATA_BY_ID_PHOTO=(id)=>{
//     return async dispatch=>{
//         await getApi("albums?userId="+id,"GET",null).then( async (res)=>{
//             var data=[];
//             data=(res.data);
//             let dataPhotos=[];
//             data.forEach(async e => {
//                     await  getApi("photos?albumId="+e.id,"GET",null).then(async(res2)=>{
//                         dataPhotos.push(res2.data);

//                         dispatch({
//                             type:types.GET_USER_DATA_BY_ID_PHOTOS,
//                             payload:dataPhotos
//                         })
//                     })
//             });
//             })
//     }
// }

export const GET_USER_DATA_BY_ID_POST_ACTION=(id:number):UserActionThunk=>{
    return async dispatch=>{
        await getApi(`posts?userId=${id}`,"GET",null).then( async (res4:any)=>{
            dispatch({
                type:GET_POST_USER,
                payload:res4.data
            })
        }
    )}
}

export const GET_COMMENT_USER_BY_ID_ACTION=(id:number):UserActionThunk=>{
    return async dispatch=>{
        await getApi(`comments?postId=${id}`,"GET",null).then( async (res:any)=>{
            dispatch({
                type:GET_COMMENT_USER,
                payload:res.data
            })
        }
    )}
}