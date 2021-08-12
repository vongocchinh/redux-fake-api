
import { AlbumsModel, initStateAlbum } from '../../type.d.ts/type';
import { RootState } from '../store';
import { ActionThunkUser, GET_ALBUM_USER } from './type.action';
var data:AlbumsModel[]=[];
var initialState:initStateAlbum={
    ArrayAlbum:data
};
var myReducer=(state=initialState,actions:ActionThunkUser)=>{
    switch (actions.type) {
        case GET_ALBUM_USER:
            state.ArrayAlbum=actions.payload;
            return state;
        default:
           return state;
    }
}

export default myReducer;

export const GET_ALL_ALBUM_USER=(state:RootState)=>state.Album.ArrayAlbum;
