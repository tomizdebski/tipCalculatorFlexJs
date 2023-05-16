let bill = document.querySelector(".calculator__input-bill").value;
let numOfPeople = document.querySelector(
  ".calculator__num-people-input"
).value;
const buttonPercent = document.querySelectorAll(".calculator__input-tip-btn");
const tipAmount = document.querySelector(".calculator__result-amount");
const total = document.querySelector(".calculator__result-total");
const reset = document.querySelector(".calculator__button-reset");

buttonPercent.forEach((el) =>
  el.addEventListener("click", (e) => {
    let tipPercent = e.target.value;
    console.log(bill, numOfPeople, tipPercent);

    bill = document.querySelector(".calculator__input-bill").value;
    numOfPeople = document.querySelector(".calculator__num-people-input").value;
    if( !isNaN(+tipPercent)) tipPercent+= "%";

    tipAmount.innerText =
      "$" + (+bill * (+tipPercent.slice(0, -1) / 100)) / +numOfPeople;
    total.innerText =
      "$" + (+bill + +bill * (+tipPercent.slice(0, -1) / 100)) / +numOfPeople;
  })
);

reset.addEventListener("click", (e) => {
  tipAmount.innerText = "$0.00";
  total.innerText = "$0.00";

  document.querySelector(".calculator__input-bill").value = "";
  document.querySelector(".calculator__num-people-input").value = "";
  document.querySelector(".itb").value = "";

});
