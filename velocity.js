class Velocity
{
   constructor(dx, dy)
   {
      this.dx = dx;
      this.dy = dy;
   }
   
   addDdx(ddx)
   {
      this.dx += ddx;
   }
   
   addDdy(ddy)
   {
      this.dy += ddy;
   }
}

