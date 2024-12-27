// 1) let and Const //
if(true ){
    let x=10;
    const y =20;
    console.log(x);
console.log(y);
}


//  2) Arrow Function //
const sum =(a,b)=> {
   console.log(a+b);
}
sum(5,5);


// 3) Temerate literal  //
 let name = "Mehboob";
 console.log(`hello ${name}`);
 

//  4) Destructuring //
let [a,b] = [5,3];
console.log(b);
let {userName, id} = {userName:"Mehboob", id:134};
console.log(userName);


//  5) Default Parameter //
 function Default(a, b=4){
    console.log(a+b); 
 }
 Default(3);


//  6) Classes //
  class person{
    constructor(name){
        this.name = name;
    }
    greet(){
        console.log(`hello ${this.name}`);
    }
  }
  let newPerson = new person("Musharaf");
  newPerson.greet();


// 7)  Promise //
let promsie = new Promise((resolve,reject)=>{
  setTimeout(()=>{
    reject("this is error and request is reject")
  },2000)
})
.then((res)=>{
    console.log(res);
})
.catch((rej)=>{
    console.log(rej);  
})


// 8) Enhnace object literal  //
let fullName = "Anuj";
let  objectData = {
    fullName,
    id:166,
    greet(){
        console.log(`this is ${fullName} and id is ${id}`);   
    }
}
objectData.greet();


// 9)  rest and sperad operator  //

let arr = [1,2,3,4];
let arr2 = [0, ...arr];
console.log(arr2);

function restoperator(...args){
   return args.reduce((a,b)=> a+b);
}
console.log(restoperator(1,2,3,4));

