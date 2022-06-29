const language={
    name:"JavaScript",
    creator:"Brendan Eich",
    library:{
          react:{
            company:"Facebook",
          }
    }
};

let company=language?.library?.react?.company;

console.log(company);