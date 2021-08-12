import React from 'react'
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import {  GET_PHOTO_USER_BY_ID_ACTION } from './../../action/Home';
import { useSelector } from 'react-redux';
// import { GET_ALL_ALBUM_USER } from '../../reducer/User/Album.reducer';
// import { Link } from 'react-router-dom';
import {  PhotoModel } from '../../type.d.ts/type';
import { GET_ALL_PHOTO_USER } from '../../reducer/User/Photo.reducer';

interface PhotoTs{
match:any
}
 const Photo:React.FC<PhotoTs>= ({match})=> {
     var id=match.params.id;
     const dispatch=useDispatch();
     useEffect(() => {
         dispatch(GET_PHOTO_USER_BY_ID_ACTION(id))
     }, [dispatch,id]);
 
     const todoList=useSelector(GET_ALL_PHOTO_USER);
     const showPhoto:any=(data:Array<PhotoModel>)=>{
        if(data.length>0){
            return data.map((value,key)=>{
                return <tr className="" key={key}>
                <td style={{width:"100px"}}>
                   {value.id}
                </td>
                <td style={{width:"300px"}} className="title-item">
                    {value.title}
                </td>
                <td style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                    <img style={{width:"100px"}} alt="" src={value.url} />
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
                            <td>IMG</td>
                        </tr>
                    </thead>
                    <tbody>
                        {showPhoto(todoList)}
                    </tbody>
                </table>
        </div>
    )
}
export default Photo;