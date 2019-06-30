var A12;
(function (A12) {
    class Fish {
        constructor() {
            this.x = Math.random() * A12.crc.canvas.width;
            this.y = Math.random() * A12.crc.canvas.height;
            this.dx = Math.random() * 10 - 5;
            this.dy = Math.random() * 10 - 5;
        }
        draw() {
            let fish = new Path2D;
            let dontfloss = new Path2D;
            let eye = new Path2D;
            let pupil = new Path2D;
            // POSITIONEN
            fish.moveTo(this.x, this.y);
            fish.quadraticCurveTo(this.x - 100, this.y + 100, this.x, this.y + 50);
            fish.quadraticCurveTo(this.x, this.y + 120, this.x + 300, this.y + 10);
            fish.quadraticCurveTo(this.x + 250, this.y + 50, this.x + 300, this.y + 100);
            fish.quadraticCurveTo(this.x + 150, this.y - 20, this.x, this.y);
            dontfloss.moveTo(this.x + 100, this.y + 50);
            dontfloss.quadraticCurveTo(this.x + 50, this.y + 100, this.x + 50, this.y + 30);
            eye.arc(this.x + 20, this.y + 30, 10, 0, Math.PI * 2, false);
            pupil.arc(this.x + 20, this.y + 30, 4, 0, Math.PI * 2, false);
            // STYLE
            A12.crc.fillStyle = "#dee5c9";
            A12.crc.stroke(fish);
            A12.crc.strokeStyle = "#f4e5c8";
            A12.crc.fill(fish);
            A12.crc.fillStyle = "#f4e5c8";
            A12.crc.strokeStyle = "#f4e5c8";
            A12.crc.fillStyle = "#faffe2";
            A12.crc.fill(dontfloss);
            A12.crc.stroke(dontfloss);
            A12.crc.strokeStyle = "#d1b177";
            A12.crc.stroke(eye);
            A12.crc.fillStyle = "#fff";
            A12.crc.fill(pupil);
            A12.crc.stroke(pupil);
        }
        update() {
            this.move();
            this.draw();
        }
        move() {
            this.x += this.dx;
            this.y += this.dy;
            if (this.x > window.innerWidth || this.x < 0 || this.y > window.innerHeight || this.y < 0) {
                this.x = window.innerWidth;
                this.y = Math.random() * 720;
            }
        }
    }
    A12.Fish = Fish;
})(A12 || (A12 = {}));
//# sourceMappingURL=fish.js.map