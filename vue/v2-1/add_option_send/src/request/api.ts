import httpInstance from "./index";

interface loginData{
    userName:string,
    password:string
}
 function loginApi(data?:loginData,methodValue?:string,headType?:string){
    return httpInstance({
        url:'/handler/GetSalesmanList.ashx',
        method:methodValue||'get',
        data,
        headType:headType||'',
    })

}
function getCateGory(data?:'',methodValue?:string,headType?:string){
    return httpInstance({
        url:'/home/cateGory/head',
        method:methodValue||'get',
        data,
        headType:headType||'',
    })
}
export {loginApi,getCateGory}