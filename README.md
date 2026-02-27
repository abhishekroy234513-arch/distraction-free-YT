# YouTube Focus Mode 🎯

A lightweight Google Chrome extension designed to help you stay focused by stripping away YouTube's most distracting elements. 

This extension hides the recommendations sidebar, the comments section, and Shorts, allowing you to watch the videos you actually searched for without falling down a rabbit hole. It includes a convenient popup menu to easily toggle the focus mode on and off.

## ✨ Features
* **Hides the Sidebar:** Removes recommended videos next to the video player.
* **Blocks Comments:** Completely hides the comments section under videos.
* **Removes Shorts:** Hides the Shorts shelves on the homepage/search and the Shorts icon in the navigation menu.
* **Persistent Toggle:** Uses Chrome's local storage to remember your preference. If you turn Focus Mode off, it stays off until you turn it back on.

## 🛠️ Tech Stack
* **HTML/CSS:** For the popup interface and the CSS rules that hide YouTube elements.
* **JavaScript:** For the logic handling the toggle switch, communicating with Chrome's storage API, and injecting the CSS into the webpage.
* **Manifest V3:** Built using the latest required standard for Chrome Extensions.

## 📁 File Structure
* `manifest.json`: The core configuration file for the extension.
* `content.js`: The background script that checks the toggle state and applies the focus mode to the YouTube page.
* `focus.css`: The stylesheet containing the logic to hide the specific YouTube `div` containers.
* `popup.html`: The user interface for the extension's dropdown menu.
* `popup.js`: The script that powers the toggle switch and saves the user's preference to Chrome storage.

## 🚀 How to Install & Run (Developer Mode)

Since this is an unpacked developer extension, you can install it directly from your local machine:

1. Clone or download this repository to your computer and extract the folder.
2. Open Google Chrome and navigate to `chrome://extensions/`.
3. In the top-right corner, turn on the **Developer mode** toggle switch.
4. In the top-left corner, click the **Load unpacked** button.
5. Select the `YT-Focus-Mode` folder from your computer.
6. The extension is now installed! Click the puzzle piece icon (🧩) in the top-right of Chrome and pin the extension to your toolbar for easy access.

## 💡 Usage
1. Navigate to [YouTube.com](https://www.youtube.com).
2. By default, Focus Mode is **ON**. You will notice the sidebar, comments, and Shorts are hidden.
3. Click the extension icon in your Chrome toolbar to open the popup menu.
4. Uncheck the "Block Distractions" box to turn Focus Mode off. *(Note: You may need to refresh the page the first time you toggle it to see the elements reappear).*# distraction-free-YT
Stop falling down the YouTube rabbit hole. This Chrome extension strips away recommendations and comments so you can watch what you searched for without getting distracted.
