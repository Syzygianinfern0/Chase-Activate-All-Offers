function clickButtons() {
    const buttons = document.querySelectorAll('.mds-button--cpo');
    let button;

    // Loop through the buttons until finding one that doesn't start with "primary-action"
    for (let i = 0; i < buttons.length; i++) {
        if (!buttons[i].id.startsWith('primary-action')) {
            button = buttons[i];
            break;
        }
    }

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
