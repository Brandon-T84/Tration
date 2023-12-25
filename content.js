/*let body = document.getElementsByTagName('body');

for (elt of body){

elt.style['background-color'] = '#FF0000'
}
*/

function comicsans(){
   let paragraphs = document.getElementsByTagName('p');
   let heading1 = document.getElementsByTagName('h1');
   let heading2 = document.getElementsByTagName('h2');
   let heading3 = document.getElementsByTagName('h3');
   let heading4 = document.getElementsByTagName('h4');
   let heading5 = document.getElementsByTagName('h5');
   let heading6 = document.getElementsByTagName('h6');
   let div = document.getElementsByTagName('div');
let links = document.getElementsByTagName('a');
for (elt of paragraphs){

	elt.style['font-family'] = 'Comic Sans MS';
}

for (elt of links){

	elt.style['font-family'] = 'Comic Sans MS';
}


for (elt of heading1){

	elt.style['font-family'] = 'Comic Sans MS';
}

for (elt of heading2){

	elt.style['font-family'] = 'Comic Sans MS';
}

for (elt of heading3){

	elt.style['font-family'] = 'Comic Sans MS';
}

for (elt of heading4){

	elt.style['font-family'] = 'Comic Sans MS';
}

for (elt of heading5){

	elt.style['font-family'] = 'Comic Sans MS';
}

for (elt of heading6){

	elt.style['font-family'] = 'Comic Sans MS';
}

for (elt of div){

	elt.style['font-family'] = 'Comic Sans MS';
}
};



chrome.runtime.onMessage.addListener(
      function(request, sender, sendResponse) {
var getcolor = request.message
         if( request.message === "comicsans" ) {
         comicsans();
             }
        if( request.message === "start" ) {
         change();
             }

             if (request.message === "verdana"){

             	changetoverdana();
             }

             if (request.message === "calibri"){

             	changetocalibri();
             }

             if (request.message === "dyslexic"){

             	changetodyslexicfont();
             }


             if (getcolor.indexOf('py') > -1){
 let paragraphs1 = document.getElementsByTagName('p');

   let body = document.getElementsByTagName('body');
   let heading1 = document.getElementsByTagName('h1');
   let heading2 = document.getElementsByTagName('h2');
   let heading3 = document.getElementsByTagName('h3');
   let heading4 = document.getElementsByTagName('h4');
   let heading5 = document.getElementsByTagName('h5');
   let heading6 = document.getElementsByTagName('h6');
   let div = document.getElementsByTagName('div');
let links = document.getElementsByTagName('a')
let input = document.getElementsByTagName('input')
let header = document.getElementsByTagName('header')
let td = document.getElementsByTagName('td')
let th = document.getElementsByTagName('th')
let tr = document.getElementsByTagName('tr')
let table = document.getElementsByTagName('table')
for (elt of links){
var color1 = request.message
var color = color1.substring(0, color1.length - 2);

var firstbracket = "'"
var secondbracket = "'"
var final = firstbracket+color+secondbracket
console.log(final);
  elt.style['letter-spacing'] = color+'px';


}

for (elt of paragraphs1){
var color1 = request.message
var color = color1.substring(0, color1.length - 2);
var firstbracket = "'"
var secondbracket = "'"
var final = firstbracket+color+secondbracket
console.log(final);
  elt.style['letter-spacing'] = color+'px';


}

for (elt of body){
var color1 = request.message
var color = color1.substring(0, color1.length - 2);
var firstbracket = "'"
var secondbracket = "'"
var final = firstbracket+color+secondbracket
console.log(final);
  elt.style['letter-spacing'] = color+'px';


}

for (elt of heading1){
var color1 = request.message
var color = color1.substring(0, color1.length - 2);

var firstbracket = "'"
var secondbracket = "'"
var final = firstbracket+color+secondbracket
console.log(final);
  elt.style['letter-spacing'] = color+'px';


}

for (elt of heading2){
var color1 = request.message
var color = color1.substring(0, color1.length - 2);

var firstbracket = "'"
var secondbracket = "'"
var final = firstbracket+color+secondbracket
console.log(final);
  elt.style['letter-spacing'] = color+'px';


}

for (elt of heading3){
var color1 = request.message
var color = color1.substring(0, color1.length - 2);

var firstbracket = "'"
var secondbracket = "'"
var final = firstbracket+color+secondbracket
console.log(final);
  elt.style['letter-spacing'] = color+'px';


}

for (elt of heading4){
var color1 = request.message
var color = color1.substring(0, color1.length - 2);

var firstbracket = "'"
var secondbracket = "'"
var final = firstbracket+color+secondbracket
console.log(final);
  elt.style['letter-spacing'] = color+'px';


}

for (elt of heading5){
var color1 = request.message
var color = color1.substring(0, color1.length - 2);

var firstbracket = "'"
var secondbracket = "'"
var final = firstbracket+color+secondbracket
console.log(final);
  elt.style['letter-spacing'] = color+'px';


}

for (elt of heading6){
var color1 = request.message
var color = color1.substring(0, color1.length - 2);

var firstbracket = "'"
var secondbracket = "'"
var final = firstbracket+color+secondbracket
console.log(final);
  elt.style['letter-spacing'] = color+'px';


}

for (elt of div){
var color1 = request.message
var color = color1.substring(0, color1.length - 2);

var firstbracket = "'"
var secondbracket = "'"
var final = firstbracket+color+secondbracket
console.log(final);
  elt.style['letter-spacing'] = color+'px';


}



for (elt of td){
var color1 = request.message
var color = color1.substring(0, color1.length - 2);

var firstbracket = "'"
var secondbracket = "'"
var final = firstbracket+color+secondbracket
console.log(final);
  elt.style['letter-spacing'] = color+'px';


}

for (elt of th){
var color1 = request.message
var color = color1.substring(0, color1.length - 2);

var firstbracket = "'"
var secondbracket = "'"
var final = firstbracket+color+secondbracket
console.log(final);
  elt.style['letter-spacing'] = color+'px';


}

for (elt of tr){
var color1 = request.message
var color = color1.substring(0, color1.length - 2);

var firstbracket = "'"
var secondbracket = "'"
var final = firstbracket+color+secondbracket
console.log(final);
  elt.style['letter-spacing'] = color+'px';


}
for (elt of table){
var color1 = request.message
var color = color1.substring(0, color1.length - 2);

var firstbracket = "'"
var secondbracket = "'"
var final = firstbracket+color+secondbracket
console.log(final);
  elt.style['letter-spacing'] = color+'px';


}



             }
         

             if (getcolor.indexOf('ye') > -1){

        let paragraphs1 = document.getElementsByTagName('p');

   let body = document.getElementsByTagName('body');
   let heading1 = document.getElementsByTagName('h1');
   let heading2 = document.getElementsByTagName('h2');
   let heading3 = document.getElementsByTagName('h3');
   let heading4 = document.getElementsByTagName('h4');
   let heading5 = document.getElementsByTagName('h5');
   let heading6 = document.getElementsByTagName('h6');
   let div = document.getElementsByTagName('div');
let links = document.getElementsByTagName('a')
let input = document.getElementsByTagName('input')
let header = document.getElementsByTagName('header')
let td = document.getElementsByTagName('td')
let th = document.getElementsByTagName('th')
let tr = document.getElementsByTagName('tr')
let table = document.getElementsByTagName('table')
for (elt of links){
var color1 = request.message
var color = color1.substring(0, color1.length - 2);

var firstbracket = "'"
var secondbracket = "'"
var final = firstbracket+color+secondbracket
console.log(final);
  elt.style['color'] = color;


}

for (elt of paragraphs1){
var color1 = request.message
var color = color1.substring(0, color1.length - 2);
var firstbracket = "'"
var secondbracket = "'"
var final = firstbracket+color+secondbracket
console.log(final);
  elt.style['color'] = color;


}

for (elt of body){
var color1 = request.message
var color = color1.substring(0, color1.length - 2);
var firstbracket = "'"
var secondbracket = "'"
var final = firstbracket+color+secondbracket
console.log(final);
  elt.style['color'] = color;


}

for (elt of heading1){
var color1 = request.message
var color = color1.substring(0, color1.length - 2);

var firstbracket = "'"
var secondbracket = "'"
var final = firstbracket+color+secondbracket
console.log(final);
  elt.style['color'] = color;


}

for (elt of heading2){
var color1 = request.message
var color = color1.substring(0, color1.length - 2);

var firstbracket = "'"
var secondbracket = "'"
var final = firstbracket+color+secondbracket
console.log(final);
  elt.style['color'] = color;


}

for (elt of heading3){
var color1 = request.message
var color = color1.substring(0, color1.length - 2);

var firstbracket = "'"
var secondbracket = "'"
var final = firstbracket+color+secondbracket
console.log(final);
  elt.style['color'] = color;


}

for (elt of heading4){
var color1 = request.message
var color = color1.substring(0, color1.length - 2);

var firstbracket = "'"
var secondbracket = "'"
var final = firstbracket+color+secondbracket
console.log(final);
  elt.style['color'] = color;


}

for (elt of heading5){
var color1 = request.message
var color = color1.substring(0, color1.length - 2);

var firstbracket = "'"
var secondbracket = "'"
var final = firstbracket+color+secondbracket
console.log(final);
  elt.style['color'] = color;


}

for (elt of heading6){
var color1 = request.message
var color = color1.substring(0, color1.length - 2);

var firstbracket = "'"
var secondbracket = "'"
var final = firstbracket+color+secondbracket
console.log(final);
  elt.style['color'] = color;


}

for (elt of div){
var color1 = request.message
var color = color1.substring(0, color1.length - 2);

var firstbracket = "'"
var secondbracket = "'"
var final = firstbracket+color+secondbracket
console.log(final);
  elt.style['color'] = color;


}



for (elt of td){
var color1 = request.message
var color = color1.substring(0, color1.length - 2);

var firstbracket = "'"
var secondbracket = "'"
var final = firstbracket+color+secondbracket
console.log(final);
  elt.style['color'] = color;


}

for (elt of th){
var color1 = request.message
var color = color1.substring(0, color1.length - 2);

var firstbracket = "'"
var secondbracket = "'"
var final = firstbracket+color+secondbracket
console.log(final);
  elt.style['color'] = color;


}

for (elt of tr){
var color1 = request.message
var color = color1.substring(0, color1.length - 2);

var firstbracket = "'"
var secondbracket = "'"
var final = firstbracket+color+secondbracket
console.log(final);
  elt.style['color'] = color;


}
for (elt of table){
var color1 = request.message
var color = color1.substring(0, color1.length - 2);

var firstbracket = "'"
var secondbracket = "'"
var final = firstbracket+color+secondbracket
console.log(final);
  elt.style['color'] = color;


}

             }

             if (request.message !== "#ffffff"){


        let paragraphs1 = document.getElementsByTagName('p');

   let body = document.getElementsByTagName('body');
   let heading1 = document.getElementsByTagName('h1');
   let heading2 = document.getElementsByTagName('h2');
   let heading3 = document.getElementsByTagName('h3');
   let heading4 = document.getElementsByTagName('h4');
   let heading5 = document.getElementsByTagName('h5');
   let heading6 = document.getElementsByTagName('h6');
   let div = document.getElementsByTagName('div');
let links = document.getElementsByTagName('a')
let input = document.getElementsByTagName('input')
let header = document.getElementsByTagName('header')
let td = document.getElementsByTagName('td')
let th = document.getElementsByTagName('th')
let tr = document.getElementsByTagName('tr')
let table = document.getElementsByTagName('table')
for (elt of paragraphs1){
var color = request.message

var firstbracket = "'"
var secondbracket = "'"
var final = firstbracket+color+secondbracket
console.log(final);
  elt.style['background-color'] = color;


}
for (elt of body){
var color = request.message

var firstbracket = "'"
var secondbracket = "'"
var final = firstbracket+color+secondbracket
console.log(final);
  elt.style['background-color'] = color;


}

for (elt of heading1){
var color = request.message

var firstbracket = "'"
var secondbracket = "'"
var final = firstbracket+color+secondbracket
console.log(final);
  elt.style['background-color'] = color;


}

for (elt of heading2){
var color = request.message

var firstbracket = "'"
var secondbracket = "'"
var final = firstbracket+color+secondbracket
console.log(final);
  elt.style['background-color'] = color;


}

for (elt of heading3){
var color = request.message

var firstbracket = "'"
var secondbracket = "'"
var final = firstbracket+color+secondbracket
console.log(final);
  elt.style['background-color'] = color;


}

for (elt of heading4){
var color = request.message

var firstbracket = "'"
var secondbracket = "'"
var final = firstbracket+color+secondbracket
console.log(final);
  elt.style['background-color'] = color;


}

for (elt of heading5){
var color = request.message

var firstbracket = "'"
var secondbracket = "'"
var final = firstbracket+color+secondbracket
console.log(final);
  elt.style['background-color'] = color;


}

for (elt of heading6){
var color = request.message

var firstbracket = "'"
var secondbracket = "'"
var final = firstbracket+color+secondbracket
console.log(final);
  elt.style['background-color'] = color;


}

for (elt of div){
var color = request.message

var firstbracket = "'"
var secondbracket = "'"
var final = firstbracket+color+secondbracket
console.log(final);
  elt.style['background-color'] = color;


}

for (elt of links){
var color = request.message

var firstbracket = "'"
var secondbracket = "'"
var final = firstbracket+color+secondbracket
console.log(final);
  elt.style['background-color'] = color;


}

for (elt of td){
var color = request.message

var firstbracket = "'"
var secondbracket = "'"
var final = firstbracket+color+secondbracket
console.log(final);
  elt.style['background-color'] = color;


}

for (elt of th){
var color = request.message

var firstbracket = "'"
var secondbracket = "'"
var final = firstbracket+color+secondbracket
console.log(final);
  elt.style['background-color'] = color;


}

for (elt of tr){
var color = request.message

var firstbracket = "'"
var secondbracket = "'"
var final = firstbracket+color+secondbracket
console.log(final);
  elt.style['background-color'] = color;


}
for (elt of table){
var color = request.message

var firstbracket = "'"
var secondbracket = "'"
var final = firstbracket+color+secondbracket
console.log(final);
  elt.style['background-color'] = color;


}
}
              
             }
      
    );

    function change(){
          let paragraphs1 = document.getElementsByTagName('p');
   let paragraphs = document.getElementsByTagName('p');
   let heading1 = document.getElementsByTagName('h1');
   let heading2 = document.getElementsByTagName('h2');
   let heading3 = document.getElementsByTagName('h3');
   let heading4 = document.getElementsByTagName('h4');
   let heading5 = document.getElementsByTagName('h5');
   let heading6 = document.getElementsByTagName('h6');
   let div = document.getElementsByTagName('div');
let links = document.getElementsByTagName('a');
for (elt of paragraphs1){

	elt.style['font-family'] = 'Arial, sans-serif';
}

for (elt of links){

	elt.style['font-family'] = 'Arial, sans-serif';
}


for (elt of heading1){

	elt.style['font-family'] = 'Arial, sans-serif';
}

for (elt of heading2){

	elt.style['font-family'] = 'Arial, sans-serif';
}

for (elt of heading3){

	elt.style['font-family'] = 'Arial, sans-serif';
}

for (elt of heading4){

	elt.style['font-family'] = 'Arial, sans-serif';
}

for (elt of heading5){

	elt.style['font-family'] = 'Arial, sans-serif';
}

for (elt of heading6){

	elt.style['font-family'] = 'Arial, sans-serif';
}

for (elt of div){

	elt.style['font-family'] = 'Arial, sans-serif';
}
    }


      function changetoverdana(){
          let paragraphs1 = document.getElementsByTagName('p');
   let paragraphs = document.getElementsByTagName('p');
   let heading1 = document.getElementsByTagName('h1');
   let heading2 = document.getElementsByTagName('h2');
   let heading3 = document.getElementsByTagName('h3');
   let heading4 = document.getElementsByTagName('h4');
   let heading5 = document.getElementsByTagName('h5');
   let heading6 = document.getElementsByTagName('h6');
   let div = document.getElementsByTagName('div');
let links = document.getElementsByTagName('a');
for (elt of paragraphs1){

	elt.style['font-family'] = 'Verdana, sans-serif';
}

for (elt of links){

	elt.style['font-family'] = 'Verdana, sans-serif';
}


for (elt of heading1){

	elt.style['font-family'] = 'Verdana, sans-serif';
}

for (elt of heading2){

	elt.style['font-family'] = 'Verdana, sans-serif';
}

for (elt of heading3){

	elt.style['font-family'] = 'Verdana, sans-serif';
}

for (elt of heading4){

	elt.style['font-family'] = 'Verdana, sans-serif';
}

for (elt of heading5){

	elt.style['font-family'] = 'Verdana, sans-serif';
}

for (elt of heading6){

	elt.style['font-family'] = 'Verdana, sans-serif';
}

for (elt of div){

	elt.style['font-family'] = 'Verdana, sans-serif';
}
    }

     function changetocalibri(){
          let paragraphs1 = document.getElementsByTagName('p');
   let paragraphs = document.getElementsByTagName('p');
   let heading1 = document.getElementsByTagName('h1');
   let heading2 = document.getElementsByTagName('h2');
   let heading3 = document.getElementsByTagName('h3');
   let heading4 = document.getElementsByTagName('h4');
   let heading5 = document.getElementsByTagName('h5');
   let heading6 = document.getElementsByTagName('h6');
   let div = document.getElementsByTagName('div');
let links = document.getElementsByTagName('a');
for (elt of paragraphs1){

	elt.style['font-family'] = 'Calibri';
}

for (elt of links){

	elt.style['font-family'] = 'Calibri';
}


for (elt of heading1){

	elt.style['font-family'] = 'Calibri';
}

for (elt of heading2){

	elt.style['font-family'] = 'Calibri';
}

for (elt of heading3){

	elt.style['font-family'] = 'Calibri';
}

for (elt of heading4){

	elt.style['font-family'] = 'Calibri';
}

for (elt of heading5){

	elt.style['font-family'] = 'Calibri';
}

for (elt of heading6){

	elt.style['font-family'] = 'Calibri';
}

for (elt of div){

	elt.style['font-family'] = 'Calibri';
}
    }

    function changetodyslexicfont(){
          let paragraphs1 = document.getElementsByTagName('p');
   let paragraphs = document.getElementsByTagName('p');
   let heading1 = document.getElementsByTagName('h1');
   let heading2 = document.getElementsByTagName('h2');
   let heading3 = document.getElementsByTagName('h3');
   let heading4 = document.getElementsByTagName('h4');
   let heading5 = document.getElementsByTagName('h5');
   let heading6 = document.getElementsByTagName('h6');
   let div = document.getElementsByTagName('div');
let links = document.getElementsByTagName('a');


for (elt of paragraphs1){

	elt.style['font-family'] = 'Tahoma, sans-serif';


}

for (elt of links){

	elt.style['font-family'] = 'Tahoma, sans-serif';
}


for (elt of heading1){

	elt.style['font-family'] = 'Tahoma, sans-serif';
}

for (elt of heading2){

	elt.style['font-family'] = 'Tahoma, sans-serif';
}

for (elt of heading3){

	elt.style['font-family'] = 'Tahoma, sans-serif';
}

for (elt of heading4){

	elt.style['font-family'] = 'Tahoma, sans-serif';
}

for (elt of heading5){

	elt.style['font-family'] = 'Tahoma, sans-serif';
}

for (elt of heading6){

	elt.style['font-family'] = 'Tahoma, sans-serif';
}

for (elt of div){

	elt.style['font-family'] = 'Tahoma, sans-serif';
}
    }


    function changecolor(){

          let paragraphs1 = document.getElementsByTagName('p');
   let paragraphs = document.getElementsByTagName('p');
   let heading1 = document.getElementsByTagName('h1');
   let heading2 = document.getElementsByTagName('h2');
   let heading3 = document.getElementsByTagName('h3');
   let heading4 = document.getElementsByTagName('h4');
   let heading5 = document.getElementsByTagName('h5');
   let heading6 = document.getElementsByTagName('h6');
   let div = document.getElementsByTagName('div');
let links = document.getElementsByTagName('a');


for (elt of paragraphs1){

  elt.style['background-color'] = '#ff0000';


}

for (elt of links){

  elt.style['font-family'] = 'Tahoma, sans-serif';
}


for (elt of heading1){

  elt.style['font-family'] = 'Tahoma, sans-serif';
}

for (elt of heading2){

  elt.style['font-family'] = 'Tahoma, sans-serif';
}

for (elt of heading3){

  elt.style['font-family'] = 'Tahoma, sans-serif';
}

for (elt of heading4){

  elt.style['font-family'] = 'Tahoma, sans-serif';
}

for (elt of heading5){

  elt.style['font-family'] = 'Tahoma, sans-serif';
}

for (elt of heading6){

  elt.style['font-family'] = 'Tahoma, sans-serif';
}

for (elt of div){

  elt.style['font-family'] = 'Tahoma, sans-serif';
}
    }



/*

chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message, sender, sendResponse){
console.log(message);
if (message.txt === "hello"){
let paragraphs = document.getElementsByTagName('p');

for (elt of paragraphs){

	elt.style['font-family'] = 'Comic Sans MS';
}

}
}

*/