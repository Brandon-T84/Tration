
window.onload = function () {
  document.getElementById('toggle').onclick = function () {

  document.getElementById('toggle_button').click();

}

document.getElementById('toggle2').onclick = function(){
  document.getElementById('toggle_button2').click();

}

function updateLabel1() {
    var enabled1 = chrome.extension.getBackgroundPage().enabled1;
    document.getElementById('toggle_button2').value = enabled1 ? "Disable" : "Enable";



 
  }
  function updateLabel() {
    var enabled = chrome.extension.getBackgroundPage().enabled;
    document.getElementById('toggle_button').value = enabled ? "Disable" : "Enable";

var togglebutton = document.getElementById('toggle_button').value
console.log(togglebutton);
var togglebutton2 = document.getElementById('toggle_button2').value
if (togglebutton == "Disable"){

  console.log("yessir");
    var anchor = document.getElementById("toggle");
  var att = document.createAttribute("checked");
  anchor.setAttributeNode(att);

}
if (togglebutton2 == "Disable"){

  console.log("yessir");
    var anchor2 = document.getElementById("toggle2");
  var att2 = document.createAttribute("checked");
  anchor2.setAttributeNode(att2);

}

 
  }

  document.getElementById('toggle_button2').onclick = function () {
 var background = chrome.extension.getBackgroundPage();
    background.enabled1 = !background.enabled1;
    updateLabel1();
  };
  updateLabel1();
  document.getElementById('toggle_button').onclick = function () {
    var background = chrome.extension.getBackgroundPage();
    background.enabled = !background.enabled;
    updateLabel();
  };
  updateLabel();
}
  
  document.getElementById('check').onclick = function() {

   var word = document.getElementById("input").value;
   let api = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;  
      
    fetch(api)  
         .then(function(response){  
            let data = response.json();  
            return data;
        }) 
.then(function(data){ 

//Input
 document.getElementById('word').innerHTML = word;
 ///If no Definition
          message = data.message;
          if (message){
         alert(message)
        }

//Output
            definition1 = data[0].meanings[0].definitions[0].definition;
            example1 = data[0].meanings[0].definitions[0].example;
document.getElementById('definition1').innerHTML ="1:" + definition1;
document.getElementById('example1').innerHTML = "1:" +  example1;

///audio
voiceUrl = data[0].phonetics[0].audio;
var audio = document.getElementById('audio');
var src = document.createAttribute("src");
src.value = voiceUrl;
audio.setAttributeNode(src); 

            definition2 = data[0].meanings[1].definitions[0].definition;
            example2 = data[0].meanings[1].definitions[0].example;
     if(definition2 != null) {
  document.getElementById('definition2').innerHTML =  "2:" + definition2;
  document.getElementById('example2').innerHTML = "2:" +  example2;
    }  
        })  
}

document.getElementById('textbutton').onclick = function() {

  const message = document.getElementById('say-input').value;
  var speech = new SpeechSynthesisUtterance();
  speech.lang = "en-US";
  speech.text = message;
  speech.volume = 1;
  speech.rate = 1;
  speech.pitch = 1;

  window.speechSynthesis.speak(speech);
}


/*
window.onload = function () {
  function updateLabel() {
    var enabled = chrome.extension.getBackgroundPage().enabled;
    document.getElementById('toggle').value = enabled ? "Disable" : "Enable"
    console.log(document.getElementById('toggle').value);
   

    if (document.getElementById('toggle').value == "Disable"){

        var str = '<input type="checkbox" id="toggle"/>';
    var tdElement = document.getElementById('toggle');
    var trElement = tdElement.parentNode;
    trElement.removeChild(tdElement);
    trElement.innerHTML = str + trElement.innerHTML;

    }
  }
  document.getElementById('toggle').onclick = function () {
    var background = chrome.extension.getBackgroundPage();
    background.enabled = !background.enabled;
    updateLabel();
  };
  updateLabel();
}
*/

function comicsans() {
    chrome.tabs.query({currentWindow: true, active: true}, function (tabs){
    var activeTab = tabs[0];
    chrome.tabs.sendMessage(activeTab.id, {"message": "comicsans"});
   });
}

document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("item1").addEventListener("click", comicsans);
});

function popup() {
    chrome.tabs.query({currentWindow: true, active: true}, function (tabs){
    var activeTab = tabs[0];
    chrome.tabs.sendMessage(activeTab.id, {"message": "start"});
   });
}

document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("item2").addEventListener("click", popup);
});



function verdana() {
    chrome.tabs.query({currentWindow: true, active: true}, function (tabs){
    var activeTab = tabs[0];
    chrome.tabs.sendMessage(activeTab.id, {"message": "verdana"});
   });
}

document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("item3").addEventListener("click", verdana);
});

function calibri() {
    chrome.tabs.query({currentWindow: true, active: true}, function (tabs){
    var activeTab = tabs[0];
    chrome.tabs.sendMessage(activeTab.id, {"message": "calibri"});
   });
}

document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("item4").addEventListener("click", calibri);
});

function dyslexicfont() {
    chrome.tabs.query({currentWindow: true, active: true}, function (tabs){
    var activeTab = tabs[0];
    chrome.tabs.sendMessage(activeTab.id, {"message": "dyslexic"});
   });
}

document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("item5").addEventListener("click", dyslexicfont);
});

function getcolor() {
  var color = document.getElementById('colorpicker').value;

    chrome.tabs.query({currentWindow: true, active: true}, function (tabs){
    var activeTab = tabs[0];
    chrome.tabs.sendMessage(activeTab.id, {"message": color});
   });
}

document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("colorsubmit").addEventListener("click", getcolor);
});

function getcolor2() {
  var color2 = document.getElementById('colorpicker2').value;
  var ye = "ye"
var final = color2+ye
    chrome.tabs.query({currentWindow: true, active: true}, function (tabs){
    var activeTab = tabs[0];
    chrome.tabs.sendMessage(activeTab.id, {"message": final});
   });
}

document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("colorsubmit2").addEventListener("click", getcolor2);
});

function getspacing() {
  var spacingvalue = document.getElementById('spacing').value;

var ye2 = "py"

var finalspacing = spacingvalue+ye2
    chrome.tabs.query({currentWindow: true, active: true}, function (tabs){
    var activeTab = tabs[0];
    chrome.tabs.sendMessage(activeTab.id, {"message": finalspacing});
   });
}

document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("spacingsubmit").addEventListener("click", getspacing);
});

