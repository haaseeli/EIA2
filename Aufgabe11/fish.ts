namespace Aufgabe11 {

    export class Fish1 {
        x: number;
        y: number;
        dx: number;
        dy: number;

        draw(): void {
            let fish: Path2D = new Path2D;
            let flosseUnten: Path2D = new Path2D;
            let auge: Path2D = new Path2D;
            let pupile: Path2D = new Path2D;
        
        
            // POSITIONEN
            fish.moveTo(this.x, this.y);
            fish.quadraticCurveTo(this.x - 100, this.y + 100, this.x, this.y + 50);
            fish.quadraticCurveTo(this.x, this.y + 120, this.x + 300, this.y + 10);
            fish.quadraticCurveTo(this.x + 250, this.y + 50, this.x + 300, this.y + 100);
            fish.quadraticCurveTo(this.x + 150, this.y - 20, this.x, this.y);
            
            flosseUnten.moveTo(this.x + 100, this.y + 50);
            flosseUnten.quadraticCurveTo(this.x + 50, this.y + 100, this.x + 50, this.y + 30);
        
            auge.arc(this.x + 20, this.y + 30, 10, 0, Math.PI * 2, false);
            pupile.arc(this.x + 20, this.y + 30, 4, 0, Math.PI * 2, false);
            
            // STYLE
            crc.fillStyle = "#dee5c9";
            crc.stroke(fish);
            crc.strokeStyle = "#f4e5c8";
            crc.fill(fish);
        
            crc.fillStyle = "#f4e5c8";
            crc.strokeStyle = "#f4e5c8";
            crc.fillStyle = "#faffe2";
            crc.fill(flosseUnten);
            crc.stroke(flosseUnten);
        
            crc.strokeStyle = "#d1b177";
            crc.stroke(auge);
        
            crc.fillStyle = "#d1b177";
            crc.fill(pupile);
            crc.stroke(pupile);

        }

        update(): void {
            this.move();
            this.draw();
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
