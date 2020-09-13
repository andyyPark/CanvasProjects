export class Point {
   constructor(stageWidth, stageHeight, radius, radian, color) {
      this.stageWidth = stageWidth;
      this.stageHeight = stageHeight;
      this.x = this.stageWidth / 2;
      this.y = this.stageHeight / 2;
      this.radius = radius;
      this.radian = radian;
      this.speed = 0.05;
      this.color = color;
      this.fromCenter = Math.random() * 200 + 100;
   }

   update() {
      this.x = this.fromCenter * Math.cos(this.radian)  + this.stageWidth / 2; 
      this.y = this.fromCenter * Math.sin(this.radian) + this.stageHeight / 2;

      this.radian = this.radian + this.speed;
   }

   draw(ctx) {
      ctx.beginPath();
      ctx.fillStyle = this.color;

      this.update();

      ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
      ctx.fill();
      
   }
}