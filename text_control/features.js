let text = document.getElementById("text");
let color = document.getElementById("color");
let fontSize = document.getElementById("fontSize");
let fontStyle = document.getElementById("fontStyle");
let fontWeight = document.getElementById("fontWeight");
let output = document.getElementById("output");

text.addEventListener("keyup", function () {
    output.innerText = this.value;
});

color.addEventListener("change", function () {
    output.style.color = this.value;
});

fontSize.addEventListener("change", function () {
    output.style.fontSize = this.value+"px";
});

fontStyle.addEventListener("change", function () {
    output.style.fontFamily = this.value;
});

fontWeight.addEventListener("change", function () {
    output.style.fontWeight = this.value;
});