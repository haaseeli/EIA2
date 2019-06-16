var Aufgabe11;
(function (Aufgabe11) {
    class Fish1 {
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
            Aufgabe11.crc.fillStyle = "#dee5c9";
            Aufgabe11.crc.stroke(fish);
            Aufgabe11.crc.strokeStyle = "#f4e5c8";
            Aufgabe11.crc.fill(fish);
            Aufgabe11.crc.fillStyle = "#f4e5c8";
            Aufgabe11.crc.strokeStyle = "#f4e5c8";
            Aufgabe11.crc.fillStyle = "#faffe2";
            Aufgabe11.crc.fill(dontfloss);
            Aufgabe11.crc.stroke(dontfloss);
            Aufgabe11.crc.strokeStyle = "#d1b177";
            Aufgabe11.crc.stroke(eye);
            Aufgabe11.crc.fillStyle = "#d1b177";
            Aufgabe11.crc.fill(pupil);
            Aufgabe11.crc.stroke(pupil);
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
    Aufgabe11.Fish1 = Fish1;
})(Aufgabe11 || (Aufgabe11 = {}));
//# sourceMappingURL=fish.js.map