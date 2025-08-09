enum LogLevel{
    "INFO"="INFO",
    "WARN"="WARN",
    "ERROR"="ERROR"
}

const logMessage=(message:string,level:LogLevel):string=>{
    switch(level){
        case LogLevel.INFO:
            return `[${LogLevel.INFO}]: ${message}`;
        case LogLevel.ERROR:
            return `[${LogLevel.ERROR}]: ${message}`
        case LogLevel.WARN:
            return `[${LogLevel.WARN}]: ${message}`;
        default:
            const _exhaustive:never=level;
            throw new Error(`Please check`);
    }
}

console.log(logMessage("test",LogLevel.INFO))
console.log(logMessage("test",LogLevel.ERROR))
console.log(logMessage("test",LogLevel.WARN))