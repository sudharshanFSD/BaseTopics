// let promiseObj = new Promise((resolve,reject)=>{
//     //producer cde
//     console.log("Getting the name from DatBase.");
//     setTimeout(()=>{
//         resolve("Jack");
//         reject("No Data!!!");
//     },2000);
// });

// //Consumer code
// promiseObj.then(
//     (val)=>{
//         console.log("name recived from DataBase = " + val);
//     },
//     (err)=>{
//         console.log("Error occured = " + err + " ");
//     }
// );



function checkPositive(number){
    return new Promise((resolve,reject)=>{
        if (number>0){
            resolve("the number is positive");
        }
        else{
            reject("the number is negative");
        }
    });
}

checkPositive(50).then((val)=>{
    console.log(val);
})
.catch((err)=>{
    console.log(err);
});

checkPositive(-50).then(
    (val)=>{
        console.log(val)
    },
    (err)=>{
        console.log(err);
    }
);