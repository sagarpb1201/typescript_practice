type LoginEvent={
    type:"LOGIN";
    user:string;
}

type ClickEvent={
    type:"CLICK";
    x:number;
    y:number;
}

type DataLoadEvent={
    type:"DATA_LOAD";
    data:string[];
}

type LogoutEvent={
    type:"LOGOUT";
    user:string;
}

type AppEvent=LoginEvent | ClickEvent | DataLoadEvent | LogoutEvent;

const processEvent=(event:AppEvent)=>{
    switch(event.type){
        case "LOGIN":
            console.log(event.user);
            break;
        case "CLICK":
            console.log(event.x);
            break;
        case "DATA_LOAD":
            console.log(event.data);
            break;
        case "LOGOUT":
            console.log(event.user);
            break;
        default:
            const _exhaustiveCheck:never=event;
            throw new Error(`This is wrong event type ${event}`);
    }
}