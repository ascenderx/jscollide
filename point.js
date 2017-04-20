/****************************************************************************
 * POINT CLASS
 * This class represents a simple point value (x, y).
 * Points on the screen start at the top left corner (0, 0).
 * X values increase horizontally rightward.
 * Y values increase vertically downward.
 ****************************************************************************/
class Point
{
   /*************************************************************************
    * CONSTRUCTOR
    * Input:  x   Horizontal position
    *         y   Vertical position
    *************************************************************************/
   constructor(x, y)
   {
      this.x = x;
      this.y = y;
   }
   
   /*************************************************************************
    * ADD DX
    * This function "moves" the point in the x direction by an amount dx.
    * A positive dx (dx > 0) will move the point rightward.
    * A negative dx (dx < 0) will move the point leftward.
    * Input:  dx     Change in x
    * Output: <void>
    *************************************************************************/
   addDx(dx)
   {
      this.x += dx;
   }
   
   /*************************************************************************
    * ADD DY
    * This function "moves" the point in the y direction by an amount dy.
    * A positive dy (dy > 0) will move the point downward.
    * A negative dy (dy < 0) will move the point upward.
    * Input:  dx     Change in x
    * Output: <void>
    *************************************************************************/
   addDy(dy)
   {
      this.y += dy;
   }
   
   /*************************************************************************
    * ADD VELOCITY
    * This function "moves" the point in both the x and y directions according
    * to the Velocity object passed in.
    * Input:  vel    Velocity object
    * Output: <void>
    *************************************************************************/
   addVel(vel)
   {
      this.addDx(vel.dx);
      this.addDy(vel.dy);
   }
}

/****************************************************************************
 * DIMENSIONS CLASS
 * This class is a simple structure to store an object's width and height.
 ****************************************************************************/
class Dimensions
{
   /*************************************************************************
    * CONSTRUCTOR
    * Input:  w   Width (x-direction)
    *         h   Height (y-direction)
    *************************************************************************/
   constructor(w, h)
   {
      this.w = w;
      this.h = h;
   }
}

