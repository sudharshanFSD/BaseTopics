/*
// arr destruction with rest operator
const numbersNew=[1,2,3,4,5];
const[first,second,...others]=numbersNew;
console.log(first,second,others);

//arr destruction with spread operator
const arr1=[1,2,3];
const arr2=[4,5,6];
console.log(...arr2);

// obj destruction
const person1={
    name:"jack",
    age:20,
};

const {name:yourName,age:yourAge}=person1;
console.log(yourName,yourAge);

//obj destruction 2
const person={
    isName:"amirtha",
    isAge:20,
};

const{isName,isAge}=person;
console.log(isName);



const employees=[
    {
        name:"employee1",
        age:22,
        department:"sales",
        email:"employee1@gmail.com"
    },
    {
        name:"employee2",
        age:32,
        department:"marketing",
        email:"employee2@gmail.com"
    },
    {
        name:"employee3",
        age:30,
        department:"development",
        email:"employee3@gmail.com"
    },
    {
        name:"employee4",
        age:21,
        department:"sales",
        email:"employee4@gmail.com"
    },
];
function createEmployeeReports(employees){
    const reports=[];
    for(let i=0;i<employees.length;i++){
        const{name,department,email}=employees[i];
        const val="Name: " + name +", Department: " + department + ", Email: " + email;
        reports.push(val);
    }
    return reports;
};
console.log(createEmployeeReports(employees));

*/
