var compound;
var answer = [];
var element1;
var element2;
var element3;
var electrons = [];
var selectedElectron = -1;
var correct;
var randomCompound;
/*var table = [
	["H", "Li", "Na", "K", "Rb", "Cs", "Fr"],
	["Be", "Mg", "Ca", "Sr", "Ba", "Ra"],
	["B", "Al", "Ga", "In", "Tl"],
	["N", "P", "As", "Sb", "Bi"],
	["O", "S", "Se", "Te", "Po"],
	["F", "Cl", "Br", "I", "At"],
]*/

function preload() {
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	imageMode(CENTER);
	rectMode(CENTER);
	ellipseMode(CENTER);
	textAlign(CENTER, CENTER);

	var h2o = [
		[
			{ x: width * 1 / 4 + 140, y: height / 2, bond: -1, id: 0 },
		],
		[
			{ x: width * 2 / 4 + 50, y: height / 2 - 140, bond: -1, id: 1 },
			{ x: width * 2 / 4 - 50, y: height / 2 - 140, bond: -1, id: 2 },
			{ x: width * 2 / 4 + 50, y: height / 2 + 140, bond: -1, id: 3 },
			{ x: width * 2 / 4 - 50, y: height / 2 + 140, bond: -1, id: 4 },
			{ x: width * 2 / 4 - 140, y: height / 2, bond: -1, id: 5 },
			{ x: width * 2 / 4 + 140, y: height / 2, bond: -1, id: 6 },
		],
		[
			{ x: width * 3 / 4 - 140, y: height / 2, bond: -1, id: 7 },
		],
	]

	var h2oAnswer = [
		[
			{ x: width * 1 / 4 + 140, y: height / 2, bond: -1, id: 0 },
		],
		[
			{ x: width * 2 / 4 + 50, y: height / 2 - 140, bond: -1, id: 1 },
			{ x: width * 2 / 4 - 50, y: height / 2 - 140, bond: -1, id: 2 },
			{ x: width * 2 / 4 + 50, y: height / 2 + 140, bond: -1, id: 3 },
			{ x: width * 2 / 4 - 50, y: height / 2 + 140, bond: -1, id: 4 },
			{ x: width * 2 / 4 - 140, y: height / 2, bond: 0, id: 5 },
			{ x: width * 2 / 4 + 140, y: height / 2, bond: 7, id: 6 },
		],
		[
			{ x: width * 3 / 4 - 140, y: height / 2, bond: -1, id: 7 },
		],
	]

	var co2 = [
		[
			{ x: width * 1 / 4 + 50, y: height / 2 - 140, bond: -1, id: 0 },
			{ x: width * 1 / 4 - 50, y: height / 2 - 140, bond: -1, id: 1 },
			{ x: width * 1 / 4 + 50, y: height / 2 + 140, bond: -1, id: 2 },
			{ x: width * 1 / 4 - 50, y: height / 2 + 140, bond: -1, id: 3 },
			{ x: width * 1 / 4 + 140, y: height / 2 - 50, bond: -1, id: 4 },
			{ x: width * 1 / 4 + 140, y: height / 2 + 50, bond: -1, id: 5 },
		],
		[
			{ x: width * 2 / 4 - 140, y: height / 2 - 50, bond: -1, id: 6 },
			{ x: width * 2 / 4 - 140, y: height / 2 + 50, bond: -1, id: 7 },
			{ x: width * 2 / 4 + 140, y: height / 2 - 50, bond: -1, id: 8 },
			{ x: width * 2 / 4 + 140, y: height / 2 + 50, bond: -1, id: 9 },
		],
		[
			{ x: width * 3 / 4 + 50, y: height / 2 - 140, bond: -1, id: 10 },
			{ x: width * 3 / 4 - 50, y: height / 2 - 140, bond: -1, id: 11 },
			{ x: width * 3 / 4 + 50, y: height / 2 + 140, bond: -1, id: 12 },
			{ x: width * 3 / 4 - 50, y: height / 2 + 140, bond: -1, id: 13 },
			{ x: width * 3 / 4 - 140, y: height / 2 - 50, bond: -1, id: 14 },
			{ x: width * 3 / 4 - 140, y: height / 2 + 50, bond: -1, id: 15 },
		],
	]

	var co2Answer = [
		[
			{ x: width * 1 / 4 + 50, y: height / 2 - 140, bond: -1, id: 0 },
			{ x: width * 1 / 4 - 50, y: height / 2 - 140, bond: -1, id: 1 },
			{ x: width * 1 / 4 + 50, y: height / 2 + 140, bond: -1, id: 2 },
			{ x: width * 1 / 4 - 50, y: height / 2 + 140, bond: -1, id: 3 },
			{ x: width * 1 / 4 + 140, y: height / 2 - 50, bond: -1, id: 4 },
			{ x: width * 1 / 4 + 140, y: height / 2 + 50, bond: -1, id: 5 },
		],
		[
			{ x: width * 2 / 4 - 140, y: height / 2 - 50, bond: 4, id: 6 },
			{ x: width * 2 / 4 - 140, y: height / 2 + 50, bond: 5, id: 7 },
			{ x: width * 2 / 4 + 140, y: height / 2 - 50, bond: 14, id: 8 },
			{ x: width * 2 / 4 + 140, y: height / 2 + 50, bond: 15, id: 9 },
		],
		[
			{ x: width * 3 / 4 + 50, y: height / 2 - 140, bond: -1, id: 10 },
			{ x: width * 3 / 4 - 50, y: height / 2 - 140, bond: -1, id: 11 },
			{ x: width * 3 / 4 + 50, y: height / 2 + 140, bond: -1, id: 12 },
			{ x: width * 3 / 4 - 50, y: height / 2 + 140, bond: -1, id: 13 },
			{ x: width * 3 / 4 - 140, y: height / 2 - 50, bond: -1, id: 14 },
			{ x: width * 3 / 4 - 140, y: height / 2 + 50, bond: -1, id: 15 },
		],
	]

	var h2s = [
		[
			{ x: width * 1 / 4 + 140, y: height / 2, bond: -1, id: 0 },
		],
		[
			{ x: width * 2 / 4 + 50, y: height / 2 - 140, bond: -1, id: 1 },
			{ x: width * 2 / 4 - 50, y: height / 2 - 140, bond: -1, id: 2 },
			{ x: width * 2 / 4 + 50, y: height / 2 + 140, bond: -1, id: 3 },
			{ x: width * 2 / 4 - 50, y: height / 2 + 140, bond: -1, id: 4 },
			{ x: width * 2 / 4 - 140, y: height / 2, bond: -1, id: 5 },
			{ x: width * 2 / 4 + 140, y: height / 2, bond: -1, id: 6 },
		],
		[
			{ x: width * 3 / 4 - 140, y: height / 2, bond: -1, id: 7 },
		],
	]

	var h2sAnswer = [
		[
			{ x: width * 1 / 4 + 140, y: height / 2, bond: -1, id: 0 },
		],
		[
			{ x: width * 2 / 4 + 50, y: height / 2 - 140, bond: -1, id: 1 },
			{ x: width * 2 / 4 - 50, y: height / 2 - 140, bond: -1, id: 2 },
			{ x: width * 2 / 4 + 50, y: height / 2 + 140, bond: -1, id: 3 },
			{ x: width * 2 / 4 - 50, y: height / 2 + 140, bond: -1, id: 4 },
			{ x: width * 2 / 4 - 140, y: height / 2, bond: 0, id: 5 },
			{ x: width * 2 / 4 + 140, y: height / 2, bond: 7, id: 6 },
		],
		[
			{ x: width * 3 / 4 - 140, y: height / 2, bond: -1, id: 7 },
		],
	]

	var hcn = [
		[
			{ x: width * 1 / 4 + 140, y: height / 2, bond: -1, id: 0 },
		],
		[
			{ x: width * 2 / 4 - 140, y: height / 2, bond: -1, id: 1 },
			{ x: width * 2 / 4 + 140, y: height / 2 - 50, bond: -1, id: 2 },
			{ x: width * 2 / 4 + 140, y: height / 2, bond: -1, id: 3 },
			{ x: width * 2 / 4 + 140, y: height / 2 + 50, bond: -1, id: 4 },
		],
		[
			{ x: width * 3 / 4 - 140, y: height / 2 - 50, bond: -1, id: 5 },
			{ x: width * 3 / 4 - 140, y: height / 2, bond: -1, id: 6 },
			{ x: width * 3 / 4 - 140, y: height / 2 + 50, bond: -1, id: 7 },
			{ x: width * 3 / 4 - 50, y: height / 2 - 140, bond: -1 - 140, id: 8 },
			{ x: width * 3 / 4 + 50, y: height / 2 - 140, bond: -1 - 140, id: 9 },
		],
	]

	var hcnAnswer = [
		[
			{ x: width * 1 / 4 + 140, y: height / 2, bond: -1, id: 0 },
		],
		[
			{ x: width * 2 / 4 - 140, y: height / 2, bond: 0, id: 1 },
			{ x: width * 2 / 4 + 140, y: height / 2 - 50, bond: 5, id: 2 },
			{ x: width * 2 / 4 + 140, y: height / 2, bond: 6, id: 3 },
			{ x: width * 2 / 4 + 140, y: height / 2 + 50, bond: 7, id: 4 },
		],
		[
			{ x: width * 3 / 4 - 140, y: height / 2 - 50, bond: -1, id: 5 },
			{ x: width * 3 / 4 - 140, y: height / 2, bond: -1, id: 6 },
			{ x: width * 3 / 4 - 140, y: height / 2 + 50, bond: -1, id: 7 },
			{ x: width * 3 / 4 - 50, y: height / 2 - 140, bond: -1 - 140, id: 8 },
			{ x: width * 3 / 4 + 50, y: height / 2 - 140, bond: -1 - 140, id: 9 },
		],
	]

	var nocl = [
		[
			{ x: width * 1 / 4 - 50, y: height / 2 - 140, bond: -1, id: 0 },
			{ x: width * 1 / 4 + 50, y: height / 2 - 140, bond: -1, id: 1 },
			{ x: width * 1 / 4 - 50, y: height / 2 + 140, bond: -1, id: 2 },
			{ x: width * 1 / 4 + 50, y: height / 2 + 140, bond: -1, id: 3 },
			{ x: width * 1 / 4 + 140, y: height / 2 - 50, bond: -1, id: 4 },
			{ x: width * 1 / 4 + 140, y: height / 2 + 50, bond: -1, id: 5 },
		],
		[
			{ x: width * 2 / 4 - 140, y: height / 2 - 50, bond: -1, id: 6 },
			{ x: width * 2 / 4 - 140, y: height / 2 + 50, bond: -1, id: 7 },
			{ x: width * 2 / 4 + 140, y: height / 2, bond: -1, id: 8 },
			{ x: width * 2 / 4 - 50, y: height / 2 - 140, bond: -1, id: 9 },
			{ x: width * 2 / 4 + 50, y: height / 2 - 140, bond: -1, id: 10 },

		],
		[
			{ x: width * 3 / 4 + 50, y: height / 2 - 140, bond: -1, id: 11 },
			{ x: width * 3 / 4 - 50, y: height / 2 - 140, bond: -1, id: 12 },
			{ x: width * 3 / 4 + 50, y: height / 2 + 140, bond: -1, id: 13 },
			{ x: width * 3 / 4 - 50, y: height / 2 + 140, bond: -1, id: 14 },
			{ x: width * 3 / 4 - 140, y: height / 2, bond: -1, id: 15 },
			{ x: width * 3 / 4 + 140, y: height / 2 - 50, bond: -1, id: 16 },
			{ x: width * 3 / 4 + 140, y: height / 2 + 50, bond: -1, id: 17 },
		],
	]

	var noclAnswer = [
		[
			{ x: width * 1 / 4 - 50, y: height / 2 - 140, bond: -1, id: 0 },
			{ x: width * 1 / 4 + 50, y: height / 2 - 140, bond: -1, id: 1 },
			{ x: width * 1 / 4 - 50, y: height / 2 + 140, bond: -1, id: 2 },
			{ x: width * 1 / 4 + 50, y: height / 2 + 140, bond: -1, id: 3 },
			{ x: width * 1 / 4 + 140, y: height / 2 - 50, bond: -1, id: 4 },
			{ x: width * 1 / 4 + 140, y: height / 2 + 50, bond: -1, id: 5 },
		],
		[
			{ x: width * 2 / 4 - 140, y: height / 2 - 50, bond: 4, id: 6 },
			{ x: width * 2 / 4 - 140, y: height / 2 + 50, bond: 5, id: 7 },
			{ x: width * 2 / 4 + 140, y: height / 2, bond: 15, id: 8 },
			{ x: width * 2 / 4 - 50, y: height / 2 - 140, bond: -1, id: 9 },
			{ x: width * 2 / 4 + 50, y: height / 2 - 140, bond: -1, id: 10 },

		],
		[
			{ x: width * 3 / 4 + 50, y: height / 2 - 140, bond: -1, id: 11 },
			{ x: width * 3 / 4 - 50, y: height / 2 - 140, bond: -1, id: 12 },
			{ x: width * 3 / 4 + 50, y: height / 2 + 140, bond: -1, id: 13 },
			{ x: width * 3 / 4 - 50, y: height / 2 + 140, bond: -1, id: 14 },
			{ x: width * 3 / 4 - 140, y: height / 2, bond: -1, id: 15 },
			{ x: width * 3 / 4 + 140, y: height / 2 - 50, bond: -1, id: 16 },
			{ x: width * 3 / 4 + 140, y: height / 2 + 50, bond: -1, id: 17 },
		],
	]

	var compounds = [
		{ name: "H2O", c1: "H", c2: "O", c3: "H", array: h2o },
		{ name: "CO2", c1: "O", c2: "C", c3: "O", array: co2 },
		{ name: "H2S", c1: "H", c2: "S", c3: "H", array: h2s },
		{ name: "HCN", c1: "H", c2: "C", c3: "N", array: hcn },
		{ name: "NOCl", c1: "O", c2: "N", c3: "Cl", array: nocl },
	]

	var compoundsAnswer = [
		{ name: "H2O", c1: "H", c2: "O", c3: "H", array: h2oAnswer },
		{ name: "CO2", c1: "O", c2: "C", c3: "O", array: co2Answer },
		{ name: "H2S", c1: "H", c2: "S", c3: "H", array: h2sAnswer },
		{ name: "HCN", c1: "H", c2: "C", c3: "N", array: hcnAnswer },
		{ name: "NOCl", c1: "O", c2: "N", c3: "Cl", array: noclAnswer },
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
	answer = compoundsAnswer[randomCompound].array
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
				for (var x1 = 0; x1 < electrons.length; x1++) {
					for (var y1 = 0; y1 < electrons[x1].length; y1++) {
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
	strokeWeight(40);
	stroke("#000000");
	line(100, 100, width - 100, 100);
	stroke("#8CED8C");
	line(100, 100, width - 100 - (width - 200) / 2, 100);
	noStroke();
	if (correct) {
		fill("#8CED8C");
	} else {
		fill("#FF0000")
	}
	rectMode(CORNERS);
	rect(0, height - 100, width, height);	
	fill("#000000");
	if (correct) {
		text("Correct! Press any key to continue.", width / 2, height - 50);
	} else {
		text("Click on the electrons around the middle atom, then click on the electrons around a nearby atom to bond the electrons.", width / 2, height - 50);
	}
	rectMode(CENTER);
	correct = true;
	for (x = 0; x < electrons.length; x++) {
		for (y = 0; y < electrons[x].length; y++) {
			if (answer[x][y].bond != electrons[x][y].bond) {
				correct = false;
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
				} else if (true
					/*(((selectedElectron % 8 == 4 || selectedElectron % 8 == 6) && i == selectedElectron - 8)
				  || (selectedElectron % 8 == 5 || selectedElectron % 8 == 7) && i == selectedElectron + 8)*/
				) {
					for (var x1 = 0; x1 < electrons.length; x1++) {
						for (var y1 = 0; y1 < electrons[x1].length; y1++) {
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