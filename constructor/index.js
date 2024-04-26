/*
class animal{
    constructor(){
        console.log("this is constructor from animal class");
    }
    moves=true;
}

class rabbit extends animal{
    constructor(){
        super();
        console.log("this is constructor from rabbit class");
    }
    eats=true;
}

let classTeacher=new rabbit();
console.log(classTeacher);
*/


// this keyword ( important topic in method and function)

class Person{
    constructor(name){
        this.name=name;
    }

    getName(){
        return this.name;
    }

}

class Employee extends Person{
    constructor(name,id){
        super(name);
        this.id=id
    }

    getId(){ 
        return this.id;
    }
}

// let emp=new Employee("jack","E101");
// console.log("Employee.get.name:",emp.getName());
// console.log("EMployee.get.id:",emp.getId());