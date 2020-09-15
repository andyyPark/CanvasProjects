import { Point } from './js/point.js';

class App {
   constructor() {
      this.canvas = document.createElement('canvas');
      this.ctx = this.canvas.getContext('2d');
      document.body.appendChild(this.canvas);
      
      this.points = [];
      this.totalPoints = 1500;

      this.colors = [
         '#9db4ff',
         '#afc3ff',
         '#ffbb7b',
         '#FF7F66',
         '#ffebd1'
      ];

      this.radians = 0;
      this.speed = 0.003;
      this.mousedown = false;
      this.alpha = 1;

      this.pixelRatio = window.devicePixelRatio > 1 ? 2 : 1;

      window.addEventListener('resize', () => this.resize(), false);
      this.resize();

      window.addEventListener('mousedown', () => {
         this.mousedown = true;
      });

      window.addEventListener('mouseup', () => {
         this.mousedown = false;
      });
      
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
      this.ctx.fillStyle = `rgba(10, 10, 10, ${this.alpha})`;
      this.ctx.fillRect(0, 0, this.stageWidth, this.stageHeight);

      this.ctx.save();
      this.ctx.translate(this.stageWidth / 2, this.stageHeight / 2);
      this.ctx.rotate(this.radians);
      this.points.forEach(point => {
         point.draw(this.ctx, this.mousedown);
      }); 
      this.ctx.restore();
      
      this.radians = this.radians + this.speed;

      if (this.mousedown && this.alpha >= 0.03) {
         this.alpha = this.alpha - 0.01
      } else if (!this.mousedown && this.alpha < 1) {
         this.alpha = this.alpha + 0.01
      }

      requestAnimationFrame(() => this.animate());
   }

   init() {
      for (let i = 0; i < this.totalPoints; ++i) {
         const spaceX = this.stageWidth + 1000;
         const spaceY = this.stageHeight + 1000;

         const x = Math.random() * spaceX - spaceX / 2;
         const y = Math.random() * spaceY - spaceY / 2;

         const point = new Point(
            x,
            y,
            2 * Math.random(),
            this.colors[Math.floor(Math.random() * this.colors.length)]
         );

         this.points[i] = point;
      }
   }
}

window.onload = () => {
   new App();
}
