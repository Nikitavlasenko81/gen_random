function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

let form = document.forms[0];

document.querySelector(".btn").addEventListener('click',()=>{
    let min = +form.elements.firstNum.value;
    let max = +form.elements.secondNum.value;
    let res = getRndInteger(min, max);
    document.querySelector('.random-number').innerHTML = res
    document.querySelector(`.info`).innerHTML = `Сгенерировано случайгле число от ${min} до ${max} в ${new Date()}`
})