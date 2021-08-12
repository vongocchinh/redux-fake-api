import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { GET_USER_DATA_BY_ID_POST_ACTION } from './../../action/Home';
import { GET_ALL_DATA_POST_USER } from '../../reducer/User/Posts.reducer';
import { PostModel } from '../../type.d.ts/type';
import { Link } from 'react-router-dom';


interface PostTS{
    match:any
}
 const Post:React.FC<PostTS>= ({match})=> {
    var id = match.params.id;
    const dispatch=useDispatch();
    useEffect(() => {
        dispatch(GET_USER_DATA_BY_ID_POST_ACTION(id))
    }, [dispatch,id]);

    const todoList=useSelector(GET_ALL_DATA_POST_USER);
    const showPost:any=(data:Array<PostModel>)=>{
        if(data.length>0){
            return data.map((value,key)=>{
                return <tr className="" key={key}>
                <td style={{width:"100px"}}>
                   <Link to={"/comments/"+value.id}>Chi tiết</Link>
                </td>
                <td style={{width:"300px"}} className="title-item">
                    {value.title}
                </td>
                <td style={{width:"auto"}} className="item-center">
                    {value.body}
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
                            <td>Body</td>
                        </tr>
                    </thead>
                    <tbody>
                        {showPost(todoList)}
                    </tbody>
                </table>
        </div>
    )
}
export default  Post;