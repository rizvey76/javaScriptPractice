const user={
    id:339,
    name:"Sakib",
    education:{
          degree:"Masters",
    },
};

// const{education:{degree}}=user;
// console.log(degree);   

//OR,

const{education:{degree}={}}=user;  ///for default value
console.log(degree);
