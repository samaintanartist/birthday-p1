const messages = [
    "I'm really grateful for our friendship.",
    "I hope this year is amazing for you.",
    "Ready for your surprise?"
];

let index = 0;

document.getElementById("text").addEventListener("click", function () {

    if (index < messages.length) {
        document.getElementById("text").innerText = messages[index];
        index++;
    }

});
