function toggle() {
    console.log("toggle");
    // chrome.management.getSelf(result => {
    //     console.log(result.id);
    //     chrome.management.setEnabled(result.id, !result.enabled, () => {
    //         console.log("done");
    //     });    
    // });

    chrome.storage.local.get("hcl", function(result) {
        console.log(result.hcl);
        if (result.hcl == "true") {
            chrome.storage.local.set({"hcl": "false"}, function() {});
        }
        
        if (result.hcl == "false") {
            chrome.storage.local.set({"hcl": "true"}, function() {});
        }

        chrome.tabs.reload();
      });
}

const ele = document.getElementById("toggle");
ele.addEventListener("click", toggle);
