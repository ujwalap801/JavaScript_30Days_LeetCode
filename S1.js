// let arr =[1, 2,3,4];

// let newArr = arr.map((e)=>e*2);
// console.log(newArr);

// let newArr1 =arr.filter((e)=>e%2===0)
// console.log(newArr1);

// let newArr2= arr.reduce((acc,curr)=>
// {

//  let max = 0;
//  if(acc<curr)
//  {
//     max =curr;
//  }

//  return max
  
// },0);

// console.log(newArr2)

// "use strict"
// function x()
// {
//     console.log(this);
// }

// x();
// this.x();

// const obj1 ={
//     name:"ujwala",
//     printName: function()
//     {
//         console.log(this.name);
//     }
// }


// obj1.printName();

// const obj2 ={
//     name:"deepika"
// }

// obj1.printName.call(obj2);


// const fullName={
//     firstName :"Ujwala",
//     lastName:"Peddaboina"
// }


// let printFullName= function(hometown,Nation)
// {
//     console.log(this.firstName +this.lastName +"form "+hometown +"from "+Nation);
// }

// printFullName.call(fullName, "Hyderabad", "India");
// printFullName.call(fullName, ["Hyderabad", "India"]);

// let printMYFullName = printFullName.bind(fullName, "Hyderbad", "India");
// console.log(printMYFullName);
// printMYFullName();


function x()
{
    let a =10;
    function y()
    {
        console.log(a);
    }
    return y;
}


let z = x();
z();
// console.log(z());