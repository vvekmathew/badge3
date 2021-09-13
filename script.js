// add event listener

document.getElementById("changeButton").addEventListener("click", loadDoc);

function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      txt = JSON.parse(this.responseText);
      buildTable(txt);
      hideButton();
    }
  };
  xhttp.open("GET", "list.json", true);
  xhttp.send();
}

// function to build table

function buildTable(data) {
  var table = document.getElementById("myTable");

  for (var i = 0; i < data.length; i++) {
    var row = `<tr>
							<td>${data[i]["serial number"]}</td>
							<td>${data[i].name}</td>
							<td>${data[i].quantity}</td>
              <td>${data[i].unit}</td>
              <td>${data[i].department}</td>
              <td>${data[i].notes}</td>
					  </tr>`;
    table.innerHTML += row;
  }
}

function hideButton() {
  document.getElementById("changeButton").style.visibility = "hidden";
}
