var Aufgabe11;
(function (Aufgabe11) {
    document.addEventListener("DOMContentLoaded", init);
    let canvas;
    let fishArray = [];
    let bubblesArray = [];
    let fps = 30;
    // let image: ImageData;
    function init() {
        // tslint:disable-next-line: typedef
        let canvas = document.getElementsByTagName("canvas")[0];
        // tslint:disable-next-line: typedef
        let crc = canvas.getContext("2d");
        // tslint:disable-next-line: typedef
        let image = new Image();
        image.src = "background1.png";
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        crc.drawImage(image, canvas.width, canvas.height);
        for (let i = 0; i < 10; i++) {
            let x = Math.random() * canvas.width;
            let y = Math.random() * 700;
            let dx = -4 + -2;
            let dy = Math.random() * -1;
            let fish1;
            fish1 = new Aufgabe11.Fish1();
            fish1.x = x;
            fish1.y = y;
            fish1.dx = dx;
            fish1.dy = dy;
            fishArray.push(fish1);
            fish1.draw();
        }
        for (let i = 0; i < 13; i++) {
            let x = Math.random() * canvas.width;
            let y = Math.random() * 800;
            let dx = -5;
            let dy = Math.random() * -0.5;
            let radius = Math.min(80) * Math.random();
            let bubbles;
            bubbles = new Aufgabe11.Bubbles();
            bubbles.x = x;
            bubbles.y = y;
            bubbles.dx = dx;
            bubbles.dy = dy;
            bubbles.radius = radius;
            bubblesArray.push(bubbles);
            bubbles.draw();
        }
        update();
    }
    function update() {
        window.setTimeout(update, 1000 / fps);
        Aufgabe11.crc.clearRect(0, 0, canvas.width, canvas.height);
        for (let i = 0; i < fishArray.length; i++) {
            fishArray[i].update();
        }
        for (let i = 0; i < bubblesArray.length; i++) {
            bubblesArray[i].update();
        }
    }
})(Aufgabe11 || (Aufgabe11 = {}));
//# sourceMappingURL=canvas.js.map