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
    });

setInterval (()=> {
fetch(serverURLTime) 
    .then((resp) => resp.json()) 
    .then(function(data) {
        let timeDom = data.time;
        let timeDomSliced = timeDom.slice(0,8);
        $time.innerHTML = timeDomSliced;
    });}, 1000);

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
});

$( function() {
    $( "#datepickerb" ).datepicker();
});

$( function() {
    $( "#datepickerc" ).datepicker();
});

//Share
$share.addEventListener('click', ()=> {
$social.classList.toggle('is-visible');
});

$shareB.addEventListener('click', ()=> {
$socialB.classList.toggle('is-visible');
});

