let bill = document.querySelector('.calculator__input-bill').value;
let numOfPeople = document.querySelector('.calculator__num-people-input').value;
const buttonPercent = document.querySelectorAll('.calculator__input-tip-btn');
const tipAmount = document.querySelector('.calculator__result-amount');
const total = document.querySelector('.calculator__result-total');
const reset = document.querySelector('.calculator__button-reset');

buttonPercent.forEach((el) => el.addEventListener('click', (e) => {
    const tipPercent = e.target.value;
    console.log(bill, numOfPeople, tipPercent);

    tipAmount.innerText = '$' + ((+bill * (+(tipPercent.slice(0, -1)) / 100)) / +numOfPeople) ;
    total.innerText = '$' + ((+bill + (+bill * (+(tipPercent.slice(0, -1)) / 100))) / +numOfPeople);

}));

reset.addEventListener('click', (e) => {
    tipAmount.innerText = "$0.00";
    total.innerText = "$0.00";
    bill = "";
    numOfPeople = "";
    
})





