const likedByUserIds=new Set<string>();

likedByUserIds.add("user123");
likedByUserIds.add("user456");
likedByUserIds.add("user123");
likedByUserIds.delete("user123")

console.log(likedByUserIds)

const hasUserLikedPost=(likedByUserIds:Set<string>,userId:string):boolean=>{
    return likedByUserIds.has(userId)
}

console.log(hasUserLikedPost(likedByUserIds,"user123"))
console.log(hasUserLikedPost(likedByUserIds,"user1234"))