import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { GET_COMMENT_USER_BY_ID_ACTION } from '../../action/Home';
import { GET_ALL_DATA_COMMENTS_USER } from '../../reducer/User/Comment.reducer';
// import { Link } from 'react-router-dom';
import { CommentModel } from '../../type.d.ts/type';

interface CommentsTs{
    match:any
}
 const Comments:React.FC<CommentsTs>=({match})=> {
    var id = match.params.id;
    const dispatch=useDispatch()
    useEffect(() => {
        dispatch(GET_COMMENT_USER_BY_ID_ACTION(id));
    }, [dispatch,id])

    const data=useSelector(GET_ALL_DATA_COMMENTS_USER);
    const showPost:any=(data:Array<CommentModel>)=>{
        if(data.length>0){
            return data.map((value,key)=>{
                return <tr className="" key={key}>
                <td style={{width:50}}>
                  {value.id}
                </td>
                <td style={{width:"300px"}} className="title-item">
                    {value.name}
                </td>
                <td style={{width:"400px"}} className="title-item">
                    {value.email}
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
                            <td>Name</td>
                            <td>Email</td>
                            <td>Body</td>
                        </tr>
                    </thead>
                    <tbody>
                        {showPost(data)}
                    </tbody>
                </table>
        </div>
    )
}
export default Comments;