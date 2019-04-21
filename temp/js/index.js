console.log("hello world");

var i=0, text;
text = "Welcome To Troy Web";

function typingText() {
    if (i<text.length) {
        document.getElementById('text').innerHTML += text.charAt(i);
        i++;
        // duration of effecyt
        setTimeout(typingText, 50);
    }
    document.getElementById('text').innerHTML = "";
};

function clearText() {
    document.getElementById('text').innerHTML = "";
}

setInterval(typingText(), 3000);

// window.setInterval(function () {
//     typingText();
// }, 100);