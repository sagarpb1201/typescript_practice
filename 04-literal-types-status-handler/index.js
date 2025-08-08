var handleRequestStatus = function (status) {
    switch (status) {
        case "loading":
            return "Request is loading...";
        case "success":
            return "Data fetched successfully!";
        case "error":
            return "An error occurred";
    }
};
console.log(handleRequestStatus("loading"));
