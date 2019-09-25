// var totaltime = document.getElementById("totaltime").value;
// var breakminute = document.getElementById("breakminute");
// var everyhour = document.getElementById("everyhour");
document.getElementById("press").addEventListener("click",function(){
        chrome.runtime.sendMessage({type: "runit"},function(response) {
        });
    });
// totaltime: totaltime,
//         	breakminute: breakminute,
//         	everyhour: everyhour