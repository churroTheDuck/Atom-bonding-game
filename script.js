var compound;
var electrons = [];
var selectedElectron = 5;
var table = [
  ["H", "Li", "Na", "K", "Rb", "Cs", "Fr"],
  ["Be", "Mg", "Ca", "Sr", "Ba", "Ra"],
  ["B", "Al", "Ga", "In", "Tl"],
  ["N", "P", "As", "Sb", "Bi"],
  ["O", "S", "Se", "Te", "Po"],
  ["F", "Cl", "Br", "I", "At"],
]

function preload() {
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
  ellipseMode(CENTER);
  textAlign(CENTER, CENTER);
  electrons = [
    { x: width / 3 - 50, y: height / 2 - 140, bond: -1 },
    { x: width / 3 + 50, y: height / 2 - 140, bond: -1 },
    { x: width / 3 - 50, y: height / 2 + 140, bond: -1 },
    { x: width / 3 + 50, y: height / 2 + 140, bond: -1 },
    { x: width / 3 - 140, y: height / 2 - 50, bond: -1 },
    { x: width / 3 + 140, y: height / 2 - 50, bond: 5 },
    { x: width / 3 - 140, y: height / 2 + 50, bond: -1 },
    { x: width / 3 + 140, y: height / 2 + 50, bond: -1 },
    { x: width * 2 / 3 + 50, y: height / 2 - 140, bond: -1 },
    { x: width * 2 / 3 - 50, y: height / 2 - 140, bond: -1 },
    { x: width * 2 / 3 + 50, y: height / 2 + 140, bond: -1 },
    { x: width * 2 / 3 - 50, y: height / 2 + 140, bond: -1 },
    { x: width * 2 / 3 + 140, y: height / 2 - 50, bond: -1 },
    { x: width * 2 / 3 - 140, y: height / 2 - 50, bond: -1 },
    { x: width * 2 / 3 + 140, y: height / 2 + 50, bond: -1 },
    { x: width * 2 / 3 - 140, y: height / 2 + 50, bond: -1 },
  ];
}

function draw() {
  background("#1E1E1E");
  noStroke();

  fill("#EACE5C");
  ellipse(width / 3, height / 2, 200, 200);
  fill("000000");
  textSize(100);
  text("Na", width / 3, height / 2);
  // First atom with text

  fill("#8CED8C");
  ellipse(width * 2 / 3, height / 2, 200, 200);
  fill("#000000");
  textSize(100);
  text("Cl", width * 2 / 3, height / 2);
  // Second atom with text

  for (i = 0; i < electrons.length; i++) {
    if (selectedElectron != -1 && i - 8 == selectedElectron) {
      fill("#A5D8FF")
      ellipse(electrons[i].x, electrons[i].y, 60 * sin(frameCount / 25), 60 * sin(frameCount / 25));
    }

    fill("#FFFFFF");
    ellipse(electrons[i].x, electrons[i].y, 40, 40);
    fill("#000000");
    textSize(20);
    if (i < 8) {
      text(i, electrons[i].x, electrons[i].y);
    } else {
      text(i - 8, electrons[i].x, electrons[i].y);
    }

    push();
    stroke("#FFFFFF");
    strokeWeight(40);
    if (electrons[i].bond != -1) {
      line(electrons[i].x, electrons[i].y, electrons[electrons[i].bond].x, electrons[electrons[i].bond].y);
    }
    pop();
  }
  // Electrons

  stroke("#FFFFFF");
  strokeWeight(40);
  if (selectedElectron != -1) {
    line(electrons[selectedElectron].x, electrons[selectedElectron].y, mouseX, mouseY);
  }
}

function mousePressed() {
  for (i = 0; i < electrons.length; i++) {
    if (
      electrons[i].x + 20 > mouseX
      && electrons[i].x - 20 < mouseX
      && electrons[i].y + 20 > mouseY
      && electrons[i].y - 20 < mouseY) {
      if (selectedElectron == i) {
        selectedElectron = -1;
       } else if (i < 8) {
        selectedElectron = i;
        electrons[selectedElectron].bond = -1;
      } else {
        electrons[selectedElectron].bond = i;
        selectedElectron = -1;
      }
    }
  }
}

function keyPressed() {
  print(selectedElectron);
}