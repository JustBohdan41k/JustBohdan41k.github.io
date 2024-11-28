
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

