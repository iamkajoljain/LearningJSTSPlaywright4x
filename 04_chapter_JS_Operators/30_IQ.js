let environment ="staging";
let baseURL = environment === "staging" ? "https://staging-api.example.com" : "https://api.example.com";
console.log(baseURL);