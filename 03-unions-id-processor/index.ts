const processId=(id:string | number):string=>{
    if(typeof id=="string"){
        return `Processing username: ${id.toUpperCase()}`
    }
        return `Processing user ID: ${id}`
}

const stringResult=processId("test");
console.log(stringResult)
const idResult=processId(1)
console.log(idResult);