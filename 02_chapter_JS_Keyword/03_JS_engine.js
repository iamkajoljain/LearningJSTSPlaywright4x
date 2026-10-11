let x = 10;
console.log(x);
// how JS engine works :
// 1.Tokenizing : Tokens are made
// 2.Parsing : all tokens are identified as operator,keyword, literals and syntax error caught if any 
// 3.Create ASt (Abstract Syntax Tree) : variable declaration  v/s expression statement
//4. Interpreter(Ignition): Converts AST to Byte code - code is simple or complex is decided here 
//5. Execution (Runtime with Call stack)
//6. Profiler + JIT Optimisation : checks whether hot code (complex)or cold code(simple)
//7.Turbo Fan/Compiler :compiler covert r optimize the hot code --> Byte code
//8.Garbage Collector : automatically removes unused or ureachable objects 
//9. Machine Code Exceution: The final optimised code is execute directly by CPU.
//HOW TO READ BYTE CODE:
//"node   --print-bytecode <respective_folder_path>/<file_name.js>"


// Hot Code
//  for (let a = 0; a < 100000; a++) {
//     console.log(a);
//     badCodeFn();
// }

// function badCodeFn() {
//     console.log("Hello");
// }
