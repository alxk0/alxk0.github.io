
// KUZUSHIJI-MNIST
// CTC-1000-04 : INTRODUCTION TO COMPUTATION
// ALEX KIM, 08 FEB 2023

let folder = "img/";
let files = [];
let images = [];
let gridSize = 16;
let cellSize;
let currentImage = 0;

function preload() {
  for (let i = 0; i < 6000; i++) {
    files.push(i + ".png");
    images[i] = loadImage(folder + files[i]);
  }
}

function setup() {
  createCanvas(600, 600);
  cellSize = width / gridSize;
  frameRate(9);
}

function draw() {
  background(255);
  for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < gridSize; j++) {
      let x = i * cellSize;
      let y = j * cellSize;
      let index = i + j * gridSize + currentImage * gridSize * gridSize;
      index = index % images.length;
      image(images[index], x, y, cellSize, cellSize);
    }
  }
  currentImage = (currentImage + 1) % (images.length / (gridSize * gridSize));
}