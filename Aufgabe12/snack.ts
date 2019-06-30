namespace A12 {
  export class Snack extends Fish {
       
        constructor() {
            super(); 
            this.dx = 0;
            this.dy  = 5;
        }

    draw(): void {
            let food: Path2D = new Path2D();
            food.arc(this.x, this.y, 7, 0, 2 * Math.PI);
            crc.fillStyle = "#eeeeee";
            crc.fill(Snack);
    }

    move(): void {
            this.y += this.dy;
            if (this.y > 550) {
                this.y = 550;
            }
        }

    }
}