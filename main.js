var canvas = getDOM('gc');
var ctx;
var boundRect;
var ballvec;
var lblCollisions;
var collisions;
var clicked;
var mousePos;
var ballCount;
var fps;
var maxBallDim;
var maxInitVel;

function main()
{
   getDOM('divCanvas').style.textAlign = 'center';
   
   ctx = canvas.getContext('2d');
   canvas.width = window.innerWidth - 100;
   canvas.height = window.innerHeight - 100;
   boundRect = canvas.getBoundingClientRect();
   ballvec = [];
   lblCollisions = getDOM('lblCollisions');
   collisions = 0;
   clicked = false;
   mousePos = null;
   ballCount = 10;
   fps = 60;
   maxBallDim = 15;
   maxInitVel = 2;
   
   // Initialize the ball objects
   for (i = 0; i < ballCount; i++)
   {
      var pt = genPointOnCanvas();
      var vel = genVelocity();
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

function genPointOnCanvas()
{
   var x = randomize(0, canvas.width - maxBallDim - 1);
   var y = randomize(0, canvas.height - maxBallDim - 1);
   return new Point(x, y);
}

function genVelocity()
{
   var dx = randomize(-maxInitVel, maxInitVel);
   var dy = randomize(-maxInitVel, maxInitVel);
   return new Velocity(dx, dy);
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

function repositionObjects()
{
   for (i = 0; i < ballvec.length; i++)
   {
      if (!isOnScreen(ballvec[i]))
         ballvec[i].pos = genPointOnCanvas();
   }
}

function isOnScreen(ball)
{
   return ball.pos.x >= 0 && ball.pos.x + ball.dim.w <= canvas.width &&
          ball.pos.y >= 0 && ball.pos.y + ball.dim.h <= canvas.height;
}

window.onresize = function()
{
   canvas.width = window.innerWidth - 100;
   canvas.height = window.innerHeight - 100;
   boundRect = canvas.getBoundingClientRect();
   repositionObjects();
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
