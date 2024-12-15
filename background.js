const canvas = document.getElementById('spiderweb');
const ctx = canvas.getContext('2d');

// Resize canvas to fill the window
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

// Spiderweb configuration
const centerX = canvas.width / 2;
const centerY = canvas.height / 2;
const rings = 8;
const spokes = 12;
const rotationSpeed = 0.01;

let angle = 0;

function drawSpiderweb() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.save();
  ctx.translate(centerX, centerY);
  ctx.rotate(angle);

  // Draw rings
  for (let i = 1; i <= rings; i++) {
    const radius = (i / rings) * Math.min(canvas.width, canvas.height) / 2;
    ctx.beginPath();
    ctx.arc(0, 0, radius, 0, Math.PI * 2);
    ctx.strokeStyle = `rgba(255, 255, 255, ${1 - i / rings})`;
    ctx.lineWidth = 1;
    ctx.stroke();
  }

  // Draw spokes
  for (let i = 0; i < spokes; i++) {
    const theta = (i / spokes) * Math.PI * 2;
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(
      Math.cos(theta) * (Math.min(canvas.width, canvas.height) / 2),
      Math.sin(theta) * (Math.min(canvas.width, canvas.height) / 2)
    );
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.5)';
    ctx.lineWidth = 1;
    ctx.stroke();
  }

  ctx.restore();

  angle += rotationSpeed; // Increment rotation
  requestAnimationFrame(drawSpiderweb);
}

drawSpiderweb();
