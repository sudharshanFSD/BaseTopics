// const timer=setInterval(()=>{
//     console.log("Hello from setInterval!!!");
// },1000);

// setTimeout(()=>{
//     console.log("Timeout!!!");
//     clearInterval(timer);
// },5000);



const functionOne=()=>{
    console.log("Hey,this is FUNCTION ONE!!!");

    functionTwo();
    console.log("Hey,this is FUNCTION ONE PART 2!!!")
};

const functionTwo=()=>{
    setTimeout(()=>{
    console.log("Hey,this is FUNCTION TWO!!!")
},1000)
};

functionOne();