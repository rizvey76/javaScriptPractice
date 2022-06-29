class Product{
    constructor(title){
       this.title=title;
    };

    [Symbol.search](string){
        return string.indexOf(this.title)>=0 ? "Found" : "Not Found";
    };

    
     
}

var laptop=new Product("laptop");


console.log("Hp laptop".search(laptop));