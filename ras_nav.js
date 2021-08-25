const hamburger = document.querySelector(".hamburger");const navMenu = document.querySelector(".nav-menu");
hamburger.addEventListener("click", mobileMenu);function mobileMenu() {hamburger.classList.toggle("active");navMenu.classList.toggle("active");}
const navLink = document.querySelectorAll(".nav-link");navLink.forEach(n => n.addEventListener("click", closeMenu));
function closeMenu() {hamburger.classList.remove("active");navMenu.classList.remove("active");}
const nav = document.querySelector(".navbar");const NavTop = nav.offsetTop;function fixnavbar(){
if(window.scrollY > NavTop){document.body.classList.add("fixed-nav");}else {document.body.style.paddingTop = 0;
document.body.classList.remove("fixed-nav");}}window.addEventListener("scroll", fixnavbar);
function isElementInViewport(elem) {var $elem = $(elem);
var scrollElem = ((navigator.userAgent.toLowerCase().indexOf('webkit') != -1) ? 'body' : 'html');
var viewportTop = $(scrollElem).scrollTop();var viewportBottom = viewportTop + $(window).height();
var elemTop = Math.round( $elem.offset().top );var elemBottom = elemTop + $elem.height();
return ((elemTop < viewportBottom) && (elemBottom > viewportTop));}
$(window).scroll(function(){var $elem = $('.col-section-title .title');
    if ($elem.hasClass('start')) return;
    if (isElementInViewport($elem)) {$elem.addClass('start');}});
$(window).scroll(function(){var $elem = $('.sec-para .title-parg');
    if ($elem.hasClass('start')) return;
    if (isElementInViewport($elem)) {$elem.addClass('start');}});
function openTab(evt, cityName) {
var i, tabcontent, tablinks;tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {tabcontent[i].style.display = "none";}
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {if(document.getElementsByClassName("tablinks")[0].id=="defaultOpen"){
document.getElementById("defaultOpen").style.color='#f1f1f1';document.getElementById("defaultOpen").style.borderBottom='none';
}tablinks[i].className = tablinks[i].className.replace(" active", "");}
  document.getElementById(cityName).style.display = "block";evt.currentTarget.className += " active";}
$(document).ready(function(){$('#defaultOpen').click(function(){
document.getElementById("defaultOpen").style.color='#FE5F41';
document.getElementById("defaultOpen").style.borderBottom='5px solid #FE5F41';});});
document.getElementById("defaultOpen").click();document.getElementById("defaultOpen").style.color='#FE5F41';
document.getElementById("defaultOpen").style.borderBottom='5px solid #FE5F41';
let picker=new SimplePicker({zIndex:10});const $open=document.querySelector('#datepicker');
$open.addEventListener('click', (e) => {picker.open();});
picker.on('submit', (date, readableDate) => {$('#datepicker').val(readableDate);});
picker.on('close', (date) => {$('#datepicker').val('');});
$('#carousel-one,#carousel-two,#carousel-three,#carousel-four,#carousel-five').owlCarousel({
loop:true,margin:10,nav:false,dots:false,autoplay:true,autoplayTimeout:2000,
    responsive:{0:{items:1},540:{items:2},1336:{items:3}}})
$('.owl-two').owlCarousel({loop:true,margin:10,nav:false,dots:false,autoplay:true,
    autoplayTimeout:2000,responsive:{0:{items:1},1000:{items:2},1400:{items:3}}})
$('.carousel-one').owlCarousel({loop:true,margin:0,nav:false,dots:false,autoplay:false,
    responsive:{0:{items:1},500:{items:3},1000:{items:4}}})
$(document).ready(function(){$(window).scroll(function(){if($(this).scrollTop()>100){$('#scroll').fadeIn();
}else{$('#scroll').fadeOut();}});$('#scroll').click(function () {$("html,body").animate({scrollTop:0},600);
return false;});setTimeout(function(){$('#loader').addClass('hidden');document.getElementById('webpage').style.display="block";
},7000);function typingEffect() {const contactTexts = shuffleArray(['Amazing Taste And Beautiful Place', 'Best Way To Eat Healthy Food', 'Creamy Hot And Ready To Serve', 'Enjoy Delicious Food At Restauco', 'A Fascinating Flavour Experience']);
const title = document.getElementsByClassName("title")[0];let removing = false;let idx = char = 0;
setInterval(() => {if (char < contactTexts[idx].length) title.innerHTML += contactTexts[idx][char];
if (char == contactTexts[idx].length + 15) removing = true;
if (removing) title.innerHTML = title.innerHTML.substring(0, title.innerHTML.length - 1);
char++;
if (title.innerHTML.length === 0) {if (idx === contactTexts.length - 1) idx = 0
else idx++;
char = 0; removing = false;}}, 150);}typingEffect();function shuffleArray(array) {
let currentIndex = array.length,temporaryValue, randomIndex;while (0 !== currentIndex) {
randomIndex = Math.floor(Math.random() * currentIndex);currentIndex -= 1;temporaryValue = array[currentIndex];
array[currentIndex] = array[randomIndex];array[randomIndex] = temporaryValue;}return array;}
var textWrapper = document.querySelector('.customer-text .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
anime.timeline({loop: true}).add({targets: '.customer-text .letter',translateY: ["1.1em", 0],
    translateZ: 0,duration: 750,delay: (el, i) => 50 * i
  }).add({targets: '.customer-text',opacity: 0,duration: 1000,easing: "easeOutExpo",delay: 1000});
var textWrapper = document.querySelector('.dishes-title .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
anime.timeline({loop: true}).add({targets: '.dishes-title .line',scaleX: [0,1],
    opacity: [0.5,1],easing: "easeInOutExpo",duration: 900
  }).add({targets: '.dishes-title .letter',opacity: [0,1],translateX: [40,0],translateZ: 0,
    scaleX: [0.3, 1],easing: "easeOutExpo",duration: 800,offset: '-=600',
    delay: (el, i) => 150 + 25 * i}).add({targets: '.dishes-title',opacity: 0,duration: 1000,
    easing: "easeOutExpo",delay: 1000});});