// var form = document.querySelector('form');
// form.addEventListener('click'. function changeForm() {
// 	if(form.classList.contains('display#updateProfile1')) {
// 		form.classList.remove('display#updateProfile1');
// 		form.classList.add('display#updatePassword1');
// 	} else if (form.classList.contains('display#updatePassword1')) {

// 	}
// });

// var link = document.querySelector('a');
// link.addEventListener('click', function () {
// 	// body...
// });

// var activeLink = document.querySelector('#updateProfile1 a');
// activeLink.addEventListener('click', function () {
// 	var currentForm = document.querySelector('.form');
// 	if (currentForm.classList.contians('display#updateProfile1')) {
// 		activeLink.setAttribute('href',
// 			currentForm.classList.get('.form1'));
// 	} else {
// 		activeLink.setAttribute('href', '#updatePassword1');
// 	}
// });

// window.addEventListener('load', function () {
// 	var ul = document.querySelector('ul.tabGroup');
// 	ul.addEventListener('click', function (event) {
// 		var href = event.target.herf;
// 		var currentForm = document.querySelector('.form');

// 		if (herf.match(/^\/.form\d+$/)) {
// 			currentForm.classList.toggle('display-form-' + href.substring(1));
// 		} else {
// 			currentForm.classList.toggle('display-Default');
// 		}
// 	});
// });

// var ul = document.querySelector('ul.tabGroup');
// ul.addEventListener('click', function (event) {
// 	var target = event.target;
// 	var active = target.classList.contains('active');
// 	var href = target.href;
// 	if (active) {
// 		var updateLink = document.querySelector('li.updatePassword');
// 		updateLink.href = href;
// 		updateLink.classList.toggle('active');
// 	} else {
// 		var updateLink = document.querySelector('li.updateProfile');
// 		updateLink.classList.toggle('active');
// 	}
// });

// var clickedLink = $(event.target);
// var ulRef = $(clickedLink).closest('.tabGroup');
// function updateDisplay(event) {
// 	var clickedLink = $(event.target);
// 	var ulRef = $(clickedLink).closest('.tabGroup');
// 	var activeLink = $(ulRef).find('active');
// 	if (activeLink) {
// 		updateLink.attr('href', activeLink.attr('href'));
// 		activeLink.classList.remove('active');
// 		updateLink.classList.toggle('active');
// 	}
// }	
// console.log('clickedLink:', clickedLink);
// console.log('ulRef:', ulRef);
// console.log('activeLink:', activeLink);
// function updateDisplay(event) {
// 	var clickedLink = null;
// 	var ulRef = null;
// 	var activeLink = null;
// 	clickedLink = $(event.target);
// 	// ulRef = $(clickedLink).closest('.tabGroup');
// 	activeLink = $(ulRef).find('active');
// }
// function updateDisplay(event) {
// 	var clickedLink = null;
// 	activeLink = $(event.target).closest('.tabGroup').find('active');
// 	if (activeLink) {
// 		clickedLink.attr('href', activeLink.attr('href'));
// 		activeLink.classList.remove('active');
// 		clickedLink.classList.toggle('active');
// 	}
// }
// 	console.log('clickedLink:', clickedLink);
// function updateDisplay(event) {
//   var clickedLink = null;
//   var activeLink = $(event.target).closest('.tabGroup').find('.active');
//   if (activeLink) {
//     clickedLink = $(event.target).closest('.tabGroup').find('a');
//     clickedLink.attr('href', activeLink.attr('href'));
//     activeLink.removeClass('active');
//     clickedLink.addClass('active');
//   }
//   // console.log('clickedLink:', clickedLink);
// }
// function showForm(formId) {
// 	document.getElementById('#updateProfile1').style.display = 'block';
// 	var forms = document.getElementByTagName('form');
// 	for (var i = 0; i < forms.length; i++) {
// 		if (forms{i}.id !==form) {}
// 	}
// }


      // for link copy not referrals link //
// const copyButton = document.querySelector("#referralLink3+button");

// copyButton.addEventListener("click", copyToClipboard);
// function copyToClipboard(event) {
// 	event.preventDefault();
// 	var linkText = document.getElementById('referralLink3').innerText;

// 	navigator.clipboard.writeText(linkText).then(function () {
// 		console.log("Link coplied to clipboard");
// 		alert("Link coplied to clipboard");
// 	})
// 	.catch(function (error) {
// 		console.log("Failed to copy link: ", error);
// 		alert("Failed to copy link");
// 	})
// }



// const copyReferralLinkBtn = document.getElementById("copyReferralLink");
// const referralLinkText = document.getElementById("referralLink1");

// copyReferralLinkBtn.addEventListener("click", copyReferralLink);

// const copyAddressBtn = document.getElementById("copyAddress");
// const addressText = document.getElementById("address");

// copyAddressBtn.addEventListener("click", copyAddress);

// function copyReferralLink1() {
// 	const referralLink = referralLinkText.innerText;

// 	copyToClipboard(referralLink, "Referral Link");
// }

// function copyAddress() {
// 	const address = addressText.innerText;
// 	copyToClipboard(address, "Address");
// }

// function copyToClipboard(text, label) {
	
// 	navigator.clipboard.writeText(text).then(function () {
// 		console.log(label + " copied to clipboard");
// 		alert(label + " copied to clipboard")
// 	})
// 	.catch(function (error) {
// 		console.log("Failed to copy" + label + ": ", error);
// 		alert("Failed to copy " + label);
// 	});
// }



// const copyButton = document.getElementById("copyButton");
// const referralLink3Input = document.getElementById("personalLink2");

// copyButton.addEventListener("click", copyPersonalLink2);



// function copyPersonalLink2() {
// 	const personalLink2 = personalLink2Input.value;

// 	copyToClipboard(personalLink2, "personalLink2 Link 3");
// }

// function copyToClipboard(text, label) {

// navigator.clipboard.writeText(text)
// 	.then(function () {
// 		console.log(label + " copied to clipboard");
// 		alert(label + " copied to clipboard");
// 	})
// 	.catch(function (error) {
// 		console.log("Failed to copy " + label + ": ", error);
// 		alert("Failed to copy" + label);
// 	}):
// }

// const copyButton = document.getElementById('copyButton');
// const referralLinkInput = document.getElementById("referralLink3");

// copyButton.addEventListener("click", copyReferralLink);

// function copyReferralLink() {
// 	referralLinkInput.select();

// 	document.execCommand("copy");

// 	alert("Referral link copied to clipboard");
// }


// function addTransactionHistory(type, amount) {
// 	const transactionList = document.getElementById("transactionList");

// 	const listItem = document.createElement("li");
// 	const transaction = ${type}: $${amount.toFixed(2)};
// 	const textNode = document.createTextNode(transaction);

// listItem.appendChild(textNode);

// transactionList.prepend(listItem);
// }

// //  Example usage
// //  call
// addTransactionHistory when a deposit or withdrawl is made addTransactionHistory("deposit", 100.50);
// addTransactionHistory("withdrawl", 50.20);



const depositLinks = document.querySelectorAll("#deposit1 a, #deposit2 a, #deposit3 a, #deposit4 a, #deposit5 a");

depositLinks.forEach(function(link) {

	link.addEventListener("click", function (event) {
		event.preventDefault();

	const depositId = this.parentElement.getAttribute("id");
	window.location.href = "deposit.html#" + depositId;
	});
});