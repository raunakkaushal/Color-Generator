const btn = document.querySelector('button');
const colorBox = document.querySelector('#color-box');
const rgbCode = document.querySelector("#rgbCode");
const hexCode = document.querySelector("#hexCode");

function getRandomColor() {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    return { rgb: `rgb(${red}, ${green}, ${blue})`, hex: rgbToHex(red, green, blue) };
}

function rgbToHex(r, g, b) {
    const toHex = (num) => num.toString(16).padStart(2, '0');
    return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}

function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        alert('Copied to clipboard!');
    }).catch(() => {
        alert('Failed to copy!');
    });
}

btn.addEventListener('click', function () {
    const { rgb, hex } = getRandomColor();
    rgbCode.textContent = `RGB Code : ${rgb}`;
    hexCode.textContent = `HEX Code : ${hex}`;
    colorBox.style.backgroundColor = rgb;

    // Show the paragraphs
    rgbCode.style.display = 'block';
    hexCode.style.display = 'block';
});

document.querySelectorAll('#rgbCode, #hexCode').forEach(p => {
    p.addEventListener('click', function () {
        const textToCopy = this.textContent.split(': ')[1];
        copyToClipboard(textToCopy);
    });
});