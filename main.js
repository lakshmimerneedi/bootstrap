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

const hidehead = document.querySelector (".heading");
function myFunction(){
  return hidehead.classList.toggle("heading-hide");
}
