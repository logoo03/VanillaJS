const colors = [
    "ACDDDE",
    "CAF1DE",
    "E1F8DC",
    "FEF8DD",
    "FFE7C7",
    "F7D8BA",
    "C8C7F9",
    "F1D3F5",
    "F6F7D4",
    "C7E8B5",
    "D9E9FA",
    "DDE7EE",
    "C1CDDB",
    "AABACA",
    "D8D2CD",
    "F2E8DA",
];

function changeBackground() {
    /** I hate the background image doesn't cover all the window,
     *   so I chose to make body.style.backgroundColor random.
     *
     *   const chosenImage = images[Math.floor(Math.random() * images.length)];
     *   const bgImage = document.querySelector('#background') || document.createElement("img");
     *   bgImage.src = `img/${chosenImage}`;
     *   document.body.appendChild(bgImage);
     */
    const chosenColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = "#" + chosenColor;
}

document.querySelector("#logout #change").onclick = changeBackground;

changeBackground();
