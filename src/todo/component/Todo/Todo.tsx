import React, { useEffect, useState  } from 'react'
import { connect, useDispatch } from 'react-redux'
import { GET_ALL_DATA_TODO_USER } from '../../reducer/User/Todo.reducer';
import { TodoModel } from '../../type.d.ts/type';
import { GET_USER_DATA_BY_ID_TODO } from './../../action/Home';
import Pagination from '@material-ui/lab/Pagination';
import Item from './Item';
import { useSelector } from 'react-redux';
import { RootState } from '../../reducer/store';
interface TodoTS {
    match: any,
    todo:Array<TodoModel>
}
const Todo: React.FC<TodoTS> = ({ match ,todo }) => {
    var id = match.params.id;
    const [input, setInput] = useState("")
    const [select, setSelect] = useState(-1)
    const [page, setPage] = useState(1);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(GET_USER_DATA_BY_ID_TODO(id));
    }, [id, dispatch])
    const todoList = useSelector(GET_ALL_DATA_TODO_USER);
    const onHandlePagination=(event: React.ChangeEvent<unknown>, page: number)=>{
        setPage(page);
    }
    const showPagination: any = (data: Array<TodoModel>) => {
        let count = 0;
        if (data.length > 0) {
            count = Math.ceil(data.length / 7);
        }
        return <Pagination onChange={onHandlePagination} page={page} count={count} variant="outlined" shape="rounded" />
    }

    const showTodo: any = (data: Array<TodoModel>) => {
        
        if (data.length > 0) {
            if (input) {
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
            let lastPage=7*page;
            let firstPage=lastPage-7;
            data=data.slice(firstPage,lastPage);
            return data.map((value, key) => {
                return (
                    <Item key={key} value={value} />
                )
            })
        }
    }
    const onInput = ({ target: { name, value } }: React.ChangeEvent<HTMLInputElement>) => {
        setInput(value);
    }
    const onSelect = ({ target: { name, value } }: React.ChangeEvent<HTMLSelectElement>) => {
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
            <div className="pagination">
                {showPagination(todoList)}
            </div>

        </div>
    )
}
const mapStateToProps=(state:RootState)=>{
    return {
        todo:state.Todo
    }
}
export default connect(mapStateToProps,null)(Todo);