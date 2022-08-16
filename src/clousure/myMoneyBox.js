/*
function moneyBox(coins) {
    let saveCoins = 0;
    saveCoins += coins;

    console.log(`MoneyBox: $${saveCoins}`);
}
*/

function moneyBox(){
    let saveCoins = 0;
    function countCoins(coins){
        saveCoins += coins;
        console.log(`MoneyBox: $${saveCoins}`);
    }

    return countCoins;
}

const myMoneyBox = moneyBox();
myMoneyBox(5);
myMoneyBox(10);

const moneyBoxAna = moneyBox;
moneyBoxAna(5);
