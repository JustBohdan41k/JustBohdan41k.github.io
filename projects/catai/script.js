const placeholders = ["What is the capital of France?", "How do I get to the nearest coffee shop?", "What is the weather like today?", "Can you tell me a joke?", "What is the meaning of life?", "How do I make a perfect cup of tea?", "What is the best way to learn a new language?", "Can you recommend a good book to read?", "What are some fun activities to do on a rainy day?", "How do I improve my productivity?"];
const catPfps = ["😺", "😸", "😹", "😻", "😼", "🙀", "😿", "😾"];
let messages = [];
const inputField = document.getElementById("user-input");
const sendButton = document.getElementById("send-btn");
const bubbleTemplate = `<div class="message">
                <div class="message-content">
                    <p class="timestamp">Time</p>
                    <div class="pfp">
                        <p>😺</p>
                    </div>
                    <p class="message">Hello! I'm CatAI, your feline friend. Ask me anything!</p>
                </div>
            </div>`;
const chatBox = document.getElementById("chat-box");
const wlcmMsg = document.querySelector(".wlcm");

function addMessage() {
    let userInput = inputField.value.trim();
        if (userInput) {
            wlcmMsg.style.display = "none";
            chatBox.style.display = "block";
            chatBox.innerHTML += bubbleTemplate.replace("Hello! I'm CatAI, your feline friend. Ask me anything!", userInput).replace("Time", new Date().toLocaleTimeString()).replace("😺", "👤");
        }
    sendButton.classList.add("disabled");
}
function addCatMessage() {
    chatBox.innerHTML += bubbleTemplate.replace("Hello! I'm CatAI, your feline friend. Ask me anything!", "meow ".repeat(Math.floor(Math.random() * 10 + 1))).replace("Time", new Date().toLocaleTimeString()).replace("😺", catPfps[Math.floor(Math.random() * catPfps.length)]);
}
document.addEventListener("DOMContentLoaded", () => {
    inputField.placeholder = placeholders[Math.floor(Math.random() * placeholders.length)];
    sendButton.addEventListener("click", () => {
        if (inputField.value.length > 0) {
            addMessage();
            setTimeout(() => {
                addCatMessage();
                sendButton.classList.remove("disabled");
                inputField.value = "";
            }, 3000);
        }

    });
});