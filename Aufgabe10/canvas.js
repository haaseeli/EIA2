document.addEventListener("DOMContentLoaded", init);
let crc;
let canvas;
function init() {
    canvas = document.getElementsByTagName("canvas")[0];
    crc = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    ozean();
}
function ozean() {
    let wasser = new Path2D();
    crc.fillStyle = "#badbd0";
    wasser.rect(0, 0, canvas.width, canvas.height);
    crc.fill(wasser);
    crc.stroke(wasser);
    seeboden();
}
function seeboden() {
    let boden = new Path2D();
    crc.fillStyle = "#ad9b6d";
    boden.rect(0, 650, canvas.width, canvas.height);
    crc.fill(boden);
    crc.stroke(boden);
    algenRandomizer();
}
function algenRandomizer() {
    for (let i = 0; i < 6; i++) {
        let x = Math.random() * canvas.width;
        let y = 700;
        algen(x, y);
    }
    blasenRandomizer();
}
function algen(_x, _y) {
    let algen = new Path2D();
    crc.beginPath();
    algen.moveTo(_x, _y);
    algen.lineTo(_x + 80, _y - 100);
    algen.moveTo(_x, _y);
    algen.lineTo(_x - 80, _y - 100);
    algen.moveTo(_x, _y);
    algen.lineTo(_x, _y - 100);
    crc.lineWidth = 4;
    crc.strokeStyle = "#9dad6d";
    crc.fill(algen);
    crc.stroke(algen);
    algen.closePath();
}
function blasenRandomizer() {
    for (let i = 0; i < 5; i++) {
        let x = Math.random() * 1280;
        let y = Math.random() * 720;
        let radius = Math.min(80) * Math.random();
        blasen(x, y, radius);
    }
    fischRandomizer();
}
function blasen(_x, _y, _radius) {
    let blasen = new Path2D();
    blasen.arc(_x, _y, _radius, 0, Math.PI * 2, false);
    crc.fillStyle = "rgba(0, 0, 200, 0.3";
    crc.fill(blasen);
}
function fischRandomizer() {
    for (let i = 0; i < 4; i++) {
        let x = Math.random() * canvas.width;
        let y = Math.random() * 700;
        fisch(x, y);
    }
    steinRandomizer();
}
function fisch(_x, _y) {
    let fisch = new Path2D;
    let flosseUnten = new Path2D;
    let auge = new Path2D;
    let pupile = new Path2D;
    // POSITIONEN
    fisch.moveTo(_x, _y);
    fisch.quadraticCurveTo(_x - 100, _y + 100, _x, _y + 50); //vorne unten
    fisch.quadraticCurveTo(_x, _y + 120, _x + 300, _y + 10); //hinten unten
    fisch.quadraticCurveTo(_x + 250, _y + 50, _x + 300, _y + 100); // hinten oben
    fisch.quadraticCurveTo(_x + 150, _y - 20, _x, _y); // vorne
    flosseUnten.moveTo(_x + 100, _y + 50);
    flosseUnten.quadraticCurveTo(_x + 50, _y + 100, _x + 50, _y + 30);
    auge.arc(_x + 20, _y + 30, 10, 0, Math.PI * 2, false);
    pupile.arc(_x + 20, _y + 30, 4, 0, Math.PI * 2, false);
    // STYLE
    crc.fillStyle = "#dee5c9";
    crc.stroke(fisch);
    crc.strokeStyle = "#f4e5c8";
    crc.fill(fisch);
    crc.fillStyle = "#f4e5c8";
    crc.strokeStyle = "#f4e5c8";
    crc.fillStyle = "#faffe2";
    crc.fill(flosseUnten);
    crc.stroke(flosseUnten);
    crc.strokeStyle = "#d1b177";
    crc.stroke(auge);
    crc.fillStyle = "#d1b177";
    crc.fill(pupile);
    crc.stroke(pupile);
}
function steinRandomizer() {
    for (let i = 0; i < 3; i++) {
        let x = Math.random() * canvas.width;
        let y = 720;
        stein(x, y);
    }
}
function stein(_x, _y) {
    let stein = new Path2D;
    let krabbe = new Path2D;
    let krabbenBeine = new Path2D;
    let krabbenAuge1 = new Path2D;
    let krabbenAuge2 = new Path2D;
    stein.moveTo(_x, _y);
    stein.quadraticCurveTo(_x - 250, _y - 150, _x + 80, _y + 300);
    stein.quadraticCurveTo(_x + 400, _y - 170, _x + 200, _y - 100);
    krabbe.arc(_x + 250, _y - 130, 30, 0, Math.PI * 2, false);
    krabbenBeine.moveTo(_x + 233, _y - 106);
    krabbenBeine.lineTo(_x + 205, _y - 95);
    krabbenBeine.lineTo(_x + 215, _y - 85);
    krabbenBeine.moveTo(_x + 265, _y - 106);
    krabbenBeine.lineTo(_x + 290, _y - 85);
    krabbenBeine.lineTo(_x + 275, _y - 70);
    krabbenAuge1.arc(_x + 240, _y - 140, 5, 0, Math.PI * 2, false);
    krabbenAuge2.arc(_x + 260, _y - 140, 5, 0, Math.PI * 2, false);
    crc.fillStyle = "#3d3b3b";
    crc.fill(stein);
    crc.fillStyle = "#7c454f";
    crc.fill(krabbe);
    crc.stroke(krabbenBeine);
    crc.fillStyle = "black";
    crc.fill(krabbenAuge1);
    crc.fillStyle = "black";
    crc.fill(krabbenAuge2);
}
//# sourceMappingURL=canvas.js.map