import { createStore,applyMiddleware, combineReducers ,compose} from 'redux'
// import { composeWithDevTools } from 'redux-devtools-extension';
import User from './User/User.Reducer';
import Todo from './User/Todo.reducer';
import Post from './User/Posts.reducer';
import Comments from './User/Comment.reducer';
import thunk from 'redux-thunk';



var RootReducer=combineReducers({
    User,
    Todo,
    Post,
    Comments
});

const composeEnhancer =(window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ||  compose
const store =createStore(RootReducer,composeEnhancer(applyMiddleware(thunk)));

export type RootState=ReturnType <typeof RootReducer>;
export type AppDisPatch=typeof store.dispatch;

export default store;