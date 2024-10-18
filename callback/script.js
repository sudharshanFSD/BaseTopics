const employees = [
    {id:1,name : "RAM" , age: 27, designation: "Developer"},
    {id:2,name : "SITA" , age: 28, designation: "Tester"},
    {id:3,name : "JACK" , age: 29, designation: "UI/UX"},
    {id:4,name : "RAM" , age: 30, designation: "Devops"},
    {id:5,name : "JOHN" , age: 31, designation: "Developer"},
    {id:6,name : "JACK" , age: 29, designation: "Tester"},
];

console.log(employees.filter((emp)=emp.id!==4 ));


// pending script