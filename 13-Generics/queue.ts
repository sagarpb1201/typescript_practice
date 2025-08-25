interface QueueResponse<T>{
    queueSize:number;
    queueInstance:Queue<T>;
}

class Queue<T>{
    // private notifications<T>:T[]=[];
    private _queue:T[]=[];

    constructor(){
    }

    enqueue(job:T):QueueResponse<T>{
        const queueSize=this._queue.push(job);
        return {queueSize:queueSize,queueInstance:this}
    }
    dequeue(): T {
        if(this._queue.length==0){
            throw new Error('The queue is empty')
        }
        const result=this._queue.shift();
        if(result!=undefined){
            return result;
        }else{
            throw new Error()
        }
    }
}

const videoQueue=new Queue();
console.log(typeof videoQueue)