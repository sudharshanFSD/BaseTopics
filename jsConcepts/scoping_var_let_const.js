// function to test var
function testVar(){
    var x = 52;
    if(true){
        var x=65;
        document.getElementById("output").innerText="Inside if-block: " + x;
    }
    document.getElementById("output").innerText+=" | Outside if-block: " + x;
}

//function to test let
function testLet(){
    let y = 32;
    if(true){
    let y=75;
        document.getElementById("output").innerText="Inside if-block: "+y;
    }
    document.getElementById("output").innerText+=" | Outside if-block: "+y;
}

// function ton test Const
function testConst(){
    const z=333;
    try{
        const z=555;
        document.getElementById("output").innerText="Const Z: " + z;
    }
    catch(error){
        document.getElementById("output").innertext+=" | Error" + error;
    }
}