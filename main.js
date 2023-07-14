function clickButtons() {
    const button = document.querySelectorAll('.mds-button--cpo')[1];

    if (!button) {
        console.log('No more .mds-button--cpo buttons found. Stopping...');
        return;
    }

    button.click();

    setTimeout(() => {
        document.querySelector('#flyoutOverlay')?.click();
        setTimeout(clickButtons, 2000);
    }, 2000);
}

// Call the function to start the process
clickButtons();
console.log('Done!');
