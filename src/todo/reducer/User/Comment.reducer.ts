
import { CommentModel, initStateComment } from '../../type.d.ts/type';
import { RootState } from '../store';
import { ActionThunkUser, GET_COMMENT_USER } from './type.action';


var ArrayComment:CommentModel[]=[];
var initialState:initStateComment={
    ArrayComment:ArrayComment
};
var myReducer=(state=initialState,actions:ActionThunkUser)=>{
    switch (actions.type) {
        case GET_COMMENT_USER:
            state.ArrayComment=actions.payload;
            return state;
        default:
           return state;
    }
}

export default myReducer;

export const GET_ALL_DATA_COMMENTS_USER=(state:RootState)=>state.Comments.ArrayComment;
