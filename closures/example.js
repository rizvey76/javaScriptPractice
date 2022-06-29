

function parent(){
    let count=0;
    return function(){
        count=count+1;
        return count;
    }
};

const add=parent(); //here 'parent()' return a function ,'add' is function
console.dir(add);  //value has been stored in closure 


console.log(add());
console.log(add());
console.log(add());