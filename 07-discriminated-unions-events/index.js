var processEvent = function (event) {
    switch (event.type) {
        case "LOGIN":
            console.log(event.user);
            break;
        case "CLICK":
            console.log(event.x);
            break;
        case "DATA_LOAD":
            console.log(event.data);
            break;
        default:
            var _exhaustiveCheck = event;
            throw new Error("This is wrong event type ".concat(event));
    }
};
