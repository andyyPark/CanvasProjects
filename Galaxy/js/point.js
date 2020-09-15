export class Point {
   constructor(x, y, radius, color) {
      this.x = x;
      this.y = y;
      this.radius = radius;
      this.color = color;
   }

   update() {
      
   }

   draw(ctx, mousedown) {
      ctx.beginPath();
      ctx.shadowColor = mousedown ? null : this.color;
      ctx.shadowBlur = mousedown ? 0 : 15;
      ctx.fillStyle=this.color;

      ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
      ctx.fill();
   }
   
}
