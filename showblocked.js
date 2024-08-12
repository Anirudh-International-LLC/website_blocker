document.addEventListener("DOMContentLoaded", function() {
    chrome.storage.local.get('bannedURL', function(result) {
        const bannedURLs = result.bannedURL || [];
        const blockedElement = document.getElementById('blocked');
        
        blockedElement.textContent = bannedURLs.join(', ');
    const inputElement = document.getElementById("URL");     
    // Select the button and input elements by their IDs
    document.getElementById("submitButton").addEventListener("click", function() {
        buttonclick(inputElement);
    });});});

function buttonclick(inputElement){
    // Get the value from the input field
    const url = inputElement.value;

    // Get the hatedURLs array from local storage
    chrome.storage.local.get('bannedURL', (result) => {
        let hatedURLs = result.bannedURL || [];

        const index = hatedURLs.indexOf(url);

        if (index !== -1) {
            // Remove the URL from the array
            hatedURLs.splice(index, 1);
            chrome.storage.local.set({'bannedURL': hatedURLs});
            inputElement.value = '';
            document.location.href='popup.html';
            console.log(hatedURLs);}

        else{
            alert("URL not found in the list");
            inputElement.value = '';
        }

        
    });
};