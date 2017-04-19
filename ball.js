class Ball
{
   constructor(ctx, dim, pos, vel, color)
   {
      this.ctx = ctx;
      this.dim = dim;
      this.pos = pos;
      this.vel = vel;
      this.color = color;
   }
   
   draw()
   {
      this.ctx.fillStyle = this.color;
      this.ctx.fillRect(this.pos.x, this.pos.y, this.dim.w, this.dim.h);
   }
   
   move()
   {
      this.pos.x += this.vel.dx;
      this.pos.y += this.vel.dy;
   }
   
   hasPoint(pt)
   {
      return (pt.x >= this.pos.x) && (pt.x <= this.pos.x + this.dim.w) &&
             (pt.y >= this.pos.y) && (pt.y <= this.pos.y + this.dim.h);
   }
   
   click()
   {
      this.vel.dx = -(this.vel.dx * 1.15);
      this.vel.dy = -(this.vel.dy * 1.15);
   }
}
