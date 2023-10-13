// Get all the tab links and tab content
const tabLinks = document.querySelectorAll(".tabGroup li");
const tabContent = document.querySelectorAll(".tabContent > div");

//  Add click event lictener to each tab link
tabLinks.forEach((link, index) => {
	link.addEventListener("click", function (event) {

		// prevents default behaviour 
		event.preventDefault();

		// // prevent event propagation
		// event.stopPropagation();
		// Switch active class on the tab link
		tabLinks.forEach(tabLink => tabLink.classList.remove("active"));
		link.classList.add("active");

		// Hide all tab content
		tabContent.forEach(content => content.style.display = "none");

		// Display the corresponding tab content based on the index
		tabContent[index].style.display = "block";
	});
});


const copyReferralLinkBtn = document.getElementById("copyReferralLinkBtn");
const referralLink1Text = document.getElementById("referralLink1");

copyReferralLinkBtn.addEventListener("click", copyReferralLink1);

const copyAddressBtn = document.getElementById("copyAddressBtn");
const addressText = document.getElementById("addressText");

copyAddressBtn.addEventListener("click", copyAddress);

function copyReferralLink1() {
	const referralLink1 = referralLink1Text.innerText;

	copyToClipboard(referralLink1, "Referral Link");
}

function copyAddress() {
	const address = addressText.innerText;

	copyToClipboard(address, "Wallet Address");
}
function copyToClipboard(text, label) {
	
	navigator.clipboard.writeText(text).then(function () {
		console.log(label + " copied to clipboard");
		alert(label + " copied to clipboard")
	})
	.catch(function (error) {
		console.log("Failed to copy" + label + ": ", error);
		alert("Failed to copy " + label);
	});
}