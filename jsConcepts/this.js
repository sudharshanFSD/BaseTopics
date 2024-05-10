document.getElementById("traditionalBtn").addEventListener("click",function(){
    //this refers to the button element
    document.getElementById("traditionalOutput").innerText="This is Traditional Function: " + this.textContent;
});

//this refers to the window because of lexical scoping , which is the global scope
document.getElementById("arrowBtn").addEventListener("click",()=>{
    document.getElementById("thisArrowOutput").innerText="This is Arrow Function: " + this.textContent;
});