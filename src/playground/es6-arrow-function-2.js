const add=(a,b)=>{
  //console.log(arguments);
  return a+b;
}

//console.log(add(6,3,"hsdkhk",87));

const user={
  name:"andrew gupta",
  city:["philadelfia","new york","dablin"],
  printPlacesLived(){
   const citymassage= this.city.map((city)=>{
     // console.log(this.name + "lived in "+ city);
      return (this.name + "lived in "+ city);
    });
    return citymassage;

  }
}
console.log(user.printPlacesLived());

const multiplier={
  numbers:[8,3,12,4,9],
  multiplyBy:2,
  multiply(){
    return this.numbers.map((val)=> val * this.multiplyBy )
  }
}
console.log(multiplier.multiply());


