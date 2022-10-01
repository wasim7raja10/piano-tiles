function makeCanvas() {
  const canvas = document.createElement("div");
  canvas.classList.add("canvas");
  document.querySelector("body").appendChild(canvas);
  for (let i = 0; i < 2000; i++) {
    const rows = document.createElement("div");
    rows.classList.add("rows");
    rows.innerHTML = `
        <div class="white-tiles"></div>
        <div class="white-tiles"></div>
        <div class="white-tiles"></div>
        <div class="white-tiles"></div>
    `;
    const randPosition = Math.floor(Math.random() * 4);
    rows
      .querySelectorAll(".white-tiles")
      [randPosition].classList.add("black-tile");
    canvas.appendChild(rows);
  }
}

makeCanvas();
