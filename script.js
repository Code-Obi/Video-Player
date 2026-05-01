"use strict"
let tar = document.getElementById("target");
let label = document.getElementsByTagName("label")[0];
let fileInp = document.getElementsByTagName("input")[0];
let playBtn = document.getElementsByTagName("button")[0];
let pauseBtn = document.getElementsByTagName("button")[1];
label.addEventListener("change",()=>{
    let a = fileInp.value.replace(/.*(\/|\\)/,"");
    tar.src = a;
});

playBtn.addEventListener("click",()=>{
    tar.play();
});
pauseBtn.addEventListener("click",()=>{
    tar.pause();
    tar.poster="1.jpg"
});