import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../reducer/store";
import { GET_USER_DETAIL } from "./../../reducer/User/User.Reducer";
import { Link } from 'react-router-dom';
import { GET_ALL_USER, GET_USER_DATA_BY_ID_TODO, GET_USER_DATA_BY_ID_POST_ACTION } from './../../action/Home';
import { GET_ALL_DATA_TODO_USER } from "../../reducer/User/Todo.reducer";
import { GET_ALL_DATA_POST_USER } from "../../reducer/User/Posts.reducer";

interface UserItemTS {
    match: any;
}
const UserDetail: React.FC<UserItemTS> = ({ match }) => {
    var id = match.params.id;
    const dispatch = useDispatch();
    const userDetail = useSelector((state: RootState) =>
        GET_USER_DETAIL(state, Number(id))
    );
    useEffect(() => {
        dispatch(GET_ALL_USER());
    }, [dispatch])
    useEffect(() => {
        dispatch(GET_USER_DATA_BY_ID_TODO(Number(id)));
    }, [id,dispatch])
    useEffect(() => {
        dispatch(GET_USER_DATA_BY_ID_POST_ACTION(id))
    }, [dispatch,id]);
    const todoList=useSelector(GET_ALL_DATA_TODO_USER);
    const todoPost=useSelector(GET_ALL_DATA_POST_USER);
    return (
        <div className="User-detail">
            <div className="profile">
                <div>
                    <p>Name :</p>
                    <p>phone:</p>
                    <p>Email :</p>
                    <p>UserName:</p>
                    <p>Website :</p>
                </div>
                <div>
                    <p>{userDetail?.name || ""}</p>
                    <p>{userDetail?.phone || ""}</p>
                    <p>{userDetail?.email || ""}</p>
                    <p>{userDetail?.username || ""}</p>
                    <p>{userDetail?.website || ""}</p>
                </div>
            </div>
            <div className="profile-2">
                <h4>MENU</h4>
                <div className="profile-item">
                    <div>
                        <p><Link to={`/todo/${id}`}>CountTodo:</Link>:</p>
                        <p><Link to={`/post/${id}`}>Post :</Link></p>
                    </div>
                    <div>
                        <p>{todoList?.length||0}</p>
                        <p>{todoPost?.length||0}</p>

                    </div>
                </div>
            </div>
        </div>
    );
};
export default UserDetail;
