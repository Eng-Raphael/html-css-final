// for vedio slider usage 
let slide1 = document.getElementById('slide1');
let slide2 = document.getElementById('slide2');
let slide3 = document.getElementById('slide3');
slide1.onended = function (){
    slide2.play();
    slide1.style.opacity=0;
    slide2.style.opacity=1;
}
slide2.onended = function (){
    slide3.play();
    slide2.style.opacity=0;
    slide1.style.opacity=1;
}
slide3.onended = function (){
    slide1.play();
    slide3.style.opacity=0;
    slide1.style.opacity=1;
}