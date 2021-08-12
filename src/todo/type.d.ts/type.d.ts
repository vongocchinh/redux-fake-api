interface geo{
    lat:string,
    lng:string
}
interface address{
    street:string,
    suite:string,
    city:string,
    zipcode:string,
    geo:geo
}
interface company{
    name:string,
    catchPhrase:string,
    bs:string
}
interface UserModel{
    id:number,
    name:string,
    username:string,
    email:string,
    address:address,
    phone:string,
    website:string,
    company:company
}

export enum StatusUser{
    loading,
    success,
    error
}

type initState={
    status?:StatusUser,
    ArrayUser:UserModel[]
}


interface TodoModel{
    userId:string,
    title:string,
    id:number,
    completed:boolean
}



type initStateTodo={
    ArrayTodo:TodoModel[]
}





interface PostModel{
    body:string
    title:string,
    id:number,
    userId:number
}



type initStatePost={
    ArrayPost:PostModel[]
}



interface CommentModel{
    postId:number,
    id:number,
    name:string,
    email:string,
    body:string
}


type initStateComment={
    ArrayComment:CommentModel[]
}