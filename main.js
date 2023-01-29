function preload() {}
function setup() {
  canvas = createCanvas(640, 480);
  canvas.position(110,250);
  video = createCapture(VIDEO);
  

  }
  
function take_snapshot() {
  save("woah.png");
}