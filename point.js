class Point
{
   constructor(x, y)
   {
      this.x = x;
      this.y = y;
   }
   
   addDx(dx)
   {
      this.x += dx;
   }
   
   addDy(dy)
   {
      this.y += dy;
   }
   
   addVel(vel)
   {
      this.addDx(vel.dx);
      this.addDy(vel.dy);
   }
}

class Dimensions
{
   constructor(w, h)
   {
      this.w = w;
      this.h = h;
   }
}

