//conditions - control structures
//conditions -> true or false// 5<5 -false; 100>22 - true
//determine if an age is an adult or a minor
let age = 12;
if(age>17)
{
    console.log("You're an adult");
}
else{
    console.log("You're a minor");
}
let pword="abcdefg";
let inputpword="abcdefg";
if(pword==inputpword)
{
    console.log("Congratulations password you entered is correct");
}
else
{
    console.log("Sorry the password you entered is incorrect");
}
// grades 8 and above passed.5-7 retake, 4 below that is fail
let grade=10;
if(grade>=8)
{
    console.log("You passed!");
}
else if(grade>=5)
{
    console.log("You need to retake!");
}
else{
    console.log("You failed!");
}
// you want to check if a number is either odd or even and is already greater than 100
let numb=333;
console.log(numb%17);
if(numb%2==0 && numb>100)
{
    console.log("The number is even and is greater than 100");
}
else if(numb%2==0 && numb<=100)
{
    console.log("The number is even and is less or equal to 100");
}
else if(numb%2!=0 && numb>=100)
{
    console.log("The number is odd and is greater than 100");
}
else if(numb%2!=0 && numb<=100)
{
    console.log("The number is odd and is less or equal to 100");
}
//loops ->condition structure but continiously executes a task given the condition is true
//display all number from 1-50;
let start=1;
while(start<=50){
    if(start%2==0)
    {
        console.log(start+"-even");
    }
    else{
        console.log(start+"-odd");
    }
    start++;
}
//for
for(let i=50;i>0;i--)
{
    console.log(i);
}
//data structures [Arrays]
//Arrays are variables which is capable of holding multiple values.
let numbers1 = [33,44,"Karlo",100,92,"Flores",100,true,432];
//indexes-> seat number
for(let i=0;i<numbers1.length;i++)
{
    console.log(numbers1[i]);
}
//Objects 
let students ={
    student_number:"2023-0056",
    namex:"Ricardo Ricafort",
    gender:"Male",
    byear:2000,
    friends: ["mary","jeff","peter"],
    yearlvl:2,
    greet:function (){
        return "HELLO!";
    }
}
console.log(students.friends[1]);