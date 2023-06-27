function calculateLoan() {
  loanAmountValue = document.getElementById("loan-amount").value;

  interestRateValue = document.getElementById("interest-rate").value;

  monthsToPayeValue = document.getElementById("months-to-pay").value;

  interest = (loanAmountValue * (interestRateValue * 0.01)) / monthsToPayeValue;

  monthlyPayment = (loanAmountValue / monthsToPayeValue + interest).toFixed(2);

  document.getElementById("payment").innerHTML = `Monthly Payment : ${monthlyPayment}`;
}