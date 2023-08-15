
document.getElementById('btn-deposite').addEventListener('click', function(){

    // deposite section 

    const depostieField = document.getElementById('depostie-field');
    const newDepositeAmountString = depostieField.value;
    const newDepositeAmount = parseFloat(newDepositeAmountString)
    
    const depositeElement = document.getElementById('deposite-total');
    const previousDepositeTotalString = depositeElement.innerText;
    const previousDepositeTotal = parseFloat(previousDepositeTotalString);

    const currentDepositeTotal = previousDepositeTotal + newDepositeAmount;
    
    depositeElement.innerText = currentDepositeTotal;

    // balance section 

    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    const currentBalanceTotal = previousBalanceTotal + newDepositeAmount;
    balanceTotalElement.innerText = currentBalanceTotal;

    depostieField.value = '';
})