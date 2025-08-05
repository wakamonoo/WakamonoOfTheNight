import { useEffect, useRef } from "react";

export default function SmokeEffect() {
  const canvasRef = useRef(null);
  const particles = useRef([]);
  const particleCount = 30;
  const maxVelocity = 2;
  const targetFPS = 33;
  const canvasWidth = 400;
  const canvasHeight = 400;
  let context = null;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !canvas.getContext) return;

    const imageObj = new Image();
    imageObj.src =
      "http://www.blog.jonnycornwell.com/wp-content/uploads/2012/07/Smoke10.png";

    context = canvas.getContext("2d");
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;

    // Create particle constructor
    function Particle(ctx) {
      this.x = 0;
      this.y = 0;
      this.xVelocity = 0;
      this.yVelocity = 0;
      this.radius = 5;
      this.context = ctx;
      this.image = null;

      this.draw = function () {
        if (this.image) {
          this.context.drawImage(this.image, this.x - 128, this.y - 128);
          return;
        }

        this.context.beginPath();
        this.context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
        this.context.fillStyle = "rgba(0, 255, 255, 1)";
        this.context.fill();
        this.context.closePath();
      };

      this.update = function () {
        this.x += this.xVelocity;
        this.y += this.yVelocity;

        if (this.x >= canvasWidth || this.x <= 0) {
          this.xVelocity *= -1;
        }

        if (this.y >= canvasHeight || this.y <= 0) {
          this.yVelocity *= -1;
        }
      };

      this.setPosition = function (x, y) {
        this.x = x;
        this.y = y;
      };

      this.setVelocity = function (x, y) {
        this.xVelocity = x;
        this.yVelocity = y;
      };

      this.setImage = function (image) {
        this.image = image;
      };
    }

    function generateRandom(min, max) {
      return Math.random() * (max - min) + min;
    }

    // Create particles
    for (let i = 0; i < particleCount; i++) {
      const p = new Particle(context);
      p.setPosition(
        generateRandom(0, canvasWidth),
        generateRandom(0, canvasHeight)
      );
      p.setVelocity(
        generateRandom(-maxVelocity, maxVelocity),
        generateRandom(-maxVelocity, maxVelocity)
      );
      particles.current.push(p);
    }

    imageObj.onload = function () {
      particles.current.forEach((p) => p.setImage(imageObj));
    };

    // Animation loop
    const interval = setInterval(() => {
      context.fillStyle = "#6f553f";

      context.fillRect(0, 0, canvasWidth, canvasHeight);

      particles.current.forEach((p) => {
        p.update();
        p.draw();
      });
    }, 1000 / targetFPS);

    // Cleanup on unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 left-0 z-0 pointer-events-none"
      style={{ width: "100%", height: "100%" }}
    />
  );
}
