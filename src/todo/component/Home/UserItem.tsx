import React from 'react'
import {Link} from 'react-router-dom';
import { UserModel } from '../../type.d.ts/type';
interface UserItemFc{
    value:UserModel
}
 const UserItem:React.FC<UserItemFc>=({value})=> {
    return (
        <tr>
            <td>{value.id}</td>
            <td>{value.name}</td>
            <td>{value.phone}</td>
            <td>{value.email}</td>
            <td>{value.website}</td>
            <td><Link className="link" to={`/user-detail/${value.id}`} >Detail</Link></td>
        </tr>
    )
}
export default UserItem;