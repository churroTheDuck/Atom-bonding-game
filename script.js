var compound;
var element1;
var element2;
var element3;
var electrons = [];
var selectedElectron = 12;
var randomCompound;
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

  h2o = [
    [
      { x: width * 1 / 4 + 140, y: height / 2, bond: -1},
    ],
    [
      { x: width * 2 / 4 + 50, y: height / 2 - 140, bond: -1 },
      { x: width * 2 / 4 - 50, y: height / 2 - 140, bond: -1 },
      { x: width * 2 / 4 + 50, y: height / 2 + 140, bond: -1 },
      { x: width * 2 / 4 - 50, y: height / 2 + 140, bond: -1 },
      { x: width * 2 / 4 - 140, y: height / 2, bond: -1 },
      { x: width * 2 / 4 + 140, y: height / 2, bond: -1 },
    ],
    [
      { x: width * 3 / 4 - 140, y: height / 2, bond: -1},
    ],
  ]

  co2 = [
    [
      { x: width * 1 / 4 + 50, y: height / 2 - 140, bond: -1 },
      { x: width * 1 / 4 - 50, y: height / 2 - 140, bond: -1 },
      { x: width * 1 / 4 + 50, y: height / 2 + 140, bond: -1 },
      { x: width * 1 / 4 - 50, y: height / 2 + 140, bond: -1 },
      { x: width * 1 / 4 + 140, y: height / 2 - 50, bond: -1 },
      { x: width * 1 / 4 + 140, y: height / 2 + 50, bond: -1 },
    ],
    [
      { x: width * 2 / 4 - 140, y: height / 2 - 50, bond: -1 },
      { x: width * 2 / 4 - 140, y: height / 2 + 50, bond: -1 },
      { x: width * 2 / 4 + 140, y: height / 2 - 50, bond: -1 },
      { x: width * 2 / 4 + 140, y: height / 2 + 50, bond: -1 },
    ],
    [
      { x: width * 3 / 4 + 50, y: height / 2 - 140, bond: -1 },
      { x: width * 3 / 4 - 50, y: height / 2 - 140, bond: -1 },
      { x: width * 3 / 4 + 50, y: height / 2 + 140, bond: -1 },
      { x: width * 3 / 4 - 50, y: height / 2 + 140, bond: -1 },
      { x: width * 3 / 4 - 140, y: height / 2 - 50, bond: -1 },
      { x: width * 3 / 4 - 140, y: height / 2 + 50, bond: -1 },
    ],
  ]

  compounds = [
    {name: "H2O", c1: "H", c2: "O", c3: "H", array: h2o},
    {name: "CO2", c1: "O", c2: "C", c3: "O", array: co2},
  ]

  electrons = [
    /*
    { x: width * 1 / 4 + 50, y: height / 2 - 140, bond: -1 },
    { x: width * 1 / 4 - 50, y: height / 2 - 140, bond: -1 },
    { x: width * 1 / 4 + 50, y: height / 2 + 140, bond: -1 },
    { x: width * 1 / 4 - 50, y: height / 2 + 140, bond: -1 },
    { x: width * 1 / 4 + 140, y: height / 2 - 50, bond: -1 },
    { x: width * 1 / 4 - 140, y: height / 2 - 50, bond: -1 },
    { x: width * 1 / 4 + 140, y: height / 2 + 50, bond: -1 },
    { x: width * 1 / 4 - 140, y: height / 2 + 50, bond: -1 },
    { x: width * 2 / 4 - 50, y: height / 2 - 140, bond: -1 },
    { x: width * 2 / 4 + 50, y: height / 2 - 140, bond: -1 },
    { x: width * 2 / 4 - 50, y: height / 2 + 140, bond: -1 },
    { x: width * 2 / 4 + 50, y: height / 2 + 140, bond: -1 },
    { x: width * 2 / 4 - 140, y: height / 2 - 50, bond: -1 },
    { x: width * 2 / 4 + 140, y: height / 2 - 50, bond: -1 },
    { x: width * 2 / 4 - 140, y: height / 2 + 50, bond: -1 },
    { x: width * 2 / 4 + 140, y: height / 2 + 50, bond: -1 },
    { x: width * 3 / 4 + 50, y: height / 2 - 140, bond: -1 },
    { x: width * 3 / 4 - 50, y: height / 2 - 140, bond: -1 },
    { x: width * 3 / 4 + 50, y: height / 2 + 140, bond: -1 },
    { x: width * 3 / 4 - 50, y: height / 2 + 140, bond: -1 },
    { x: width * 3 / 4 + 140, y: height / 2 - 50, bond: -1 },
    { x: width * 3 / 4 - 140, y: height / 2 - 50, bond: -1 },
    { x: width * 3 / 4 + 140, y: height / 2 + 50, bond: -1 },
    { x: width * 3 / 4 - 140, y: height / 2 + 50, bond: -1 },*/
  ];
  randomCompound = Math.floor(Math.random() * compounds.length);
  electrons = compounds[randomCompound].array
  element1 = compounds[randomCompound].c1
  element2 = compounds[randomCompound].c2
  element3 = compounds[randomCompound].c3
}

function draw() {
  background("#1E1E1E");
  noStroke();

  fill("#8CED8C");
  ellipse(width * 1 / 4, height / 2, 200, 200);
  fill("#000000");
  textSize(100);
  text(element1, width * 1 / 4, height / 2);

  fill("#8CED8C");
  ellipse(width * 2 / 4, height / 2, 200, 200);
  fill("#000000");
  textSize(100);
  text(element2, width * 2 / 4, height / 2);
  // First atom with text

  fill("#8CED8C");
  ellipse(width * 3 / 4, height / 2, 200, 200);
  fill("#000000");
  textSize(100);
  text(element3, width * 3 / 4, height / 2);
  // Second atom with text

  for (x = 0; x < electrons.length; x++) {
    for (y = 0; y < electrons[x].length; y++) {
    if (
      (((selectedElectron % 8 == 4 || selectedElectron % 8 == 6) && y == selectedElectron - 8)
      || (selectedElectron % 8 == 5 || selectedElectron % 8 == 7) && y == selectedElectron + 8)
    ) {
      fill("#A5D8FF")
      ellipse(electrons[x][y].x, electrons[x][y].y, 60 * sin(frameCount / 25), 60 * sin(frameCount / 25));
    }

    fill("#FFFFFF");
    ellipse(electrons[x][y].x, electrons[x][y].y, 40, 40);
    text(y, electrons[x][y].x, electrons[x][y].y);

    push();
    stroke("#FFFFFF");
    strokeWeight(40);
    if (electrons[x][y].bond != -1) {
      line(electrons[x][y].x, electrons[x][y].y, electrons[electrons[x][y].bond].x, electrons[electrons[x][y].bond].y);
    }
    pop();
    }
  }
  // Electrons

  stroke("#FFFFFF");
  strokeWeight(40);
  if (selectedElectron != -1) {
    line(electrons[selectedElectron].x, electrons[selectedElectron].y, mouseX, mouseY);
  }
}

/*function mousePressed() {
  for (i = 0; i < electrons.length; i++) {
    if (
      electrons[i].x + 20 > mouseX
      && electrons[i].x - 20 < mouseX
      && electrons[i].y + 20 > mouseY
      && electrons[i].y - 20 < mouseY) {
      if (selectedElectron == i) {
        selectedElectron = -1;
       } else if (
        (i < 16 && i > 8 && (i == 12 || i == 14 || i == 13 || i == 15))
        ) {
        selectedElectron = i;
        electrons[selectedElectron].bond = -1;
      } else if (
        (((selectedElectron % 8 == 4 || selectedElectron % 8 == 6) && i == selectedElectron - 8)
      || (selectedElectron % 8 == 5 || selectedElectron % 8 == 7) && i == selectedElectron + 8)
      ) {
        electrons[selectedElectron].bond = i;
        selectedElectron = -1;
      }
    }
  }
}*/

function keyPressed() {
}