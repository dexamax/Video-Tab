window.onload = function() {
    var countdownElement = document.getElementById('countdown');
    var countdown = 20;

    var interval = setInterval(function() {
        countdownElement.textContent = countdown;
        countdown--;

        if (countdown < 0) {
            clearInterval(interval);
            countdownElement.textContent = "OK";
        }
    }, 1000);
};

var script = document.createElement('script');
script.type = 'text/javascript';
script.src = '//pl22417849.highrevenuenetwork.com/7f/17/8a/7f178a840bc8e2fc6f855819c052cba9.js';
document.head.appendChild(script);
