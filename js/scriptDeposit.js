const copyDeposit = document.getElementById('copyDeposit');
const depositAdress = document.getElementById('depositAddress');

copyDeposit.addEventListener("click", copyDepositAddress);

function copyDepositAddress() {
	depositAddress.select();

	document.execCommand("copy");

	alert("Deposit Address copied to clipboard")
}

document.addEventListener("DOMContentLoaded", function() {
	const depositId = window.location.hash.substring(1);
	const depositContainer = document.getElementById("depositId");

	if (depositContainer) {
		const depositAddressInput = depositContainer.querySelector("input");

		rotateDepositAddress(depositAddressInput);
	}
});

function rotateDepositAddress(inputElement) {
	const currentaddress = inputElement.value;
	const nextConatiner = container.nextElementSibling || container.parentElement.firstElementChild;
	const nextInput = nextConatiner.querySelector("input");
	const nextAddress = nextInput.value;
	nextInput.value = currentaddress;
}