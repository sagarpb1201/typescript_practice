interface WithLength{
    length:number
}
function wrapInArray<T>(element:T):T[]{
    return [element]
}


function logAndReturn<T extends WithLength>(element:T):T{
    console.log(element.length)
    return element;
}

const wrappedString=wrapInArray("hello");
const wrappedNumber=wrapInArray(123);
logAndReturn('Helelellele')