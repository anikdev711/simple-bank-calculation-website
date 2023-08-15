
document.getElementById('btn-withdraw').addEventListener('click', function () {

    // withdraw section 

    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);

    withdrawField.value = '';

    if(isNaN(newWithdrawAmount)){
        alert('please provide number');
        return;
    }
    


    // balance total section

    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    // withdrawField.value = '';

    // validation check 

    if (newWithdrawAmount > previousBalanceTotal) {
        alert('Baap er bank e eto taka nai');
        return;
    }

    const withdrawElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

    const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawElement.innerText = currentWithdrawTotal;


    const currentBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotalElement.innerText = currentBalanceTotal;


})