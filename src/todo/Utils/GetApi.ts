import axios from "axios";

export default async function  getApi(endPoint:string,method:any,body:any){
    return await axios({
        method:method,
        data:body,
        url:"https://jsonplaceholder.typicode.com/"+endPoint,
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
          },
    }).catch(er=>{
        console.log(er);
    })
}