import React from 'react'
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { GET_ALBUM_USER_BY_ID_ACTION } from './../../action/Home';
import { useSelector } from 'react-redux';
import { GET_ALL_ALBUM_USER } from '../../reducer/User/Album.reducer';
import { Link } from 'react-router-dom';
import { AlbumsModel } from '../../type.d.ts/type';

interface AlbumTs{
match:any
}
 const Album:React.FC<AlbumTs>= ({match})=> {
     var id=match.params.id;
     const dispatch=useDispatch();
     useEffect(() => {
         dispatch(GET_ALBUM_USER_BY_ID_ACTION(id))
     }, [dispatch,id]);
 
     const todoList=useSelector(GET_ALL_ALBUM_USER);
     const showAlbum:any=(data:Array<AlbumsModel>)=>{
        if(data.length>0){
            return data.map((value,key)=>{
                return <tr className="" key={key}>
                <td style={{width:"100px"}}>
                   <Link to={"/photo/"+value.id}>Chi tiết</Link>
                </td>
                <td style={{width:"300px"}} className="title-item">
                    {value.title}
                </td>
            </tr>
            })
        }
    }
    return (
        <div className="container-home" >
            <table>
                    <thead>
                        <tr>
                            <td>ID</td>
                            <td>TITLE</td>
                        </tr>
                    </thead>
                    <tbody>
                        {showAlbum(todoList)}
                    </tbody>
                </table>
        </div>
    )
}
export default Album;