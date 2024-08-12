chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
        // Once the tab has completely loaded, execute your code
        chrome.storage.local.get('bannedURL').then(function (data) {
            var bannedURL = data.bannedURL;
            console.log(bannedURL);
            if (bannedURL && Array.isArray(bannedURL)) {
                const activeTabURL = tab.url;
                
                console.log("Current URL: " + activeTabURL);
                
                for (let i = 0; i < bannedURL.length; i++) {
                    if (activeTabURL.includes(bannedURL[i])) {
                        chrome.tabs.remove(tabId);
                        break; // Exit loop once the tab is closed
                    }
                }
            }
        });
    }
);
