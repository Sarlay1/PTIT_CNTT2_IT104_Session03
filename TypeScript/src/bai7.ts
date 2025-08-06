let text: string = "hello";
let result: string = "";

for (const char of text) {
    if (!result.includes(char)) {
        result += char;
    }
}

console.log(result); 
