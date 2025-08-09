"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const likedByUserIds = new Set();
likedByUserIds.add("user123");
likedByUserIds.add("user456");
likedByUserIds.add("user123");
likedByUserIds.delete("user123");
console.log(likedByUserIds);
const hasUserLikedPost = (likedByUserIds, userId) => {
    return likedByUserIds.has(userId);
};
console.log(hasUserLikedPost(likedByUserIds, "user123"));
console.log(hasUserLikedPost(likedByUserIds, "user1234"));
//# sourceMappingURL=index.js.map