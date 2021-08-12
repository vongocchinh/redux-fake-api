import React from 'react'
import { TodoModel } from '../../type.d.ts/type';
import { useDispatch } from 'react-redux';
import { UPDATE_TODO_USER_BY_ID_ACTION } from './../../action/Home';
interface ItemTS{
    value:TodoModel
}
const Item:React.FC<ItemTS>=({value})=> {
    
    const dispatch = useDispatch();
    const onclick=()=>{
        dispatch(UPDATE_TODO_USER_BY_ID_ACTION(value.id));
    }
    const showStatus:any=(value:boolean)=>{

        if(value){
            return <p className="true">true</p>
        }else{
            return <p className="false">False</p>
        }
    }
    return (
        <tr className="">
            <td>
                {value.id}
            </td>
            <td className="title-item">
                {value.title}
            </td>
            <td className="item-center">
                <span onClick={onclick}>
                    {showStatus(value.completed)}
                </span>
            </td>
        </tr>
    )
}
export default  Item;