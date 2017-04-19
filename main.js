var canvas = getDOM('gc');
var ctx;
var boundRect;
var ballvec;
var lblCollisions;
var collisions;
var clicked;
var mousePos;

function main()
{
   getDOM('p').style.textAlign = 'center';
   
   ctx = canvas.getContext('2d');;
   boundRect = canvas.getBoundingClientRect();
   ballvec = [];
   lblCollisions = getDOM('lblCollisions');
   collisions = 0;
   clicked = false;
   mousePos = null;
   
   var ballCount = 10;
   var fps = 60;
   var maxBallDim = 15;
   var maxInitVel = 2;
   
   // Initialize the ball objects
   for (i = 0; i < ballCount; i++)
   {
      var x = randomize(0, canvas.width - maxBallDim - 1);
      var y = randomize(0, canvas.height - maxBallDim - 1);
      var pt = new Point(x, y);
      
      var dx = randomize(-maxInitVel, maxInitVel);
      var dy = randomize(-maxInitVel, maxInitVel);
      var vel = new Velocity(dx, dy);
      
      var w = h = maxBallDim;
      var dim = new Dimensions(w, h);
      
      var color = "#00ffff";
      
      var ball = new Ball(ctx, dim, pt, vel, color)
      
      ballvec.push(ball);
   }
   
   setInterval(drawAll, 1000/fps);
}

function drawAll()
{
   ctx.fillStyle = '#000000';
   ctx.fillRect(0, 0, canvas.width, canvas.height);
   
   for (i = 0; i < ballvec.length; i++)
   {
      ballvec[i].draw();
      ballvec[i].move();
      detectCollisions(ballvec[i]);
      lblCollisions.innerHTML = collisions;
      
      if (clicked && ballvec[i].hasPoint(mousePos))
      {
         ballvec[i].click();
         clicked = false;
      }
   }
}
  
function randomize(minimum, maximum)
{
   return Math.random() * (maximum - minimum) + minimum;
}

function detectCollisions(ball)
{
   if (ball.pos.x + ball.dim.w + ball.vel.dx >= canvas.width ||
       ball.pos.x <= 0)
   {
      ball.vel.dx = -ball.vel.dx;
      collisions++;
   }
   
   if (ball.pos.y + ball.dim.h + ball.vel.dy >= canvas.height ||
       ball.pos.y <= 0)
   {
      ball.vel.dy = -ball.vel.dy;
      collisions++;
   }
}

function getDOM(id)
{
   return document.getElementById(id);
}

window.onresize = function()
{
   boundRect = canvas.getBoundingClientRect();
   console.log(
      'canvas @ (' + boundRect.top + ', ' + boundRect.left + ')'
   );
}

canvas.onmousedown = function(event)
{
   clicked = true;
   var x = parseInt(event.clientX - boundRect.left);
   var y = parseInt(event.clientY - boundRect.top);
   mousePos = new Point(x, y);
   
   console.log('mouseclick @ (' + x + ', ' + y + ')');
}
