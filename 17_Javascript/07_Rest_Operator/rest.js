// function sum(){
//     console.log(arguments);   
// }
// sum(10,20,30.5);

// function sum(){
//     console.log(arguments);
//     let sum=0;
//     for(let i in arguments)
//         sum+=arguments[i];
//     console.log(sum);
    
// }
// sum(10,20,30.5);

// function sum(name,...args){
//     console.log(`Hello ${name}`);
//     let sum=0;
//     for(let i in args)
//         sum+=args[i];
//     console.log("sum is: "+sum);
    
// }
// sum("pravin",10,20,30.5);
// sum("kunal",20,60);

function myfun(name,course,...marks){
    console.log(`Hello ${name} your qualification is:${course} and marks are:`);
    for(let i in marks)
        console.log(marks[i]); 
}
myfun("pravin","B.E",10,20,30.5);
myfun("kunal","M.S",20,60);