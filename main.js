const monthlyPaymentField = document.getElementById("monthly-payment");

const calculateMortgagePayment = function () {
	const principal = Number(document.getElementById("principal").value);
	const monthlyRate = Number(document.getElementById("yearly-rate").value) / 1200;
	const loanTermInMonths = Number(document.getElementById("loan-term").value);
	const monthlyMortgagePayment = (principal * monthlyRate) / (1 - (1 + monthlyRate) ** (-loanTermInMonths));

	if (monthlyMortgagePayment.toFixed(2) == 0.00) {
		monthlyPaymentField.innerHTML = "Your Monthly Payment is less than a penny. WOW!";

	} else {
		monthlyPaymentField.innerHTML = "Your Monthly Payment is: $" + monthlyMortgagePayment.toFixed(2);
	}
}

document.getElementById("reset").addEventListener("click", () => {
	monthlyPaymentField.innerHTML = "";
});