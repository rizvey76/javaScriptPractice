//here hoisting like a=undefined;
a=3; //initialization
console.log(a);  
var a;  //declaretion


///////////let and const does not hoisting ///////////////

b=5;
console.log(b);
let b;

//////////Declarlation will hoisting ,Initialaiztion not//////////////
console.log(c);
var c=7; //result undefine

