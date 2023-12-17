function ATM (){
    let amount = parseInt(prompt ("Please еnter the amount you want to withdraw "));
    let parsedAmount = parseFloat (amount)
    let balance = 5000;
    console.log("==== WITHDRAWAL ====")
    if(parsedAmount <= balance){
        balance = balance - parsedAmount
        console.log ("You withdrawn", + parsedAmount, " dollars.");
        alert("You withdrawn " +parsedAmount, "dollars");
        console.log("==== BALANCE ====")
        console.log ("Your balance now is ", + balance, "dollars.");
        alert("Your balance now is " + balance, "dollars");
    }
    else {
        console.log ("You currently do not have this amount of funds.")
    }
}


ATM ()