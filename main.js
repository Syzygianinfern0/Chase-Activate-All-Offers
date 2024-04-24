var intervalId = setInterval(function() {
    // Attempt to find the element and click it
    var element = document.querySelector('._4jplu9 .horizontal-margin');
    if (element) {
        element.click();
        // Wait for some time before navigating back to ensure the click is processed
        setTimeout(function() {
            window.history.back();
        }, 1000); // Adjust this delay as necessary
    } else {
        // If the element isn't found, clear the interval to stop the loop
        clearInterval(intervalId);
        console.log('Element not found, stopped the interval.');
    }
}, 2000); // This sets the interval to 2 seconds, adjust this interval as needed
