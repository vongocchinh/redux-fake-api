import React from 'react'
import {Route, Switch } from 'react-router-dom'
import Home from '../todo/component/Home/Home';
import UserDetail from '../todo/component/UserDetail/UserDetail';
import Todo from '../todo/component/Todo/Todo';
import Post from './../todo/component/Post/Post';
import Comments from './../todo/component/Post/Comments';
import Album from './../todo/component/Album/Album';
import Photo from './../todo/component/Photo/Photo';

interface RouterTs{

}
const Router:React.FC<RouterTs>=()=> {
    return (
        <Switch>
            <Route exact={true} component={Home} path="/" />
            <Route  component={UserDetail} path="/user-detail/:id" />
            <Route component={Todo} path="/todo/:id" />
            <Route component={Post} path="/post/:id" />
            <Route component={Comments} path="/comments/:id" />
            <Route component={Album} path="/album/:id" />
            <Route component={Photo} path="/photo/:id" />
        </Switch>
    )
}
export default  Router;