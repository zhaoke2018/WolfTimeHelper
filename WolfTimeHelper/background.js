function sleep (time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

async function allFunction() {
	// openMyPackPortal();
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.update(tabs[0].id, {url: 'https://portalsp.acs.ncsu.edu/Shibboleth.sso/Login?&target=https://portalsp.acs.ncsu.edu/psp/MP91PRD/EMPLOYEE/EMPL/c/NUI_FRAMEWORK.PT_LANDINGPAGE.GBL&entityID=https://shib.ncsu.edu/idp/shibboleth'});
    });
	await sleep(2000);
	// logIn();
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
		chrome.tabs.executeScript(tabs[0].id, {file:"login.js"});
	});
	await sleep(20000);
	// clickWolfTime();
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
		chrome.tabs.executeScript(tabs[0].id, {file:"clickwolftime.js"});
	});
	await sleep(4000);
	// clickSubmit();
 	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
		chrome.tabs.executeScript(tabs[0].id, {file:"clicksubmit.js"});
	});
	await sleep(1000);
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
		chrome.tabs.executeScript(tabs[0].id, {file:"clicksubmit.js"});
	});
	await sleep(1000);
	
}
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.type == "runit") {
        allFunction();
        sendResponse({farewell: "ok"});
    }

});