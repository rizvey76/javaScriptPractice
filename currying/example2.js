function curriedMultiply(a){
    return function(b){
        return function(c){
             return a*b*c;
        };
    };
};


let step1=curriedMultiply(5); // return value stored in closure
let step2=step1(6);
let step3=step2(7);

console.log(step3);