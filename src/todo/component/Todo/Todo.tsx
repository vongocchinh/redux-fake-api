import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GET_ALL_DATA_TODO_USER } from '../../reducer/User/Todo.reducer';
import { TodoModel } from '../../type.d.ts/type';
import { GET_USER_DATA_BY_ID_TODO } from './../../action/Home';
interface TodoTS{
    match:any
}
const Todo:React.FC<TodoTS>=({match})=> {
    var id=match.params.id;
    const [input, setInput] = useState("")
    const [select, setSelect] = useState(-1)
    const dispatch=useDispatch();
    useEffect(() => {
        dispatch(GET_USER_DATA_BY_ID_TODO(id));
    }, [id,dispatch])
    const todoList=useSelector(GET_ALL_DATA_TODO_USER);
    const showTodo:any=(data:Array<TodoModel>)=>{
        if(data.length>0){
            if(input){
                data = data.filter((dataS: TodoModel) => {
                    return dataS.title.toLowerCase().indexOf(input) !== -1;
                });
            }
            data = data.filter((dataS: TodoModel) => {

                if (select === -1) {

                    return data;
                } else {
                    return dataS.completed === (select === 1 ? true : false);
                }
            });
         return  data.map((value,key)=>{
                return (
                    <tr className="" key={key}>
                        <td>
                           {value.id}
                        </td>
                        <td className="title-item">
                            {value.title}
                        </td>
                        <td className="item-center">
                            {value.completed?<p className="true">true</p>:<p className="false">False</p>}
                        </td>
                    </tr>
                )
            })
        }
    }
    const onInput=({target:{name,value}} : React.ChangeEvent<HTMLInputElement>)=>{
        setInput(value);
    }
    const onSelect=({target:{name,value}} :React.ChangeEvent<HTMLSelectElement> )=>{
        setSelect(Number(value));
    }
    return (
       
        <div className="container-home" >
             <div className="option">
                 <input type="text" placeholder="filter todo" onChange={onInput} />
                 <div>
                 <select onChange={onSelect} >
                     <option value={1}>True</option>
                     <option value={0} >false</option>
                     <option value={-1}>All</option>
                 </select>
             </div>
             </div>
            
            <table>
                    <thead>
                        <tr>
                            <td>ID</td>
                            <td>TITLE</td>
                            <td>COMPLETED</td>
                        </tr>
                    </thead>
                    <tbody>
                        {showTodo(todoList)}
                    </tbody>
                </table>
            
        </div>
    )
}
export default  Todo;