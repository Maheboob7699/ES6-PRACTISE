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


// 10) map,set and weakMap ,wekSet //
let map  = new Map();
map.set('key',134);
console.log(map.get('key'));

// 11) For of loop //
let fruitsArray = ["apple", "Banana", "grapes", "orange"];
for( let data of fruitsArray){
  console.log(data);
}

// 12) array find , findex ,includes //
let numberArray = [1,2,3,4,5,6];
let foundEven = numberArray.find(x=> x > 2);
let foundEvenIndex = numberArray.findIndex(x=> x > 2);
let arrayIncludes =  numberArray.includes(5);
console.log(foundEven);
console.log(foundEvenIndex);
console.log(arrayIncludes);


// 13) Array entries, key and vlaues //
let arrayKey = ['a' , 'b' , 'c' , 'd'];
let arrayEntries = arrayKey.entries();
for (let [index , value] of arrayEntries){
    console.log(index,value);
}


// array.from , array.of //
let arrayData = "mehboob murdi";
let arrayNumber = 8291747699; 
let arrayFrom  = Array.from(arrayData);
console.log(arrayFrom);
let arrayFromNumber = Array.from(String(arrayNumber));
console.log(arrayFromNumber);


// async await //
 let asyncData = async ()=>{
    let data = await fetch('https://fakestoreapi.com/products');
    let response = await data.json();
    console.log(response);
 }
 asyncData();


//  asyncronation iteration //
 
let asyncArray  = ["mehboob", "musharaf" , "anuj", "arjun"];
let asyncArryData= async(nameData)=>{
   for await( let data of nameData){
    console.log(data);
   }
}
asyncArryData(asyncArray);


