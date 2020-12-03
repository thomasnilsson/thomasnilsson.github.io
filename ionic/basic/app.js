const inputReason = document.querySelector("#input-reason")
const inputAmount = document.querySelector("#input-amount")
const btnAdd = document.querySelector("#btn-add")
const btnClear = document.querySelector("#btn-clear")
const listExpenses = document.querySelector("#list-expenses")
const totalExpenses = document.querySelector("#total-expenses")
const alertCtrl = document.querySelector("ion-alert-controller")

let expenses = [];

function clear() {
    inputReason.value = "";
    inputAmount.value = "";
}

function makeAlert(message) {
    const alert = document.createElement('ion-alert');
    alert.header = 'Invalid inputs';
    alert.message = message;
    alert.buttons = ['Okay'];
    document.body.appendChild(alert);
    alert.present();
}

btnClear.addEventListener("click", () => {
    clear();
});

btnAdd.addEventListener("click", () => {
    const reason = inputReason.value;
    const amount = inputAmount.value;

    if (reason == "") {
        makeAlert("Invalid reason")
        return;
    }
    else if (amount == "") {
        makeAlert("Invalid amount")
        return;
    }

    const item = document.createElement("ion-item");
    item.textContent = reason + ": $" + amount;
    listExpenses.appendChild(item);

    expenses.push({ "reason": reason, "amount": amount });

    let amounts = expenses.map(x => +x['amount'])
    let sum = amounts.reduce((a, b) => a + b, 0);

    totalExpenses.textContent = sum;
    clear();
});