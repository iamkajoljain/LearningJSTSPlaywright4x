let amul = null;
let val = amul ?? "Kajol Jain"
console.log(val);

// nullish coalescing operator (??) is a logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand.
//nullish Operator (??) is a logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand.
let apiResponse = "null";
let dataResponse = apiResponse ?? "{}";
console.log(dataResponse);


let apiResponse1 = "Kajol Jain";
let dataResponse1 = apiResponse1 ?? "{}";
console.log(dataResponse1);
