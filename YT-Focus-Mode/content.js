// Function to add or remove the focus class from the webpage
function updateFocusMode(isEnabled) {
    if (isEnabled) {
        document.documentElement.classList.add('yt-focus-mode-active');
    } else {
        document.documentElement.classList.remove('yt-focus-mode-active');
    }
}

// Check the saved state when YouTube first loads (defaults to true)
chrome.storage.sync.get(['focusModeEnabled'], (result) => {
    const isEnabled = result.focusModeEnabled !== false; 
    updateFocusMode(isEnabled);
});

// Listen for when you click the toggle in the extension popup
chrome.storage.onChanged.addListener((changes) => {
    if (changes.focusModeEnabled) {
        updateFocusMode(changes.focusModeEnabled.newValue);
    }
});