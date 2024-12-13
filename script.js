
function changeText(event) {
    event.preventDefault();
    let link = document.getElementById("download-link");
    let originalText = link.innerHTML;
    link.innerHTML = "Thank you for downloading!";
    setTimeout(function() {
        link.innerHTML = originalText;
    }, 5000);
    window.location.href = event.currentTarget.href; 
}

function isMobile() {
    return /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
}

if (isMobile()) {
    location.replace("unavailable.html");
}

setInterval(() => {
    if (!isMobile() && location.pathname.endsWith("unavailable.html")) {
        location.replace("index.html");
    }
}, 1000);
