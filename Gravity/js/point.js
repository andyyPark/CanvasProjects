export class Point {
   constructor(x, y, radius, speed, gravity, color) {
      this.x = x;
      this.y = y;
      this.radius = radius;
      this.speed = speed;
      this.gravity = gravity;
      this.color = color;
      this.friction = 0.9;
      this.offset = 5;
   }

   update(stageHeight) {
      if (this.y + this.radius + this.speed > stageHeight - this.offset) {
         this.speed = -1 * this.speed * this.friction;
      } else {
         this.speed = this.speed + this.gravity;
      }

      this.y = this.y + this.speed;
   }

   draw(ctx, stageHeight) {
      ctx.beginPath();
      ctx.fillStyle = `${this.color}`;

      this.update(stageHeight);

      ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
      ctx.fill();
     
   }
}