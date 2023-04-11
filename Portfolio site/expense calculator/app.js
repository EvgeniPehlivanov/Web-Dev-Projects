const input = document.querySelector("#input")
const profit = document.querySelector("#profit")
const cost = document.querySelector("#cost")

const posNums = [];

input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") addItem();
})


function calculate() {
    posNums.push(parseInt(input.value));

    let result = (posNums.reduce((a, b) => { return a + b; })).toFixed(2);
    if (result >= 0) {
        profit.innerHTML = '<h4>' + '+' + result + '</h4>';
        cost.innerHTML = '<h4>' + '-' + 0.00.toFixed(2); + '</h4>'
    }
    else if (result <= 0) {
        cost.innerHTML = '<h4>' + result + '</h4>'
        profit.innerHTML = '<h4>' + '+' + 0.00.toFixed(2); + '</h4>';
    }
    else if (isNaN(result ) || result === undefined) {
        let nanIndex = posNums.indexOf(NaN)
        posNums.splice(nanIndex, 1)
        return;
    }


    input.value = "";
}
