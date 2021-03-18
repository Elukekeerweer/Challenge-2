
// deze klok is samen gemaakt tijdens de les incl de dag nacht gebeuren // 

function klok() {

var today = new Date ();
var seconds = today.getSeconds();
var hours = today.getHours();
var minutes = today.getMinutes();


if (hours >= 5 && hours <= 19){
	document.getElementById('main').classList.remove('nacht');
	document.getElementById('main').classList.add('dag');
}
 else {
	document.getElementById('main').classList.remove('dag');
	document.getElementById('main').classList.add('nacht');
}

if (seconds < 10) {
	seconds = '0'+ seconds;
}

if (hours < 10){
	hours = '0' + hours;
}

if (minutes < 10){
	minutes = '0' + minutes;
}



document.getElementById('clock').innerHTML= hours + ':' + minutes + ':' + seconds;
}

klok();

setInterval(klok, 1000);


// datumpje voor die sukkels

var today = new Date ();
var dagWeek = new Array ('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday');
var maanden = new Array ('January', 'February', 'March', 'April', 'May', 'Juno', 'July', 'August', 'September', 'October', 'November', 'December');


document.getElementById('date').innerHTML= dagWeek[today.getDay()]+ ' ' +  today.getDate()  + ' ' + maanden[today.getMonth()];

// tijdzone switch naar Vietnam, want GOODMORNING VIETNAMMMMMM

function klok2() {

var today = new Date ();
var seconds = today.getSeconds();
var hours = today.getHours();
var minutes = today.getMinutes();


hours = hours + 6;

if (hours < 0 ) {
	hours = hours + 24;
}



if (hours >= 5 && hours <= 19){
	document.getElementById('main2').classList.remove('nacht2');
	document.getElementById('main2').classList.add('dag2');
}
 else {
	document.getElementById('main2').classList.remove('dag2');
	document.getElementById('main2').classList.add('nacht2');
}

if (seconds < 10) {
	seconds = '0'+ seconds;
}

if (hours < 10){
	hours = '0' + hours;
}

if (minutes < 10){
	minutes = '0' + minutes;
}



document.getElementById('vietnam').innerHTML= hours + ':' + minutes + ':' + seconds;
}


klok2();

setInterval(klok2, 1000);



// datumpje van vietnam voor die sukkels


var today = new Date ();
var dagWeek = new Array ( 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday','Sunday');
var maanden = new Array ('January', 'February', 'March', 'April', 'May', 'Juno', 'July', 'August', 'September', 'October', 'November', 'December');


document.getElementById('date2').innerHTML= dagWeek[today.getDay()]+ ' ' +  (today.getDate()+1)  + ' ' + maanden[today.getMonth()];


var today = new Date ();
var dagWeek = new Array ('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday');
var maanden = new Array ('January', 'February', 'March', 'April', 'May', 'Juno', 'July', 'August', 'September', 'October', 'November', 'December');


document.getElementById('date').innerHTML= dagWeek[today.getDay()]+ ' ' +  today.getDate()  + ' ' + maanden[today.getMonth()];



// tijdzone switch naar LA, want headquater 

function klok3() {

var today = new Date ();
var seconds = today.getSeconds();
var hours = today.getHours();
var minutes = today.getMinutes();

hours = hours - 9;

if (hours < 0 ) {
	hours = hours + 24
}



if (hours >= 5 && hours <= 19){
	document.getElementById('main3').classList.remove('nacht3');
	document.getElementById('main3').classList.add('dag3');
}
 else {
	document.getElementById('main3').classList.remove('dag3');
	document.getElementById('main3').classList.add('nacht3');
}

if (seconds < 10) {
	seconds = '0'+ seconds;
}

if (hours < 10){
	hours = '0' + hours;
}

if (minutes < 10){
	minutes = '0' + minutes;
}



document.getElementById('la').innerHTML= hours + ':' + minutes + ':' + seconds;
}

klok3();

setInterval(klok3, 1000);


// datumpje voor die sukkels

var today = new Date ();
var dagWeek = new Array ('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday');
var maanden = new Array ('January', 'February', 'March', 'April', 'May', 'Juno', 'July', 'August', 'September', 'October', 'November', 'December');


document.getElementById('date3').innerHTML= dagWeek[today.getDay()]+ ' ' +  today.getDate()  + ' ' + maanden[today.getMonth()];




// ff spelletje voor die hamsters in de space
// ik heb trouwens deze ook gejat / nagetypt met de HC op vrijdag 

var startTime = 0;
var stopwatchHandle;

function updateStopwatch(){


	var currentTime = new Date();

 
	var milliSeconds = currentTime.getTime() - startTime.getTime();
	document.getElementById('stopwatch').innerHTML = milliSeconds + ' milliseconds';

	
}

document.getElementById('start').onclick = function(){
	startTime = new Date();
	stopwatchHandle = setInterval(updateStopwatch, 1);
}

document.getElementById('stop').onclick = function(){
	clearInterval(stopwatchHandle);
}












