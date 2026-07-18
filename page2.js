const messages = [
    "goodboy u clicked on it 😳",
    "survival instincts of a tomato LMAO",
    "what if it turned out that i was planning to hack u with that link to begin with?",
    "Well i barely know how to do type shi like this",
    "i can't hack u even if i wanted to",
    "Right?",
    ":D",
    "Well u gotta be full of energy clicking that much",
    "one more thing one more thing",
    "hmm.. i actually forgot what was i about to say",
    "maybe something that starts with H.. ends with Y...",
    "I'm not sure",
    "hold on",
    "i think i remember now",
    "wanna know what i wanted to say?",
    "hmm..",
    "if so click this pink button -0-!",
    "Why are you clicking again on text 🥀",
    "I told u to click Ready!!",
    "CLICK IT NOW",
    "WHY DIDN'T YOU JUST CLICK IT",
    "bruh ─⁠.⁠─",
    "alright im leaving keep clicking if u want"
];

let index = 0;

document.getElementById("text").addEventListener("click", function () {

    if (index < messages.length) {
        document.getElementById("text").innerText = messages[index];
        index++;
    }

});
