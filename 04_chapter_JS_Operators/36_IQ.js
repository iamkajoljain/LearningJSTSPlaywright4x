let temp = 20;

let feel = temp > 40 ? "Very Hot" : 
temp >30?"Hot":
temp >20 ? "Warm":
temp >15 ? "Cool" : "Cold";
console.log(`Temperature is ${temp} and it feels ${feel}`);