
import * as types from '../../constant/User';
import { initState, UserModel } from '../../type.d.ts/type';
import { RootState } from '../store';
import { ActionThunkUser } from './type.action';
var data:UserModel[]=[];
var initialState:initState={
    status:undefined,
    ArrayUser:data
};
var myReducer=(state=initialState,actions:ActionThunkUser)=>{
    switch (actions.type) {
        case types.GetAllUser:
            state.ArrayUser=actions.payload;
            return state;
        default:
           return state;
    }
}

export default myReducer;

export const GET_ALL_DATA_USER=(state:RootState)=>state.User.ArrayUser;

export const GET_USER_DETAIL=(state:RootState,id:number)=>{
    return state.User.ArrayUser.find(v=>v.id===id);
}