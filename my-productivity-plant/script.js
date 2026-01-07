let timeLeft = 10;
let timerId;
let plantHeight = 10;

const display = document.getElementById('timer-display');
const startBtn = document.getElementById('start-btn');
const plant = document.getElementById('plant');

function updateTimer(){
const minutes = Math.floor(timeLeft / 60);
const seconds = timeLeft % 60;
display.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

if(timeLeft == 0){
    clearInterval(timerId);
    growPlant();
    alert("Session Complete! Your plant grew.");
    resetTimer();
}else{
    timeLeft--;
}
}

function growPlant(){
    plantHeight += 30;
    plant.style.height = plantHeight + "px";
}

function resetTimer(){
    timeLeft = 10;
    display.textContent = "0:10";
    startBtn.disabled = false;
}

startBtn.addEventListener('click' , () => {
    startBtn.disabled = true;
    timerId = setInterval(updateTimer,1000);
});

function growPlant(){
    plantHeight+= 30;
    plant.style.height = plantHeight + "px";
    if(plantHeight >= 70){
        plant.classList.add('sprouted');
    }
    
}