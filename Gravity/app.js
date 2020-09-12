import { Point } from "./js/point.js";

class App {
   constructor() {
      this.canvas = document.createElement('canvas');
      this.ctx = this.canvas.getContext('2d');
      document.body.appendChild(this.canvas);

      this.balls = [];
      this.totalBalls = 120;
      this.colors = [
         '#d789d7',
         '#9d65c9',
         '#5d54a4',
         '#2a3d66'
      ];
      this.gravity = 1;

      this.pixelRatio = window.devicePixelRatio > 1 ? 2 : 1;

      window.addEventListener('resize', () => this.resize(), false);
      this.resize();

      requestAnimationFrame(() => this.animate());
   }

   resize() {
      this.stageWidth = document.body.clientWidth;
      this.stageHeight = document.body.clientHeight;

      this.canvas.width = this.stageWidth * this.pixelRatio;
      this.canvas.height = this.stageHeight * this.pixelRatio;
      this.ctx.scale(this.pixelRatio, this.pixelRatio);

      this.init();
   }

   animate() {
      this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);

      for (let i = 0; i < this.totalBalls; ++i) {
         const point = this.balls[i];
         point.draw(this.ctx, this.stageHeight);
      }

      requestAnimationFrame(() => this.animate());
   }

   init() {
      this.balls = [];
      for (let i = 0; i < this.totalBalls; i++) {
         const radius = Math.random() * 40 + 10;
         const point = new Point(
            Math.floor(Math.random() * (this.stageWidth - 2 * radius)) + radius,
            Math.floor(Math.random() * 200 + 100 - 2 * radius) + radius,
            radius,
            Math.floor(Math.random() * 10) + 1,
            this.gravity,
            this.colors[Math.floor(Math.random() * this.colors.length)]
         );
         this.balls[i] = point;
      }
   }
}

window.onload = () => {
   new App();
}