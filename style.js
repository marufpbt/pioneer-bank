//login button event handler
document.getElementById("login").addEventListener("click", function () {
	const loginArea = document.getElementById("login-area");
	loginArea.style.display = "none";
	document.getElementById("transaction-area").style.display = "block";
})
//deoposit button event handler
document.getElementById("addDeposit").addEventListener("click", function () {
	const depositAmount = document.getElementById("depositAmount").value;
	const depositNumber = parseFloat(depositAmount);

	// const currentDeposit = document.getElementById("currentDeposit").innerText;
	// const currentDepositNumber = parseFloat(currentDeposit);
	// const totalDeposit = depositNumber + currentDepositNumber;
	// document.getElementById("currentDeposit").innerText = totalDeposit;
	updateSpanText("currentDeposit", depositNumber);
	updateSpanText("currentBalance", depositNumber);

	document.getElementById("depositAmount").value = "";

})
//withdraw button event handler
document.getElementById("addWithdraw").addEventListener("click", function () {
	const withdrawAmount = document.getElementById("withdrawAmount").value;
	const withdrawNumber = parseFloat(withdrawAmount);

	const currentWithdraw = document.getElementById("currentWithdraw").innerText;
	const currentWithdrawNumber = parseFloat(currentWithdraw);
	document.getElementById("currentWithdraw").innerText = withdrawNumber + currentWithdrawNumber;

	const currentBalance = document.getElementById("currentBalance").innerText;
	const currentNumber = parseFloat(currentBalance);
	const totalWithdraw = currentNumber - withdrawNumber;
	document.getElementById("currentBalance").innerText = totalWithdraw;

	document.getElementById("withdrawAmount").value = "";
})


function updateSpanText(id, depositNumber) {
	const current = document.getElementById(id).innerText;
	const currentNumber = parseFloat(current);
	const totalAmount = depositNumber + currentNumber;
	document.getElementById(id).innerText = totalAmount;
}
