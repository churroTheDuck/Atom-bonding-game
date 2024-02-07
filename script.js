var compound;
var element1;
var element2;
var element3;
var electrons = [];
var selectedElectron = -1;
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
      { x: width * 1 / 4 + 140, y: height / 2, bond: -1, id: 0},
    ],
    [
      { x: width * 2 / 4 + 50, y: height / 2 - 140, bond: -1, id: 1},
      { x: width * 2 / 4 - 50, y: height / 2 - 140, bond: -1, id: 2},
      { x: width * 2 / 4 + 50, y: height / 2 + 140, bond: -1, id: 3},
      { x: width * 2 / 4 - 50, y: height / 2 + 140, bond: -1, id: 4},
      { x: width * 2 / 4 - 140, y: height / 2, bond: -1, id: 5},
      { x: width * 2 / 4 + 140, y: height / 2, bond: -1, id: 6},
    ],
    [
      { x: width * 3 / 4 - 140, y: height / 2, bond: -1, id: 7},
    ],
  ]

  co2 = [
    [
      { x: width * 1 / 4 + 50, y: height / 2 - 140, bond: -1, id: 0},
      { x: width * 1 / 4 - 50, y: height / 2 - 140, bond: -1, id: 1},
      { x: width * 1 / 4 + 50, y: height / 2 + 140, bond: -1, id: 2},
      { x: width * 1 / 4 - 50, y: height / 2 + 140, bond: -1, id: 3},
      { x: width * 1 / 4 + 140, y: height / 2 - 50, bond: -1, id: 4},
      { x: width * 1 / 4 + 140, y: height / 2 + 50, bond: -1, id: 5},
    ],
    [
      { x: width * 2 / 4 - 140, y: height / 2 - 50, bond: -1, id: 6},
      { x: width * 2 / 4 - 140, y: height / 2 + 50, bond: -1, id: 7},
      { x: width * 2 / 4 + 140, y: height / 2 - 50, bond: -1, id: 8},
      { x: width * 2 / 4 + 140, y: height / 2 + 50, bond: -1, id: 9},
    ],
    [
      { x: width * 3 / 4 + 50, y: height / 2 - 140, bond: -1, id: 10},
      { x: width * 3 / 4 - 50, y: height / 2 - 140, bond: -1, id: 11},
      { x: width * 3 / 4 + 50, y: height / 2 + 140, bond: -1, id: 12},
      { x: width * 3 / 4 - 50, y: height / 2 + 140, bond: -1, id: 13},
      { x: width * 3 / 4 - 140, y: height / 2 - 50, bond: -1, id: 14},
      { x: width * 3 / 4 - 140, y: height / 2 + 50, bond: -1, id: 15},
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
      selectedElectron != -1
      && (electrons[x][y].x == width * 1 / 4 + 140
      || electrons[x][y].x == width * 3 / 4 - 140)
    ) {
      fill("#A5D8FF")
      ellipse(electrons[x][y].x, electrons[x][y].y, 60 * sin(frameCount / 25), 60 * sin(frameCount / 25));
    }

    fill("#FFFFFF");
    ellipse(electrons[x][y].x, electrons[x][y].y, 40, 40);
    fill("#000000");
    textSize(20);
    text(electrons[x][y].id, electrons[x][y].x, electrons[x][y].y);

    push();
    stroke("#FFFFFF");
    strokeWeight(40);
    if (electrons[x][y].bond != -1) {
      for (var x1 = 0; x1 < electrons.length; x1 ++) {
        for (var y1 = 0; y1 < electrons[x1].length; y1 ++) {
          if (electrons[x1][y1].id == electrons[x][y].bond) {
          line(electrons[x][y].x, electrons[x][y].y, electrons[x1][y1].x, electrons[x1][y1].y);
          }
        }
      }
    }
    pop();
    }
  }
  // Electrons

  stroke("#FFFFFF");
  strokeWeight(40);
  if (selectedElectron != -1) {
    for (x = 0; x < electrons.length; x++) {    
      for (y = 0; y < electrons[x].length; y++) {
        if (electrons[x][y].id == selectedElectron) {
          line(electrons[x][y].x, electrons[x][y].y, mouseX, mouseY);
        }
     }
    }
  }
}

function mousePressed() {
  for (x = 0; x < electrons.length; x++) {
    for (y = 0; y < electrons[x].length; y++) {
      if (
        electrons[x][y].x + 20 > mouseX
        && electrons[x][y].x - 20 < mouseX
        && electrons[x][y].y + 20 > mouseY
        && electrons[x][y].y - 20 < mouseY) {
        if (selectedElectron == electrons[x][y].id) {
          selectedElectron = -1;
        } else if (
          (electrons[x][y].x == width / 2 - 140 || electrons[x][y].x == width / 2 + 140)
          ) {
          selectedElectron = electrons[x][y].id;
          if (electrons[x][y].id == selectedElectron) {
            electrons[x][y].bond = -1;
          }
        } else if ( true
          /*(((selectedElectron % 8 == 4 || selectedElectron % 8 == 6) && i == selectedElectron - 8)
        || (selectedElectron % 8 == 5 || selectedElectron % 8 == 7) && i == selectedElectron + 8)*/
        ) {
          for (var x1 = 0; x1 < electrons.length; x1 ++) {
            for (var y1 = 0; y1 < electrons[x1].length; y1 ++) {
              if (selectedElectron == electrons[x1][y1].id) {
                electrons[x1][y1].bond = electrons[x][y].id;
                selectedElectron = -1;
              }
            }
          }
        }
      }
    }
  } 
}

function keyPressed() {
  print(electrons);
}