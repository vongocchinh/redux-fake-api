import { ThunkAction } from "redux-thunk";
import { CommentModel, PostModel, TodoModel, UserModel } from "../../type.d.ts/type";
import { RootState } from "../store";


export const GetAllUser='GetAllUser';
export const GetAllUserDetail='GetAllUserDetail';
export const GET_USER_DETAIL='GET_USER_DETAIL';


export const GET_USER_DATA_BY_ID_PHOTOS='GET_USER_DATA_BY_ID_PHOTOS=';
export const GET_USER_DATA_BY_ID_TODO='GET_USER_DATA_BY_ID_TODO';
export const GET_USER_DATA_BY_ID_COMMENT='GET_USER_DATA_BY_ID_COMMENT';


export const GET_POST_USER='GET_POST_USER';
export const GET_COMMENT_USER='GET_COMMENT_USER';



export interface GETAllUSER{
    type:typeof GetAllUser,
    payload:Array<UserModel>
}
export interface GET_USER_Todo{
    type:typeof GET_USER_DATA_BY_ID_TODO,
    payload:Array<TodoModel>
}

export interface GET_USER_COMMENT{
    type:typeof GET_USER_DATA_BY_ID_COMMENT,
    payload:Array<TodoModel>
}


export interface GET_POST_USER_ALL{
    type:typeof GET_POST_USER,
    payload:Array<PostModel>
}

export interface GET_COMMENT_USER_ALL{
    type:typeof GET_COMMENT_USER,
    payload:CommentModel[]
}



export type ActionThunkUser=GETAllUSER|GET_USER_Todo | GET_USER_COMMENT | GET_POST_USER_ALL |GET_COMMENT_USER_ALL;

export type UserActionThunk<ReturnType=void>=ThunkAction<ReturnType,RootState,unknown,ActionThunkUser>