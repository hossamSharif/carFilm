const container = document.getElementById('scribble-container');

function createScribble() {
    const svgNS = "http://www.w3.org/2000/svg";
    const svg = document.createElementNS(svgNS, "svg");
    svg.setAttribute("class", "scribble");
    svg.setAttribute("width", window.innerWidth);
    svg.setAttribute("height", window.innerHeight);

    const path = document.createElementNS(svgNS, "path");
    const d = generateRandomPath();
    path.setAttribute("d", d);
    svg.appendChild(path);

    container.appendChild(svg);
}

function generateRandomPath() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    let d = `M${Math.random() * width},${Math.random() * height}`;
    for (let i = 0; i < 10; i++) {
        d += ` Q${Math.random() * width},${Math.random() * height} ${Math.random() * width},${Math.random() * height}`;
    }
    return d;
}

function init() {
    for (let i = 0; i < 20; i++) {
        createScribble();
    }
}

window.addEventListener('resize', () => {
    container.innerHTML = '';
    init();
});

init();