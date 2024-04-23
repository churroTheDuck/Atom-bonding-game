var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}

var reactionTypes = [
  "S",
  "D",
  "SR",
  "DR",
]
var reactionType = reactionTypes[Math.floor(Math.random() * ((reactionTypes.length - 1) - 0 + 1) + 0)];
var elements = [
    "P", "H", "C", "S", "N", "O"
]
var element1 = elements[Math.floor(Math.random() * ((elements.length - 1) - 0 + 1) + 0)];
elements.splice(elements.indexOf(element1), 1);
var element2 = elements[Math.floor(Math.random() * ((elements.length - 1) - 0 + 1) + 0)];
elements.splice(elements.indexOf(element2), 1);
var element3 = elements[Math.floor(Math.random() * ((elements.length - 1) - 0 + 1) + 0)];
elements = [
    "P", "H", "C", "S", "N", "O"
]
switch (reactionType) {
  case "S":
    if (elements.indexOf(element1) > elements.indexOf(element2)) {
        var compound = element2 + " + " + element1 + " → " + element2 + element1;
    } else {
        var compound = element1 + " + " + element2 + " → " + element1 + element2;
    }
  break;
  case "D":   
    if (elements.indexOf(element1) > elements.indexOf(element2)) {
      var compound = element2 + element1 + " → " + element2 + " + " + element1;
  } else {
      var compound = element1 + element2 + " → " + element1 + " + " + element2;
  }
  break;
  case "SR":
    if (elements.indexOf(element1) > elements.indexOf(element2)) {
      var compound = element2 + element1 + " → " + element2 + " + " + element1;
  } else {
      var compound = element1 + element2 + " → " + element1 + " + " + element2;
  }
  break;
}
document.getElementById("equation").innerHTML = compound;