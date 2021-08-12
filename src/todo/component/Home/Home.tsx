import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import './styles/style.css';
import { GET_ALL_USER } from '../../action/Home';
import { GET_ALL_DATA_USER } from '../../reducer/User/User.Reducer';
import UserItem from './UserItem';
import { UserModel } from '../../type.d.ts/type';
// import { GET_ALL_DATA_TODO_USER } from '../../reducer/User/Todo.reducer';
export default function Home() {
    const dispatch = useDispatch();
    const [input, setInput] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false)
    const Users = useSelector(GET_ALL_DATA_USER);
    useEffect(() => {
        dispatch(GET_ALL_USER());
    }, [dispatch])
    useEffect(() => {
        if (Users.length > 0) {
            setLoading(false)
        } else {
            setLoading(true);
        }
    }, [Users])
    console.log(loading);


    const showUser: any = (data: Array<UserModel>) => {
        var result = null;
        if (data.length > 0) {
            if (input) {
                data = data.filter((dataS: UserModel) => {
                    return dataS.name.toLowerCase().indexOf(input) !== -1;
                });
            }
            result = data.map((value, key) => {
                return <UserItem value={value} key={key} />
            })
        }
        return result;
    }
    const onInput = ({ target: { name, value } }: React.ChangeEvent<HTMLInputElement>) => {
        setInput(value);
    }
    return (

        <>
            <div className="container-home">
                <div className="option">
                    <input type="text" placeholder="Filter User ..." onChange={onInput} />
                </div>
                <table>
                    <thead>
                        <tr>
                            <td>ID</td>
                            <td>NAME</td>
                            <td>PHONE</td>
                            <td>EMAIL</td>
                            <td>WEBSITE</td>
                            <td>DETAIL</td>
                        </tr>
                    </thead>
                    <tbody>
                        {showUser(Users)}
                    </tbody>
                </table>
            </div>
        </>
    )
}
