var Aufgabe11;
(function (Aufgabe11) {
    class Bubbles {
        draw() {
            let bubbles = new Path2D();
            bubbles.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
            Aufgabe11.crc.fillStyle = "rgba(0, 0, 200, 0.3";
            Aufgabe11.crc.fill(bubbles);
        }
        update() {
            this.move();
            this.draw();
        }
        move() {
            this.x += this.dx;
            this.y += this.dy;
            if (this.x + this.radius > window.innerWidth || this.x - this.radius < 0) {
                this.dx = -this.dx;
            }
            if (this.y + this.radius < window.innerHeight || this.y - this.radius < 0) {
                this.dy = -this.dy;
            }
        }
    }
    Aufgabe11.Bubbles = Bubbles;
})(Aufgabe11 || (Aufgabe11 = {}));
//# sourceMappingURL=bubbles.js.map