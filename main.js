// password..............................................
const icon = document.querySelector(".icon");
 const password = document.querySelector(".password");
icon.addEventListener("click", function passwordclick(){
     icon.classList.toggle("fa-eye");
    icon.classList.toggle("fa-eye-slash");
   password.type = password.type === "password" ? "text" : "password"
 }
)

// const x = 40;
// const y = "50";
// console.log(x+y);

// const x ="40";
// const y =50;
// console.log(x-y);

// const x ="web";
// const y =50;
// console.log(x-y);

// const x = "4";
// const y = "5";
// console.log(x==y);

// const x = "4";
// const y = 4;
// console.log(x===y);

// const x="";
// console.log(typeof(x));

// const obj = { name : "lakshmi", age : 19, education : "degree"};
// console.log(obj);
// console.log(obj.age);
// const obj = { name : "lakshmi", age : 19, education : "degree"};

// const array = ["web","development","digital","marketing"];
// console.log(array);

// function dharani(x,y){
//  return console.log(x+y);
// };
// dharani(2,4);


//  const x = 5;
//  const y = 6;
// function myfunction(){
//     return console.log(x+y);
// };
// myfunction();

//  function webdevelopment(){
//      const x = 4;
//  }
//  console.log(x);
// webdevelopment();

// function myfunction(x,y){
//    return console.log((x<y)?"true":"false");
//  }
//  myfunction(5,4);

// const clickBtn = document.querySelector (".button");
// const hidehead = document.querySelector (".heading");
// clickBtn.addEventListener("click", function myFunction(){
//     return hidehead.classList.toggle("heading-hide");
// });

// const hidehead = document.querySelector (".heading");
// function myFunction(){
//   return hidehead.classList.toggle("heading-hide");
// }
  
// escape character
// console.log("are you\"mad\"");

// const string="crazy girl";
// console.log(string.length); 

//  const string="aswini, dharanichalla, anjali,";
// const text =string.slice(4,11);
// console.log(text);
// const text = string.substring(5,12);
// console.log(text);

// arrays................
// const array = ["maths", "physics", "cs", "statistics", "sanskrit", "english"];


// const array1 = array[5];
// console.log(array1);
// array[2] = "web development";
// console.log(array);
// const array1 = array.length;
// console.log(array1);
// const array2 = array.push("graphics");
// console.log(array);
// const array2 = array.push("graphics");
// // console.log(array2);
// const array2 = array.pop();
// console.log(array);
//  const array2 = array.unshift("digital");
// console.log(array);
//  const array2 = array.unshift("digital");
//  console.log(array2);
//  const array2 = array.shift();
// console.log(array);
//   const array2 = array.sort();
//  console.log(array2);
  // const array2 = array.splice(3,2,"lakshmi","aswini");
  //  console.log(array2);
  // const array2 = array.splice(3,2,"lakshmi","aswini");
  //  console.log(array);
//    const array2 = array.slice(2,4);
//  console.log(array2);
//    const array2 = array.slice(2,3);
//  console.log(array);

// console.log(array[array.length-2]);
// console.log(array.length-2);

// const array = [75837687946898,8957873958386,93850736773636,9786976389,908746976896,9864964064]
//  console.log(Math.max.apply(null, array));
//  console.log(Math.min.apply(null, array)); 


const studata = [{id:1, name: "lakshmi", age:19, group: "bsc"},
                 {id:2, name: "anjali", age:20, group: "bsc"},
                {id: 3, name: "dharani", age:20, group: "bsc"}];

                // map dataa................

     const mapdata = studata.map(function myFunction(data){
      return data.age*3;
     });
     console.log(studata);           


// filter.............
const filterdata = studata.filter(function myFunction(data){
   return data.age<20;
 });
 console.log(filterdata);

//  find......
const find = studata.find(function myFunction(data){
  return data.age<20;
});
console.log(find);
// foreach...............
studata.forEach(function myFunction(data){
  console.log(data.group);
});
// reduce.............
const reducedata = studata.reduce(function myFunction( sai,data){
  return data.age+sai;
},0);
console.log(reducedata);
