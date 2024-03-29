let countdown;
let timer;
const timerElement = document.getElementById("timer"); //output
const durationInput = document.getElementById("set_timer"); //input
const timerDuration = parseInt(durationInput.value, 10);
const setButton = document.getElementById("set"); //play
let isTimerRunning = false;
var remainingTime = 0;

// Function to start or pause the timer
function toggleTimer() {
    if (isTimerRunning) {
        // Pause the timer
        clearInterval(countdown);
        remainingTime = timer;
        setButton.style.border = "3px solid #D24545"; // Remove the red border
        setButton.innerText = "Resume";
    } else {
        // Resume the timer or start a new timer
        const timerDuration = parseInt(durationInput.value, 10);
        if (isNaN(timerDuration) || timerDuration <= 0) {
            alert("Enter a valid positive number for the timer.");
            return;
        }
        if (remainingTime > 0) {
            startTimer(remainingTime);
        } else {
            startTimer(timerDuration);
        }
        setButton.style.border = "3px solid #74E291"; // Add a red border
        setButton.innerText = "Pause";
    }
    document.getElementById('input').style.display = 'none';
    isTimerRunning = !isTimerRunning;
}

// Event listener for the "Set" button
setButton.addEventListener("click", toggleTimer);

// Function to start the timer
function startTimer(durationInSeconds) {
    timer = durationInSeconds;

    countdown = setInterval(function () {
        let minutes = Math.floor(timer / 60);
        let seconds = timer % 60;

        //timer display
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        timerElement.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            clearInterval(countdown);
            timerElement.textContent = "Time's up!";
            setButton.innerText = "Play";
            setTimeout(function () {
                timerElement.textContent = "";
                document.getElementById('input').style.display = 'block';
            }, 3000);
        }

    }, 1000);
}
// stop timer {working}
document.getElementById("stop").addEventListener("click", function pauseTimer() {
    if (isTimerRunning) {
        clearInterval(countdown);
        isTimerRunning = !isTimerRunning;
        setButton.innerText = "Play";
        document.getElementById('input').style.display = 'block';
        setTimeout(function () {
            timerElement.textContent = "";
        }, 2000);

        // Clear the input value
        durationInput.value = "";
    }
    else {
        alert("Run the timer 1st to stop")
        return;
    }

})

//reset {working}
document.getElementById("reset").addEventListener("click", resetTimer);
function resetTimer() {
    clearInterval(countdown);
    const timerDuration = parseInt(durationInput.value, 10);
    if (isNaN(timerDuration) || timerDuration <= 0) {
        return;
    }
    startTimer(timerDuration);
}