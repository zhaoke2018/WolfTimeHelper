document.getElementById("press").addEventListener("click",function(){
        chrome.runtime.sendMessage({type: "runit"},function(response) {
        });
    });