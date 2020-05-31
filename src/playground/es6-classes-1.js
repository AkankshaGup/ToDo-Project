class Person{
constructor(name="Anonymous",age=0){
this.name=name
this.age=age
}
getGreeting(){
  return `i am ${this.name}!!!`
}
getDescriptin(){
  return `${this.name} is ${this.age} year old!!!`
}
}
class Students extends Person{
constructor(name,age,major){
super(name,age);
this.major=major
}
hasMajor(){
  return !!this.major;
}
getDescriptin(){
  let discription=super.getDescriptin();
  return discription+"testing";
}
}
class Traveler extends Person{
  constructor(name, age, homelocation){
    super(name, age);
    this.homelocation=homelocation
  }
  haslocatio(){
    return this.homelocation;
  }
  getGreeting(){
    let greeting=super.getGreeting();
    if(this.homelocation){
      return `${greeting}. i am visiting from ${this.homelocation}`
    }else{
      return greeting
    }
    
  }
}

const me=new Traveler("akanksha gupta",23,"computerScience");
console.log(me.getGreeting());
const other=new Traveler();
console.log(other.getGreeting());
