"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let text = "hello";
let result = "";
for (const char of text) {
    if (!result.includes(char)) {
        result += char;
    }
}
console.log(result);
