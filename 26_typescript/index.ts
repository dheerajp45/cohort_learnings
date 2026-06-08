// let x: number = 1;

// console.log(x)

// function greet(name:String){
//     console.log("hello -> "+name);
// }

// greet("dheeraj")

// function sum(a:number , b:number): number{
//     return a+b
// }
// console.log(sum(1,2));

// function delayedCall(fn:()=> void){
//     setTimeout(fn,1000)
// }

// delayedCall(function(){
//     console.log("hello");
    
// })




function greet(user:{
    name:string,
    age:number
}){
    console.log("hello "+user.name);
}
let user = {
        name:"dheeraj",
    age:19
}
greet(user)

interface eventRegister {
    eventName: string,
    eventCapacity: number,
    eventMode :string
}
function register(event:eventRegister){
    console.log(`congratulation you have registered for the ${event.eventName}
        event mode is ${event.eventMode}
        with the capacity of ${event.eventCapacity}`)
}

let event1 : eventRegister = {
    eventName:"react workshiop",
    eventMode:"online",
    eventCapacity:45
}

register(event1)


