var fournitures = ['stylo', 'crayon', 'règle', 'gomme'];

var ul = document.getElementById('fournitures');

function afficher(){
  for (var i = 0; i < fournitures.length; i++) {
    var li = document.createElement('li');
    li.appendChild(document.createTextNode(fournitures[i]));
    ul.appendChild(li);
  }
}

afficher();

btn.addEventListener("click", function() {
  var fourniture = a.value;
  var index = fournitures.indexOf(fourniture);
  if (index != -1) {
    if (index == 0) {
      if (stylo.textContent > 0) {
        stylo.textContent--;
      } else {
        alert("Le stock des stylos est épuisé");
        return;
      }
    }
    if (index == 1) {
      if (crayon.textContent > 0) {
        crayon.textContent--;
      } else {
        alert("Le stock des crayons est épuisé");
        return;
      }
    }
    if (index == 2) {
      if (regle.textContent > 0) {
        regle.textContent--;
      } else {
        alert("Le stock des règles est épuisé");
        return;
      }
    }
    if (index == 3) {
      if (gomme.textContent > 0) {
        gomme.textContent--;
      } else {
        alert("Le stock des gommes est épuisé");
        return;
      }
    }
    var table = document.getElementById("achats");
    var rows = table.rows;
    var found = false;
    for (var i = 1; i < rows.length; i++) {
      var row = rows[i];
      var cols = row.cells;
      if (cols[0].textContent == fourniture) {
        found = true;
        var quantity = parseInt(cols[1].textContent) + 1;
        cols[1].textContent = quantity;
        break;
      }
    }
    if (!found) {
      var row = table.insertRow();
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      cell1.textContent = fourniture;
      cell2.textContent = 1;
    }
    alert('Ok!');
  } else {
    alert('Indisponible...');
  }
  ul.innerHTML = '';
  afficher();
});

