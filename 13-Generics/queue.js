"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Queue {
    // private notifications<T>:T[]=[];
    _queue = [];
    constructor() {
    }
    enqueue(job) {
        const queueSize = this._queue.push(job);
        return { queueSize: queueSize, queueInstance: this };
    }
    dequeue() {
        if (this._queue.length == 0) {
            throw new Error('The queue is empty');
        }
        const result = this._queue.shift();
        if (result != undefined) {
            return result;
        }
        else {
            throw new Error();
        }
    }
}
const videoQueue = new Queue();
console.log(typeof videoQueue);
//# sourceMappingURL=queue.js.map