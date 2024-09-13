interface ScribbleOptions {
  canvas: HTMLCanvasElement;
  width: number;
  height: number;
  speed: number;
  color: string;
  thicknessRange: [number, number];
  deviationRange: [number, number];
  density: number;
  }
  
  export class Scribble {
    private thickness: number;
    private canvas: HTMLCanvasElement;
    private ctx: CanvasRenderingContext2D;
    private width: number;
    private height: number;
    private speed: number;
    private color: string;
    private leftScribbleX: number;
    private rightScribbleX: number; 
   
  private thicknessRange: [number, number];
  private deviationRange: [number, number];
  private density: number;
  private scribbles: { x: number; thickness: number; }[] = [];
  
    constructor(options: ScribbleOptions) { 
      this.thickness = Math.random() * 2 + 1;
      this.canvas = options.canvas;
      this.ctx = this.canvas.getContext('2d')!;
      this.width = options.width;
      this.height = options.height;
      this.speed = options.speed;
      this.color = options.color;
      this.leftScribbleX = 0;
      this.rightScribbleX = this.width;

      this.thicknessRange = options.thicknessRange;
    this.deviationRange = options.deviationRange;
    this.density = options.density;
    }
  
     drawScribble(x: number) {
      this.ctx.lineWidth = this.thickness;
      this.ctx.beginPath();
      this.ctx.moveTo(x, 0);
  
      for (let y = 0; y < this.height; y += 5) {
        const deviation = Math.random() * 5 - 2.5; // Random deviation from vertical
        this.ctx.lineTo(x + deviation, y);
      }
  
      this.ctx.stroke();
    }

    start() {
      this.canvas.width = this.width;
      this.canvas.height = this.height;
  
      const animate = () => {
        this.ctx.clearRect(0, 0, this.width, this.height);
        this.ctx.strokeStyle = this.color;
        this.ctx.lineWidth = 2;
  
        // Left scribble
        this.ctx.beginPath();
        this.ctx.moveTo(this.leftScribbleX, 0);
        this.ctx.lineTo(this.leftScribbleX, this.height);
        this.ctx.stroke();
  
        // Right scribble
        this.ctx.beginPath();
        this.ctx.moveTo(this.rightScribbleX, 0);
        this.ctx.lineTo(this.rightScribbleX, this.height);
        this.ctx.stroke();
  
        // Update scribble positions
        this.leftScribbleX += this.speed;
        this.rightScribbleX -= this.speed;
  
         

        for (let i = 0; i < this.density; i++) {
          const x = Math.random() * this.width;
          const thickness = Math.random() * (this.thicknessRange[1] - this.thicknessRange[0]) + this.thicknessRange[0];
          this.scribbles.push({ x, thickness });
        }
  
        this.scribbles.forEach(scribble => {
          this.drawScribble(scribble.x);
        });

      };
  
      animate();
    }
  }
  
 