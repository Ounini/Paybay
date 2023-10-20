const copyButton = document.getElementById('copyButton');
const referralLinkInput = document.getElementById("referralLink3");

copyButton.addEventListener("click", copyReferralLink);

function copyReferralLink() {
	referralLinkInput.select();

	document.execCommand("copy");

	alert("Referral link copied to clipboard");
}
