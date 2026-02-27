document.addEventListener('DOMContentLoaded', function() {
    const toggle = document.getElementById('focusToggle');

    // Load the current saved state (defaults to checked)
    chrome.storage.sync.get(['focusModeEnabled'], function(result) {
        toggle.checked = result.focusModeEnabled !== false; 
    });

    // Save the new state when you click the toggle
    toggle.addEventListener('change', function() {
        chrome.storage.sync.set({ focusModeEnabled: toggle.checked });
    });
});