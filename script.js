redButton.addEventListener('click', function() {
    // Redirect to the red page
    window.location.href = 'countDown.html';
    // Store the state of the red button
    sessionStorage.setItem('redButtonClicked', true);
});
