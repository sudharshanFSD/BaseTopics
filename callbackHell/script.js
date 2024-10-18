const getStates = (callback)=>{
    setTimeout(()=>{
        let state="Tamil Nadu";
        console.log(state);
        callback();
    },1000);
};

const getCities=(callback)=>{
    setTimeout(()=>{
        let city = "salem";
        console.log(city);
        callback();
    },1000);
};

const done = ()=>{
    console.log("DONE!");
};

const getAddress =()=>{
    getStates(()=>{
        getCities(()=>{
            done();
        });
    });
};

getAddress();