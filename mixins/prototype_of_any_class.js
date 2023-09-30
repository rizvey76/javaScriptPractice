//mixin
let sayWelcomeMixin={
    sayWalcome(){
        console.log(`Welcome ${this.userName}`);
    },

    sayBye(){
        console.log(`Bye ${this.userName}`);
    }
};

//class
class User{
  constructor(userName){
     this.userName=userName;
  };

  
}

//copy the methods

Object.assign(User.prototype,sayWelcomeMixin);

//now user can use the methods

new User("John").sayWalcome();