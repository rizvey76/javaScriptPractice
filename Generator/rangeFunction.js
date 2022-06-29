function* range(start,end,step){
    let current=start;
    while(current<=end){
       yield current;
       console.log("Did it execute?");
       current+=step;
    }
};

var iterator=range(1,1000,2);
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());