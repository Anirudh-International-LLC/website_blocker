// Description: This file contains the JavaScript code for the popup.html file

// Get the input element


document.addEventListener("DOMContentLoaded", function() {
    const inputElement = document.getElementById("URL");     
    // Select the button and input elements by their IDs
    document.getElementById("submitButton").addEventListener("click", function() {
        buttonclick(inputElement);
    });});

function buttonclick(inputElement){

    const url = inputElement.value;

    // Get the hatedURLs array from local storage
    chrome.storage.local.get('bannedURL', (result) => {
        let hatedURLs = result.bannedURL || [];

        for (let i = 0; i < hatedURLs.length; i++) {
            if (hatedURLs[i] === url) {
                alert("This website is already banned");
                return;
            }
        }

        // Add the URL to the array
        hatedURLs.push(url);
        chrome.storage.local.set({'bannedURL': hatedURLs});

        // Clear the input field
        inputElement.value = '';

        document.getElementById("responseMessage").innerHTML = "Blocked URL: " + url;

        // Log the updated array
        console.log(hatedURLs);
    });
};