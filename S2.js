function fun() {
  let a = 10;
  return () => {
    console.log(a);
    a = 20;
  }
}

const fun1 = fun(); 

const fun2 = fun(); 

fun1(); //10
fun1();//20
fun2();//10

fun1(); //20
fun2(); //20
fun1(); //20


var arr = [1, 0, 1, 4, 5, '1', '10', 'a', 'b', 'z'];


console.log(arr.sort((a,b)=>b-a))