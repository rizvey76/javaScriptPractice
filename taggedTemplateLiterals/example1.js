function modifier(strings,...values){
    const m=strings.reduce(
        (pre,curr)=>{
            return pre+curr+(values.length?"Mr."+values.shift():"");
        },""
    );

    return m;
};

var play1="Sakib";
var play2="Tamim";

console.log(modifier`we have ${play1} and ${play2} in our cricket team`);