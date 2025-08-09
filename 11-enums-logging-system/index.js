"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LogLevel;
(function (LogLevel) {
    LogLevel["INFO"] = "INFO";
    LogLevel["WARN"] = "WARN";
    LogLevel["ERROR"] = "ERROR";
})(LogLevel || (LogLevel = {}));
const logMessage = (message, level) => {
    switch (level) {
        case LogLevel.INFO:
            return `[${LogLevel.INFO}]: ${message}`;
        case LogLevel.ERROR:
            return `[${LogLevel.ERROR}]: ${message}`;
        case LogLevel.WARN:
            return `[${LogLevel.WARN}]: ${message}`;
        default:
            const _exhaustive = level;
            throw new Error(`Please check`);
    }
};
console.log(logMessage("test", LogLevel.INFO));
console.log(logMessage("test", LogLevel.ERROR));
console.log(logMessage("test", LogLevel.WARN));
//# sourceMappingURL=index.js.map