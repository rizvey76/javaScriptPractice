const user={
    id:339,
    name:"Sakib",
    age:35,
};

const{name}=user;
//OR,
const {name:title}=user;//alias

console.log(name);
console.log(title);