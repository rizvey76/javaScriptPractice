const person={
    fname:"Misbah",
    lname:"Uddin",
    fullName:function(){
        return this.fname+" "+this.lname;
    }
};
console.log(person.fullName());