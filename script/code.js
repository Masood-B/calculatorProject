let result = document.querySelector("#screen")

// number
function display(value){
    result.value 
    += value;
}

// remove
document.querySelector("#remove").
addEventListener("click", ()=>{
    let output = result.value;
    result.value = output.slice (0,-1);
})

// clear
document.querySelector("#clear").
addEventListener("click", ()=>{
    let output = result.value;
    result.value = "";
})

// sign
document.querySelectorAll(".operator").forEach( (ops)=>{
    ops.addEventListener("click", (e)=>{
        result.value += e.target.innerText;
        button.disabled = false;
    })
})
// equal
document.querySelector("#addup").
addEventListener("click", ()=>{
    result.value = eval(result.value).toFixed(2);
})

let button = document.querySelector(".dot");

button.addEventListener("click",()=>{
    button.disabled = true;
});