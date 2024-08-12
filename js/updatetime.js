document.addEventListener("DOMContentLoaded", function() {
    const inputElement = document.getElementById("URL");     
    // Select the button and input elements by their IDs
    document.getElementById("submitButton").addEventListener("click", function() {
        buttonclick(inputElement);
    });});

    function buttonclick(inputElement){

        const url = inputElement.value;
        if(url < 10){
            alert("Please enter a valid time");
            return;
        }
        // Get the hatedURLs array from local storage
        else{
            chrome.storage.local.set({'timer_set_for_web_blocker': url});
            // Clear the input field
            inputElement.value = '';
            // Transfer the user back to popup.html
            document.location.href = "popup.html";
        }}