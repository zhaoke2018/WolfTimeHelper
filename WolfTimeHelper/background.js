// var totalTime;
// var breakMinute;
// var everyHour;

function sleep (time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

async function allFunction() {
	// openMyPackPortal();
	
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.update(tabs[0].id, {url: 'https://portalsp.acs.ncsu.edu/Shibboleth.sso/Login?SAMLDS=1&target=ss%3Amem%3Aa4cdde037fbb037c18b1d647566fdaf2143f03dcd436e93f9179be87f078dda9&entityID=https%3A%2F%2Fshib.ncsu.edu%2Fidp%2Fshibboleth'});
    });
	await sleep(2000);
	// logIn();
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
		chrome.tabs.executeScript(tabs[0].id, {file: "login.js"});
	});
	await sleep(20000);
	// clickWolfTime();
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
		chrome.tabs.executeScript(tabs[0].id, {file: "clickwolftime.js"});
	});
	await sleep(5000);
	// clickSubmit();
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
		chrome.tabs.executeScript(tabs[0].id, {file: "clicksubmit.js", runAt: "document_end"});
	});

	await sleep(3600000);

	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.update(tabs[0].id, {url: 'https://portalsp.acs.ncsu.edu/Shibboleth.sso/Login?SAMLDS=1&target=ss%3Amem%3Aa4cdde037fbb037c18b1d647566fdaf2143f03dcd436e93f9179be87f078dda9&entityID=https%3A%2F%2Fshib.ncsu.edu%2Fidp%2Fshibboleth'});
    });
	await sleep(2000);
	// logIn();
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
		chrome.tabs.executeScript(tabs[0].id, {file: "login.js"});
	});
	await sleep(20000);
	// clickWolfTime();
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
		chrome.tabs.executeScript(tabs[0].id, {file: "clickwolftime.js"});
	});
	await sleep(5000);
	// clickSubmit();
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
		chrome.tabs.executeScript(tabs[0].id, {file: "clicksubmit.js", runAt: "document_end"});
	});
	
	chrome.notifications.create("finished", {
		type: "basic",
		title: "WolfTimeHelper",
		message: "WolfTime clock in&out are finished",
		iconUrl: "icon.png"
	}, function() {});
}

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.type == "runit") {
		// totalTime = request.totaltime;
		// breakMinute = request.relaxminute;
  //   	everyHour = request.everyhour;
        allFunction();
        sendResponse({farewell: "ok"});
    }	
});

