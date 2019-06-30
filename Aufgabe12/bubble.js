var A12;
(function (A12) {
    class Bubble extends A12.Fish {
        draw() {
            let bubbles = new Path2D();
            bubbles.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
            A12.crc.fillStyle = "rgba(0, 0, 200, 0.3";
            A12.crc.fill(bubbles);
        }
        move() {
            this.y += this.dy;
            if (this.y < 0)
                this.y = window.innerHeight + 5;
        }
    }
    A12.Bubble = Bubble;
})(A12 || (A12 = {}));
//# sourceMappingURL=bubble.js.map