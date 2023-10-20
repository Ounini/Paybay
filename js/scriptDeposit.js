

const containers = document.querySelectorAll('.container');
containers.forEach((container, index) => {
	if (index === 0) {
		container.style.display = 'block';
	} else {
		container.style.display = 'none';
	}
});

//  function to toggle container visibility on page load or refresh
window.addEventListener('load', () => {
	const currentContainerIndex = Math.floor(Math.random() * containers.length);

	containers.forEach((container, index) => {
		if (index === currentContainerIndex) {

			container.style.display = 'block';
		} else {

			container.style.display = 'none';
		}
	});
});



document.getElementById("copyDeposit1").addEventListener("click", function() {
	var depositAddress = document.getElementById("depositAddress1");

	navigator.clipboard.writeText(depositAddress.value).then(function() {
		alert("Deposit Address coplied to clipboard: " + depositAddress.value);
	})

	.catch(function(error) {
		console.error("Falied to copy deposit Address:", error);
	});
});

document.getElementById("copyDeposit2").addEventListener("click", function() {
	var depositAddress = document.getElementById("depositAddress2");

	navigator.clipboard.writeText(depositAddress.value).then(function() {
		alert("Deposit Address coplied to clipboard: " + depositAddress.value);
	})

	.catch(function(error) {
		console.error("Falied to copy deposit Address:", error);
	});
});

document.getElementById("copyDeposit3").addEventListener("click", function() {
	var depositAddress = document.getElementById("depositAddress3");

	navigator.clipboard.writeText(depositAddress.value).then(function() {
		alert("Deposit Address coplied to clipboard: " + depositAddress.value);
	})

	.catch(function(error) {
		console.error("Falied to copy deposit Address:", error);
	});
});

document.getElementById("copyDeposit4").addEventListener("click", function() {
	var depositAddress = document.getElementById("depositAddress4");

	navigator.clipboard.writeText(depositAddress.value).then(function() {
		alert("Deposit Address coplied to clipboard: " + depositAddress.value);
	})

	.catch(function(error) {
		console.error("Falied to copy deposit Address:", error);
	});
});

document.getElementById("copyDeposit5").addEventListener("click", function() {
	var depositAddress = document.getElementById("depositAddress5");

	navigator.clipboard.writeText(depositAddress.value).then(function() {
		alert("Deposit Address coplied to clipboard: " + depositAddress.value);
	})

	.catch(function(error) {
		console.error("Falied to copy deposit Address:", error);
	});
});