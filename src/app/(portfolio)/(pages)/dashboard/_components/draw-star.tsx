export default function drawStars(canvas: HTMLCanvasElement, isNight: boolean) {
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  if (isNight) {
    for (let i = 0; i < 50; i++) {
      ctx.fillStyle = 'white';
      ctx.beginPath();
      ctx.arc(
        Math.random() * canvas.width,
        Math.random() * canvas.height,
        Math.random() * 2,
        0,
        Math.PI * 2
      );
      ctx.fill();
    }
  }
}
