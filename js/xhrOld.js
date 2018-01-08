//main backup
// var clock = fetch('http://time.jsontest.com/').then(function(response) {
//     return response.json();
  
//   });

//Dom elements
let $time = document.querySelector('.current-time');
let $ip = document.querySelector('.user-ip');
let $language = document.querySelector('.user-language');

let $share = document.querySelector('.share-click');
let $social = document.querySelector('.social-pop');

let $shareB = document.querySelector('.share-click-b');
let $socialB = document.querySelector('.social-pop-b');
var x = document.getElementById("demo");





//Time display
const serverURLTime = 'http://time.jsontest.com/';
fetch(serverURLTime) 
    .then((resp) => resp.json()) 
    .then(function(data) {
        let timeDom = data.time;
        let timeDomSliced = timeDom.slice(0,8);
        $time.innerHTML = timeDomSliced;
        //myFunction(timeDomSliced);

    });



         //setInterval (()=> {
        //setInterval(timeUpdateEverySec, 1000);   
         //}, 1000);
        
            
            
    


//setting date var
//setInterval(()=> {
function addZero(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

// function updateClock(timeToSet) {
//     let h = timeToSet.slice(0,2);
    
    
//     let m = timeToSet.slice(3,5);
//     if (m == 59){
//         m = 00;
//         h++;
//     }
//     if (h==24)

//     let s = timeToSet.slice(6,8);
//     if (s == 59){
//         s = 00;
//         m++;
//     }
//     return h + ":" + m + ":" + s;

// }

function myFunction(timeToSet) {
    console.log(timeToSet);
    d = new Date();
    d.setHours(timeToSet.slice(0,2));
    d.setMinutes(timeToSet.slice(3,5));
    d.setSeconds(timeToSet.slice(6,8));
    h = addZero(d.getHours());
    m = addZero(d.getMinutes());
    s = addZero(d.getSeconds());
    console.log(x.innerHTML = h + ":" + m + ":" + s);

    //showDate();
}
// function timeUpdateEverySec() {
//     let d = new Date();
//     d.setHours(h);
//     d.setMinutes(m);
//     d.setSeconds(s);
//     h = addZero(d.getHours());
//     m = addZero(d.getMinutes());
//     s = addZero(d.getSeconds());
//     console.log (h + ":" + m + ":" + s);
//     (x.innerHTML = h + ":" + m + ":" + s);

//     showDate();
// }
// function showDate(){
//     h = addZero(d.getHours());
//     m = addZero(d.getMinutes());
//     s = addZero(d.getSeconds());
//     setInterval(showDate, 1000);

// }


//IP Display
const serverURLIP = 'http://ip.jsontest.com';
fetch(serverURLIP) 
    .then((resp) => resp.json()) 
    .then(function(data) {
        $ip.innerHTML = data.ip;
    });


//Language Display
const serverURLLang = 'http://headers.jsontest.com/';
fetch(serverURLLang) 
    .then((resp) => resp.json()) 
    .then(function(data) {
        let langDom = data['Accept-Language'];
        $language.innerHTML = langDom.charAt(0).toUpperCase() + langDom.slice(1,5);
    });

//Date picker
$( function() {
    $( "#datepicker" ).datepicker();
  } );

  $( function() {
    $( "#datepickerb" ).datepicker();
  } );

  $( function() {
    $( "#datepickerc" ).datepicker();
  } );


//Share
$share.addEventListener('click', ()=> {
$social.classList.toggle('is-visible');
});

$shareB.addEventListener('click', ()=> {
$socialB.classList.toggle('is-visible');
});



//Time Display
let xhrTime = new XMLHttpRequest();
const serverURLTime = 'http://time.jsontest.com/';


xhrTime.open('POST', serverURLTime);
xhrTime.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
xhrTime.onreadystatechange = function() {    
    if (xhrTime.readyState==4){
        let timeDom = JSON.parse(xhrTime.responseText).time;
         let timeDomSliced = timeDom.slice(0,8);
         console.log(timeDomSliced);
         $time.innerHTML = timeDomSliced;
         myFunction(timeDomSliced);
         //setInterval (()=> {
        //setInterval(timeUpdateEverySec, 1000);   
         //}, 1000);
        
            
            
    }
}
xhrTime.send();


//IP display WHY NOT GET?
let xhrIP = new XMLHttpRequest();
let serverURLIP = 'http://ip.jsontest.com';

xhrIP.open('POST', serverURLIP);
xhrIP.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
xhrIP.onreadystatechange = function() {    
    if (xhrIP.readyState==4){
        let ipDom = JSON.parse(xhrIP.responseText).ip;
        console.log(ipDom);
        $ip.innerHTML = ipDom;
    }
}

xhrIP.send();

//Language display WHY NOT GET?
let xhrLang = new XMLHttpRequest();
let serverURLLang = 'http://headers.jsontest.com/';

xhrLang.open('POST', serverURLLang);
xhrLang.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
xhrLang.onreadystatechange = function() {    
    if (xhrLang.readyState==4){
        let langInfo = JSON.parse(xhrLang.responseText);
        let langDom = langInfo['Accept-Language'];
        $language.innerHTML = langDom.charAt(0).toUpperCase() + langDom.slice(1,5);
    }
}

xhrLang.send();
