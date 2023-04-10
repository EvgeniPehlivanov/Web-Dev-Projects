const input = document.getElementById("input")
const profit = document.getElementById("profit")
const cost = document.getElementById("cost")

const posNums = [];
const negNums = [];

input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") addItem();
})


function calculate() {
    posNums.push(parseInt(input.value));

    let result = (posNums.reduce((a, b) => { return a + b; })).toFixed(2);
    if (result >= 0) { 
        profit.innerHTML = '<h4>' + '+' + result + '</h4>';
        cost.innerHTML = '<h4>' + '-' +0.00 + '</h4>'
     }
    else if (result <= 0) {
        cost.innerHTML = '<h4>' + result + '</h4>'
        profit.innerHTML = '<h4>' + '+' +0.00 + '</h4>';
    }
    else if (result === NaN && result === undefined){
        return;
    }
 

    input.value = "";
}

for (let element of posNums) {
    console.log(element);
}