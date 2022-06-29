var myArray=[1,2,3];

// Array.prototype={
//     includes:function(){
//         return "Value exist here";
//     }
// };

console.log(myArray["includes"](2));

///////////////Custom includes////////////

var cusIncludes=Symbol("custom function");

Array.prototype[cusIncludes]=()=>{
    return "This is custom includes";
};

console.log(myArray[cusIncludes](2));
