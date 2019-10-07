var totalTime;

function sleep (time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

function getValue() {
	var views = chrome.extension.getViews({
    type: "popup"
	});
	for (var i = 0; i < views.length; i++) {
    	totalTime = views[i].document.getElementById('totaltime').value;
	}
}

function finished() {
	chrome.notifications.create("finished", {
		type: "basic",
		title: "WolfTimeHelper",
		message: "WolfTime clock in&out are finished",
		iconUrl: "icon.png"
	}, function() {});
}

async function allFunction() {
	getValue();
	// openMyPackPortal();
	chrome.tabs.query({}, function(tabs) {
    	chrome.tabs.create({url: 'https://portalsp.acs.ncsu.edu/Shibboleth.sso/Login?SAMLDS=1&target=ss%3Amem%3Aa4cdde037fbb037c18b1d647566fdaf2143f03dcd436e93f9179be87f078dda9&entityID=https%3A%2F%2Fshib.ncsu.edu%2Fidp%2Fshibboleth'});
    });
	await sleep(5000);
	// logIn();
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
		chrome.tabs.executeScript({file: "login.js", runAt: "document_end"});
	});
	await sleep(20000);
	// clickWolfTime();
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
		chrome.tabs.executeScript({file: "clickwolftime.js"});
	});
	await sleep(5000);
	// clickSubmit();
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
		chrome.tabs.executeScript({file: "clicksubmit.js", runAt: "document_end"});
	});

	await sleep(totalTime*3600000);
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    	chrome.tabs.create({url: 'https://portalsp.acs.ncsu.edu/Shibboleth.sso/Login?SAMLDS=1&target=ss%3Amem%3Aa4cdde037fbb037c18b1d647566fdaf2143f03dcd436e93f9179be87f078dda9&entityID=https%3A%2F%2Fshib.ncsu.edu%2Fidp%2Fshibboleth'});
    });
	await sleep(5000);
	// logIn();
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
		chrome.tabs.executeScript({file: "login.js", runAt: "document_end"});
	});
	await sleep(20000);
	// clickWolfTime();
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
		chrome.tabs.executeScript({file: "clickwolftime.js"});
	});
	await sleep(5000);
	// clickSubmit();
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
		chrome.tabs.executeScript({file: "clicksubmit.js", runAt: "document_end"});
	});
	finished();
	
}

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.type == "runit") {
        allFunction();
        sendResponse({farewell: "bye"});
    }	
});

