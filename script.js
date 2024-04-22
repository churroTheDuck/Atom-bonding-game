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

var elements = [
  "Al", "Au", "O", "Ar", "He", "P", "Ba", "H", "Pt", "Be", "I", "K", "B", "Fe", "Si", "Br", "Pb", "Ag", "Cd", "Li", "Na", "Ca", "Mg", "Sr", "C", "Mn", "S", "Cl", "Hg", "Sn", "Cr", "Ne", "U", "Cu", "Ni", "Xe", "F", "N", "Zn"
]

var element1 = elements[Math.floor(Math.random() * ((elements.length - 1) - 0 + 1) + 0)]
var element2 = elements[Math.floor(Math.random() * ((elements.length - 1) - 0 + 1) + 0)]
var compound = element1 + " + " + element2
document.getElementById("equation").innerHTML = compound;