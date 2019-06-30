var A12;
(function (A12) {
    document.addEventListener("DOMContentLoaded", init);
    let canvas;
    let fishArray = [];
    let bubbleArray = [];
    let chantalArray = [];
    let image = new Image();
    let fps = 60; //brumm brumm, hier herrscht berufsverkehr
    function init() {
        canvas = document.getElementsByTagName("canvas")[0];
        A12.crc = canvas.getContext("2d");
        image.src = "background1.png";
        A12.crc.drawImage(image, 0, 0);
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        /*    for (let i: number = 0; i < 10; i++) {
                let x: number = Math.random() * canvas.width;
                let y: number = Math.random() * 700;
                let dx: number = -6;
                let dy: number = Math.random() * -1;
                let fish1: Fish;
                fish1 = new Fish();
                fish1.x = x;
                fish1.y = y;
                fish1.dx = dx;
                fish1.dy = dy;
                fishArray.push(fish1);
                fish1.draw();
            }*/
        for (let i = 0; i < 5; i++) {
            let fish = new A12.Fish();
            fishArray.push(fish);
        }
        for (let i = 0; i < 5; i++) {
            let chantal = new A12.Einfacheinenkreiszeichnen();
            chantalArray.push(chantal);
        }
        for (let i = 0; i < 15; i++) {
            let bubble = new A12.Bubble();
            bubbleArray.push(bubble);
        }
        /*       for (let i: number = 0; i < 13; i++) {
                   let x: number = Math.random() * canvas.width;
                   let y: number = Math.random() * 800;
                   let dx: number = 15;
                   let dy: number = -5;
                   let radius: number = Math.min(80) * Math.random();
                   let bubbles: Bubbles;
                   bubbles = new Bubbles();
                   bubbles.x = x;
                   bubbles.y = y;
                   bubbles.dx = dx;
                   bubbles.dy = dy;
                   bubbles.radius = radius;
                   bubblesArray.push(bubbles);
                   bubbles.draw();
             }
        */
        /*       for (let i: number = 0; i < 6; i++) {
                   let x: number = Math.random() * canvas.width;
                   let y: number = Math.random() * 1000;
                   let dx: number = -6;
                   let dy: number = Math.random() * -0.5;
                   let chantal: Einfacheinenkreiszeichnen;
                   chantal = new Einfacheinenkreiszeichnen();
                   chantal.x = x;
                   chantal.y = y;
                   chantal.dx = dx;
                   chantal.dy = dy;
                   chantalArray.push(chantal);
                   chantal.draw();
             }
        */
        update();
    }
    function update() {
        window.setTimeout(update, 1000 / fps);
        A12.crc.clearRect(0, 0, canvas.width, canvas.height);
        A12.crc.drawImage(image, 0, 0, canvas.width, canvas.height);
        for (let i = 0; i < fishArray.length; i++) {
            fishArray[i].update();
        }
        for (let i = 0; i < bubbleArray.length; i++) {
            bubbleArray[i].update();
        }
        for (let i = 0; i < chantalArray.length; i++) {
            chantalArray[i].update();
        }
    }
})(A12 || (A12 = {}));
//# sourceMappingURL=canvas.js.map