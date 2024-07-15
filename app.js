window.onload = function() {
    var countdownElement = document.getElementById('countdown');
    var okButton = document.getElementById('okButton');
    var countdown = 20;

    var interval = setInterval(function() {
        countdownElement.textContent = countdown;
        countdown--;

        if (countdown < 0) {
            clearInterval(interval);
            countdownElement.textContent = "නිල් පාට බටන් එක ඔබන්න";
            countdownElement.classList.add('small-text'); // Add class to change font size
            okButton.style.display = 'block';
        }
    }, 1000);
};


