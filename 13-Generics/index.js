"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function wrapInArray(element) {
    return [element];
}
function logAndReturn(element) {
    console.log(element.length);
    return element;
}
const wrappedString = wrapInArray("hello");
const wrappedNumber = wrapInArray(123);
logAndReturn('Helelellele');
//# sourceMappingURL=index.js.map