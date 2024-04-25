class Person{
    constructor(name,age,country){
        this.name=name;
        this.age=age;
        this.country=country;
    }
    displayDetails(){
        console.log("name: ",this.name);
        console.log("age: ",this.age);
        console.log("country: ",this.country);
    }
}

const person1= new Person('jack',20,'india');
const person2=new Person('micheal',21,'UK');
console.log("person1 Details:");
person1.displayDetails();
console.log('\nPerson-2 Details:');
person2.displayDetails();
//the above written is all about class and constructer , class ah direct ah call pani details eduka mudiyadhu so we need a class teacher whom we would seek permission, thats the concept here.



class UberPriceCalculator {
    static BASE_FARE = 2.0;
    static PER_MILE_RATE = 1.5;
    static PER_MINUTE_RATE = 0.5;
    constructor(distance, duration) { 
    this.distance = distance;
    this.duration = duration;
    }
    
    calculateFare() {
    const distanceFare = this.distance * UberPriceCalculator.PER_MILE_RATE;
    const timeFare = this.duration * UberPriceCalculator.PER_MINUTE_RATE;
    const totalFare = UberPriceCalculator.BASE_FARE + distanceFare + timeFare;
    return totalFare;
    }
    
    getDistance() {
    return this.distance;
    }
    
    setDistance(distance) {
    this.distance = distance;

    }
    
    getDuration() {
    
    return this.duration;
    
    }
    
    setDuration(duration) {
    
    this.duration = duration;
    
    }
    
    toString() {
    
    return `UberPriceCalculator[distance=${this.distance.toFixed(2)} miles, duration=${this.duration} minutes]`;
    
    }
    
    }
    
    const calculator = new UberPriceCalculator(5.5, 15);
    
    console.log(calculator.toString());
    
    const fare = calculator.calculateFare();
    
    console.log(`Total Fare: $${fare.toFixed(2)}`);