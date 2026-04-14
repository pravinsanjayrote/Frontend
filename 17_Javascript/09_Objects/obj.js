var student={
    fname:"Pravin",
    lname:"Rote",
    email:"pravin@gmail.com",
    city:"Pune",
    skills:["Java","Php","Html","React"],
    fee:function(){
        console.log("This is the function from student objects...");
        
    },
    address:{
        city:"Mumbai",
        country:"India",
        pin:232453
    }
}

console.log(student);
console.log(student.fname);
console.log(student.lname);
console.log(student.email);
console.log(student.skills);
console.log(student.skills[0]);
student.fee();
console.log(student.address.city);



