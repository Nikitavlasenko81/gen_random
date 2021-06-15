function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}
const displayRandomNumber = ()=>{
    let form = document.forms[0];
    const info = document.querySelector(`.info`)
    const randomNumber = document.querySelector('.random-number')
    const quantity = form.elements.quantity

    document.querySelector(".btn").addEventListener('click',()=>{
        randomNumber.innerHTML = ``
        let min = +form.elements.firstNum.value;
        let max = +form.elements.secondNum.value;
        for(let i = 0; i < quantity.value; i++){
            randomNumber.innerHTML += ` ${getRndInteger(min, max)}`
        }
        info.innerHTML = `Сгенерировано случайгле число(а) от ${min} до ${max} в ${new Date()}`
    })
}
displayRandomNumber()