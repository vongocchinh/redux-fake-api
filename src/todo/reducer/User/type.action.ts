import { ThunkAction } from "redux-thunk";
import { AlbumsModel, CommentModel, PhotoModel, PostModel, TodoModel, UserModel } from "../../type.d.ts/type";
import { RootState } from "../store";


export const GetAllUser='GetAllUser';
export const GetAllUserDetail='GetAllUserDetail';
export const GET_USER_DETAIL='GET_USER_DETAIL';


export const GET_USER_DATA_BY_ID_PHOTOS='GET_USER_DATA_BY_ID_PHOTOS=';
export const GET_USER_DATA_BY_ID_TODO='GET_USER_DATA_BY_ID_TODO';
export const GET_USER_DATA_BY_ID_COMMENT='GET_USER_DATA_BY_ID_COMMENT';


export const GET_POST_USER='GET_POST_USER';
export const GET_COMMENT_USER='GET_COMMENT_USER';

export const GET_ALBUM_USER='GET_ALBUM_USER';
export const GET_PHOTO_USER='GET_PHOTO_USER';


export const UPDATE_STATUS_TODO_USER='UPDATE_STATUS_TODO_USER';



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

export interface GET_USER_ALBUM{
    type:typeof GET_ALBUM_USER,
    payload:Array<AlbumsModel>
}

export interface GET_USER_PHOTO{
    type:typeof GET_PHOTO_USER,
    payload:Array<PhotoModel>
}


export interface GET_POST_USER_ALL{
    type:typeof GET_POST_USER,
    payload:Array<PostModel>
}

export interface GET_COMMENT_USER_ALL{
    type:typeof GET_COMMENT_USER,
    payload:CommentModel[]
}

export interface UPDATE_STATUS_TODO_USER_TYPE{
    type:typeof UPDATE_STATUS_TODO_USER,
    payload:number
}

export type ActionThunkUser=GETAllUSER|GET_USER_Todo | GET_USER_COMMENT | GET_POST_USER_ALL |GET_COMMENT_USER_ALL | GET_USER_ALBUM | GET_USER_PHOTO | UPDATE_STATUS_TODO_USER_TYPE;

export type UserActionThunk<ReturnType=void>=ThunkAction<ReturnType,RootState,unknown,ActionThunkUser>