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

createSparkles();

// Open palace doors

document.getElementById("leftDoor").style.left = "0";

document.getElementById("rightDoor").style.right = "0";

document.getElementById("goldLight").style.width = "100%";

document.getElementById("goldLight").style.opacity = "1";

setTimeout(() => {

document.querySelector(".glass").style.opacity = "0";

},1800);

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
