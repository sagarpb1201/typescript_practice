var processId = function (id) {
    if (typeof id == "string") {
        return "Processing username: ".concat(id.toUpperCase());
    }
    return "Processing user ID: ".concat(id);
};
var stringResult = processId("test");
console.log(stringResult);
var idResult = processId(1);
console.log(idResult);
