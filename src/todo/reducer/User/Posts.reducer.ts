
import { initStatePost, PostModel } from '../../type.d.ts/type';
import { RootState } from '../store';
import { ActionThunkUser, GET_POST_USER } from './type.action';


var ArrayPost:PostModel[]=[];
var initialState:initStatePost={
    ArrayPost:ArrayPost
};
var myReducer=(state=initialState,actions:ActionThunkUser)=>{
    switch (actions.type) {
        case GET_POST_USER:
            state.ArrayPost=actions.payload;
            return state;
        default:
           return state;
    }
}

export default myReducer;

export const GET_ALL_DATA_POST_USER=(state:RootState)=>state.Post.ArrayPost;
