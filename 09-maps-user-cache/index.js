"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const userCache = new Map();
const user1 = {
    id: "u1",
    name: "Alice",
    email: "alice@example.com"
};
const user2 = {
    id: "u2",
    name: "Bob",
    email: "bob@example.com"
};
userCache.set(user1.id, user1);
userCache.set(user2.id, user2);
console.log(userCache);
const getUserFromCache = (userCache, userId) => {
    return userCache.get(userId);
};
const fetchUserProfile = (userId) => {
    const userFromCache = getUserFromCache(userCache, userId);
    if (userFromCache != undefined) {
        console.log(`Cache hit for user ${userId}`);
        return userFromCache;
    }
    else {
        console.log(`Cache miss for user ${userId}. Fetching from DB...`);
        const fetchedUserProfile = { id: userId, name: "lob", email: "lob@example.com" };
        userCache.set(fetchedUserProfile.id, fetchedUserProfile);
        return fetchedUserProfile;
    }
};
console.log(getUserFromCache(userCache, "u1"));
console.log(getUserFromCache(userCache, "u4"));
console.log(fetchUserProfile("u1"));
console.log(fetchUserProfile("u4"));
//# sourceMappingURL=index.js.map