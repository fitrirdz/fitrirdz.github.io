let canvas,
  ctx,
  w,
  h,
  bubbles = [],
  bubbleCount = 100,
  bubbleChance = 0.2;

let mouse = {
  x: undefined,
  y: undefined,
};

function init() {
  canvas = document.querySelector('#canvas');
  ctx = canvas.getContext('2d');

  resizeReset();
  arrayCleanup();
  animationLoop();
}

function resizeReset() {
  w = canvas.width = window.innerWidth;
  h = canvas.height = window.innerHeight;
}

function mousemove(e) {
  mouse.x = e.x;
  mouse.y = e.y;
}

function mouseout() {
  mouse.x = undefined;
  mouse.y = undefined;
}

function animationLoop() {
  if (bubbles.length < bubbleCount && Math.random() < bubbleChance) {
    bubbles.push(new Bubble());
  }
  ctx.clearRect(0, 0, w, h);
  ctx.globalCompositeOperation = 'lighter';

  collisionDetect();
  drawScene();
  arrayCleanup();
  requestAnimationFrame(animationLoop);
}

function drawScene() {
  bubbles.map((bubble) => {
    bubble.update();
    bubble.draw();
  });
}

function arrayCleanup() {
  let dump = [];
  bubbles.map((bubble) => {
    if (!bubble.destroyed) {
      dump.push(bubble);
    }
  });
  bubbles = dump;
}

function getRandomInt(min, max) {
  return Math.round(Math.random() * (max - min)) + min;
}

function easeOutQuad(x) {
  return 1 - (1 - x) * (1 - x);
}

function easeInOutSine(x) {
  return -(Math.cos(Math.PI * x) - 1) / 2;
}

class Bubble {
  constructor() {
    this.bottom = h - 20;
    this.x = Math.random() * w;
    this.y = this.bottom;
    this.size = 0;
    this.sizeMax = getRandomInt(15, 40);
    this.targetY = this.sizeMax;
    this.tick = 0;
    this.burstedTick = 0;
    this.sizeTick = 60;
    this.moveTick = 180;
    this.burstTick = 60;
    this.bursted = false;
    this.destroyed = false;
    this.shadowColor = '#C00645';
    this.fillColor = '#EAA8AC';
  }
  draw() {
    if (!this.bursted) {
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(this.x, this.y - this.size / 2);
      ctx.bezierCurveTo(
        this.x + this.size,
        this.y - this.size,
        this.x + this.size,
        this.y - this.size / 4,
        this.x,
        this.y
      );
      ctx.bezierCurveTo(
        this.x - this.size,
        this.y - this.size / 4,
        this.x - this.size,
        this.y - this.size,
        this.x,
        this.y - this.size / 2
      );

      ctx.shadowColor = 'hsla(339.68, 100%, 50%, 1)';
      ctx.shadowBlur = 10;
      ctx.fillStyle = 'hsla(356.36, 100%, 50%, 0.3)';
      ctx.fill();
      ctx.closePath();
      ctx.restore();
    } else {
      ctx.beginPath();
      for (let a = 0; a < 10; a++) {
        let angle = 36 * a;
        let radian = (Math.PI / 180) * angle;
        let s = 10 + this.burstedTick * 1;
        let e = 20 + this.burstedTick * 0.5;
        ctx.moveTo(
          this.x + s * Math.sin(radian),
          this.y + s * Math.cos(radian)
        );
        ctx.lineTo(
          this.x + e * Math.sin(radian),
          this.y + e * Math.cos(radian)
        );
      }
      ctx.strokeStyle = 'hsla(339.68, 88.06%, 38.82%, 1)';
      ctx.stroke();
      ctx.closePath();
    }
  }
  update() {
    if (this.bursted) {
      this.burstUpdate();
    } else if (this.size < this.sizeMax) {
      this.sizeUpdate();
    } else if (this.y > this.targetY) {
      this.moveUpdate();
    } else if (this.tick === this.sizeTick + this.moveTick + this.burstTick) {
      this.bursted = true;
    }
    this.tick++;
  }
  sizeUpdate() {
    let progress = 1 - (this.sizeTick - this.tick) / this.sizeTick;
    this.size = this.sizeMax * easeOutQuad(progress);
  }
  moveUpdate() {
    let progress =
      1 - (this.moveTick - (this.tick - this.sizeTick)) / this.moveTick;
    this.y =
      this.bottom - (this.bottom - this.targetY) * easeInOutSine(progress);
  }
  burstUpdate() {
    this.burstedTick++;
    if (this.burstedTick > 15) {
      this.destroyed = true;
    }
  }
}

function collisionDetect() {
  bubbles.map((bubble) => {
    let dx = bubble.x - mouse.x;
    let dy = bubble.y - mouse.y;
    let distance = Math.sqrt(dx * dx + dy * dy);

    if (distance < bubble.size + 20) {
      bubble.bursted = true;
    }
  });
}

window.addEventListener('DOMContentLoaded', init);
window.addEventListener('resize', resizeReset);
window.addEventListener('mousemove', mousemove);
window.addEventListener('mouseout', mouseout);
