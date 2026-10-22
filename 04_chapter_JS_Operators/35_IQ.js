let statusCode = 204;
let category = statusCode < 300 ? "Success" : 
statusCode < 400 ? "Redirection" : statusCode < 500 ? "Client Error" : "Server Error";
console.log(`Status code ${statusCode} falls under category: ${category}`);