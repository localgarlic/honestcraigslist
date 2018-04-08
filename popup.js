function toggle() {
    console.log("toggle");
    chrome.management.getSelf(result => {
        console.log(result.id);
        chrome.management.setEnabled(result.id, !result.enabled, () => {
            console.log("done");
        });    
    });
}

const ele = document.getElementById("toggle");
ele.addEventListener("click", toggle);
