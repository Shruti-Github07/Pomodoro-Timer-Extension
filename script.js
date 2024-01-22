function startTimer(durationInSeconds) {
    let timerElement = document.getElementById("timer");
    let timer = durationInSeconds;
    
    let countdown = setInterval(function () {
      let minutes = Math.floor(timer / 60);
      let seconds = timer % 60;

      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;

      timerElement.textContent = minutes + ":" + seconds;

      if (--timer < 0) {
        clearInterval(countdown);
        timerElement.textContent = "Time's up!";
      }
    }, 1000);
  }

  // Set the duration of the timer in seconds
  const timerDuration = 300; // 5 minutes
  startTimer(timerDuration);