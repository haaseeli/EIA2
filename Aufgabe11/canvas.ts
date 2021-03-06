namespace Aufgabe11 {

    document.addEventListener("DOMContentLoaded", init);
    export let crc: CanvasRenderingContext2D;
    let canvas: HTMLCanvasElement;
    let fishArray: Fish1[] = [];
    let bubblesArray: Bubbles[] = [];
    let chantalArray: Einfacheinenkreiszeichnen[] = [];

// tslint:disable-next-line: typedef
    let image = new Image();

    let fps: number = 60; //brumm brumm, hier herrscht berufsverkehr

 


    function init(): void {
// tslint:disable-next-line: typedef
        canvas = document.getElementsByTagName("canvas")[0];
// tslint:disable-next-line: typedef
        crc = canvas.getContext("2d");
// tslint:disable-next-line: typedef
        image.src = "background1.png";

        crc.drawImage(image, 0, 0);
        

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

    //    crc.drawImage(image, canvas.width, canvas.height);

        for (let i: number = 0; i < 10; i++) {
            let x: number = Math.random() * canvas.width;
            let y: number = Math.random() * 700;
            let dx: number = -6;
            let dy: number = Math.random() * -1;
            let fish1: Fish1;
            fish1 = new Fish1();
            fish1.x = x;
            fish1.y = y;
            fish1.dx = dx;
            fish1.dy = dy;
            fishArray.push(fish1);
            fish1.draw();
        }

        for (let i: number = 0; i < 13; i++) {
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

        for (let i: number = 0; i < 6; i++) {
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
        update();
    }

    function update(): void {
        window.setTimeout(update, 1000 / fps);
        crc.clearRect(0, 0, canvas.width, canvas.height);
        crc.drawImage(image, 0, 0, canvas.width, canvas.height);

        for (let i: number = 0; i < fishArray.length; i++) {
            fishArray[i].update();
        }
        for (let i: number = 0; i < bubblesArray.length; i++) {
            bubblesArray[i].update();
        }
        for (let i: number = 0; i < chantalArray.length; i++) {
            chantalArray[i].update();
        }
    }

}
