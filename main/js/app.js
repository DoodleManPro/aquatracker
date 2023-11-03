const fam = document.getElementById('fam');
const bath = document.getElementById('bath');
const wm = document.getElementById('wm');
const dw = document.getElementById('dw');
const hose = document.getElementById('hose');
const budget = document.getElementById('budget');
const btn = document.getElementById('calculate');
const result = document.getElementById('result');
const resBudget = document.getElementById('resBudget');
const reduce = document.getElementById('reduce');


function getVal() {

    console.log(fam.value, bath.value, 
        wm.value, dw.value,
        hose.value, budget.value)

    var ans1 = (3 * fam.value) + (50 * bath.value) + (60 * wm.value) + (20 * dw.value) + (500 * hose.value)

    console.log(ans1)
    result.innerHTML = ans1
    resBudget.innerHTML = budget.value

    var ans2 = 0.04 * ans1  //17.28 AED (The how much u are going to pay)
    var ans3 = budget.value / 0.04 //375 L (How much I will get in my budget)

    var final = ans1 - ans3
    reduce.innerHTML = final
}

btn.addEventListener('click', getVal);

