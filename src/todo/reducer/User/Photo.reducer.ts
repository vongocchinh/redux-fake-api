
import { initStatePhoto, PhotoModel } from '../../type.d.ts/type';
import { RootState } from '../store';
import { ActionThunkUser, GET_PHOTO_USER } from './type.action';
var data:PhotoModel[]=[];
var initialState:initStatePhoto={
    ArrayPhoto:data
};
var myReducer=(state=initialState,actions:ActionThunkUser)=>{
    switch (actions.type) {
        case GET_PHOTO_USER:
            state.ArrayPhoto=actions.payload;
            return state;
        default:
           return state;
    }
}

export default myReducer;

export const GET_ALL_PHOTO_USER=(state:RootState)=>state.Photo.ArrayPhoto;
