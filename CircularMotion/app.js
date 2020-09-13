import { Point } from './js/point.js';

class App {
   constructor() {
      this.canvas = document.createElement('canvas');
      this.ctx = this.canvas.getContext('2d');
      document.body.appendChild(this.canvas);

      this.points = [];
      this.totalPoints = 80;
      this.colors = [
         '#e8ded2',
         '#a3d2ca',
         '#5eaaa8',
         '#056676'
      ];

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
      this.ctx.fillStyle = 'rgba(255, 255, 255, 0.09)';
      this.ctx.fillRect(0, 0, this.stageWidth, this.stageHeight);
      this.points.forEach(points => {
         points.draw(this.ctx);
      });
      requestAnimationFrame(() => this.animate())
   }

   init() {
      this.points = [];
      for (let i = 0; i < this.totalPoints; i++) {
         const point = new Point(
            this.stageWidth, 
            this.stageHeight,
            Math.floor(Math.random() * 10) + 5,
            2 * Math.random() * Math.PI,
            this.colors[Math.floor(Math.random() * this.colors.length)]
         );
         this.points[i] = point;
      }
   }
}

window.onload = () => {
   new App();
}