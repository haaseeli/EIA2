namespace Aufgabe11 {
    
    export class Bubbles {
        x: number;
        y: number;
        dx: number;
        dy: number;
        radius: number;

        draw(): void {

            let bubbles: Path2D = new Path2D();
            bubbles.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
            crc.fillStyle = "rgba(0, 0, 200, 0.3";

            crc.fill(bubbles);
   
        }

        update(): void {
            this.move();
            this.draw();
        }

        move(): void {
            this.y += this.dy;
            if (this.y < 0)
                this.y = window.innerHeight + 9;
        }
        }
    }
}