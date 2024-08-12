function startTimer(duration, display) {
    var timer = duration;
    var interval = setInterval(function() {
        var seconds = parseInt(timer, 10);
        display.textContent = seconds;
        if (timer <= 0) {
            clearInterval(interval);
            window.location.href = "unblock.html";
        } else {
            timer--;
        }
    }, 1000);
}

document.addEventListener("DOMContentLoaded", function() {
    chrome.storage.local.get('timer_set_for_web_blocker', function(result) {
        const time = result.timer_set_for_web_blocker || 10;
        display = document.getElementById('timer');
    startTimer(time, display);});
});