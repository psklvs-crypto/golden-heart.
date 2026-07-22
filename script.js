// ===============================
// GOLDEN HEART
// Premium Intro
// ===============================

const loader = document.getElementById("loader");
const start = document.getElementById("start");

// Hide loader after 3 seconds
window.onload = () => {

    setTimeout(() => {

        loader.style.opacity = "0";

        loader.style.transition = "1.5s";

        setTimeout(() => {

            loader.style.display = "none";

        },1500);

    },3000);

}

// Enter button

start.onclick = () => {

    start.disabled = true;

    start.innerHTML = "✨ Opening Royal Palace...";

    createHearts();
    createPetals();
    createFireworks();
    createBalloons();
    setTimeout(()=>{

document.getElementById("passwordPage").style.display="flex";

},3000);

    // Show the doors first
    document.getElementById("leftDoor").style.left = "0";
    document.getElementById("rightDoor").style.right = "0";

    document.getElementById("goldLight").style.width = "100%";
    document.getElementById("goldLight").style.opacity = "1";

    // Wait 1 second, then open them
    setTimeout(() => {

        document.getElementById("leftDoor").style.left = "-50%";
        document.getElementById("rightDoor").style.right = "-50%";

    },1000);

}

// ===============================
// Sparkles
// ===============================

function createSparkles(){

for(let i=0;i<120;i++){

let star=document.createElement("div");

star.className="sparkle";

star.style.left=Math.random()*100+"vw";

star.style.top=Math.random()*100+"vh";

star.style.animationDelay=Math.random()*2+"s";

document.body.appendChild(star);

}

}
// ==========================
// HEARTS
// ==========================

function createHearts(){

for(let i=0;i<30;i++){

let heart=document.createElement("div");

heart.className="heart";

heart.innerHTML="💖";

heart.style.left=Math.random()*100+"vw";

heart.style.animationDelay=Math.random()*3+"s";

document.body.appendChild(heart);

setTimeout(()=>{
heart.remove();
},9000);

}

}

// ==========================
// PETALS
// ==========================

function createPetals(){

for(let i=0;i<35;i++){

let petal=document.createElement("div");

petal.className="petal";

petal.innerHTML="🌹";

petal.style.left=Math.random()*100+"vw";

petal.style.animationDelay=Math.random()*4+"s";

document.body.appendChild(petal);

setTimeout(()=>{
petal.remove();
},11000);

}

}
// ==========================
// FIREWORKS
// ==========================

function createFireworks(){

for(let i=0;i<8;i++){

let fire=document.createElement("div");

fire.className="firework";

fire.style.left=Math.random()*90+"vw";

fire.style.top=Math.random()*70+"vh";

document.body.appendChild(fire);

setTimeout(()=>{

fire.remove();

},1600);

}

}
function createBalloons(){

for(let i=0;i<20;i++){

let b=document.createElement("div");

b.innerHTML="🎈";

b.style.position="fixed";

b.style.left=Math.random()*100+"vw";

b.style.bottom="-50px";

b.style.fontSize="35px";

b.style.transition="8s linear";

document.body.appendChild(b);

setTimeout(()=>{

b.style.bottom="110vh";

},100);

setTimeout(()=>{

b.remove();

},9000);

}

}
const unlockBtn=document.getElementById("unlockBtn");

unlockBtn.onclick=()=>{

const pass=document.getElementById("passwordInput").value;

if(pass==="Vanushka"){

document.getElementById("passwordPage").style.display="none";
document.getElementById("lettersPage").style.display="block";

}else{

alert("Wrong Password!");

}

}
const messages = [
"Happy Birthday! May your 16th year be full of happiness.",
"You always know how to make me smile.",
"Thank you for being part of my memories.",
"I hope today brings you lots of joy.",
"Keep chasing your dreams.",
"You deserve all the happiness in the world.",
"May this year be your best one yet.",
"Never stop believing in yourself.",
"Keep smiling every day.",
"You are stronger than you know.",
"I'll always treasure our memories.",
"Enjoy every moment of your special day.",
"Wishing you success and good health.",
"Thank you for being you.",
"Have an amazing birthday!",
"This surprise was made especially for you. 💖"
];

const grid = document.getElementById("lettersGrid");

messages.forEach((msg,index)=>{

const card=document.createElement("div");

card.className="letter";

card.innerHTML="💌<br>"+(index+1);

card.onclick=()=>{

document.getElementById("letterPopup").style.display="flex";

document.getElementById("letterTitle").innerHTML="Letter "+(index+1);

document.getElementById("letterText").innerHTML=msg;

}

grid.appendChild(card);

});

document.getElementById("closeLetter").onclick=()=>{

document.getElementById("letterPopup").style.display="none";

}
