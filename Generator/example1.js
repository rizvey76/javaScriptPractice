function* generator(){
    yield 1;
    yield 2;
    return "I am finished!";
    yield 3;
    yield 4;
};

let iterator=generator();
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());


///////////////Syntax/////////////
// ->function* myGenerator(){}
// ->function * myGenerator(){}
// ->const myGenerator=function*(){}
// ->class myClass(){
//     *myGenerator(){};
// }

// ->const myObject={
//     *myGenerator(){}
// }