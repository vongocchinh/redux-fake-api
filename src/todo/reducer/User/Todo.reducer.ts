
import * as types from '../../constant/User';
import {  initStateTodo, TodoModel } from '../../type.d.ts/type';
import { RootState } from '../store';
import { ActionThunkUser } from './type.action';


var ArrayTodo:TodoModel[]=[];
var initialState:initStateTodo={
    ArrayTodo:ArrayTodo
};
var myReducer=(state=initialState,actions:ActionThunkUser)=>{
    switch (actions.type) {
        case types.GET_USER_DATA_BY_ID_TODO:
            state.ArrayTodo=actions.payload;
            return state;
        default:
           return state;
    }
}

export default myReducer;

export const GET_ALL_DATA_TODO_USER=(state:RootState)=>state.Todo.ArrayTodo;
