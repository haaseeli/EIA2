namespace A12 {

    export class Einfacheinenkreiszeichnen extends Fish {

        draw(): void {
            let chantal: Path2D = new Path2D;
            
        //    chantal.beginPath();
            chantal.moveTo(264 - this.x, 158 + this.y);

            chantal.bezierCurveTo(264 - this.x, 158 + this.y, 348 - this.x, 106 + this.y, 357 - this.x, 161 + this.y);
            chantal.bezierCurveTo(366 - this.x, 217 + this.y, 286 - this.x, 191 + this.y, 278 - this.x, 175 + this.y);
            chantal.bezierCurveTo(271 - this.x, 162 + this.y, 230 - this.x, 264 + this.y, 222 - this.x, 193 + this.y);
            chantal.bezierCurveTo(221 - this.x, 184 + this.y, 285 - this.x, 171 + this.y, 257 - this.x, 171 + this.y);
            chantal.bezierCurveTo(247 - this.x, 171 + this.y, 230 - this.x, 146 + this.y, 228 - this.x, 125 + this.y);
            chantal.bezierCurveTo(215 - this.x, 8 + this.y, 271 - this.x, 162 + this.y, 279 - this.x, 158 + this.y);
            
            crc.stroke(chantal);
            crc.strokeStyle = "purple"; 
            crc.fill(chantal);
            crc.fillStyle = "pink";
            super.draw();
        }

        move(): void {
            this.x += this.dx;
            this.y += this.dy;
            if (this.x > window.innerWidth || this.x < 0 || this.y > window.innerHeight || this.y < 0) {
                this.x = window.innerWidth;
                this.y = Math.random() * 720;
            }

    }
}
}