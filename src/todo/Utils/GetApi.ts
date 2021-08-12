import axios from "axios";

export default async function  getApi(endPoint:string,method:any,body:any){
    return await axios({
        method:method,
        data:body,
        url:"https://jsonplaceholder.typicode.com/"+endPoint,
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
    }).catch(er=>{
        console.log(er);
    })
}