
function setup() {
  createCanvas(400, 400);
  const size = width / 8;

  // 盤面を描く
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      if ((i + j) % 2 === 0) {
        fill(255);
      } else {
        fill(130);
      }
      rect(i * size, j * size, size, size);
    }
  }

  // コマを描く
  noStroke();

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 8; j++) {
      if ((i + j) % 2 === 1) {
        fill(255, 0, 0);
        circle(j * size + size / 2, i * size + size / 2, size * 0.82);
      }
    }
  }

  for (let i = 5; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      if ((i + j) % 2 === 1) {
        fill(0);
        circle(j * size + size / 2, i * size + size / 2, size * 0.82);
      }
    }
  }
}
