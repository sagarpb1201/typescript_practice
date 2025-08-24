class Queue<T>{
    // private notifications<T>:T[]=[];
    private _queue:T[]=[];

    constructor(){
    }

    enqueue(job:T):void{
        this._queue.push(job);
    }
}