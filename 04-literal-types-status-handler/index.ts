type RequestStatus="loading" | "success" | "error" | "idle";

const handleRequestStatus=(status:RequestStatus):string=>{
    switch(status){
        case "loading":
        return "Request is loading..."
        case "success":
            return "Data fetched successfully!"
        case "error":
            return "An error occurred";
        case "idle":
            return "Idle status"
        default:
            const _exhaustiveCheck:never=status
            throw new Error(`Status ${status} does not have a defined message`)
    }
}

console.log(handleRequestStatus("loading"))