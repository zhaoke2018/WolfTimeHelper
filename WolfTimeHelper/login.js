function logIn() {
	var activityTab = document.getElementById("formSubmit");
	activityTab.click();
}

function autoFill() {
    document.getElementById('username').value = "unityID";
    document.getElementById('password').value = "Password";
    logIn();
}

autoFill();

