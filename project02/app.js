

//create function that adds the text from our input as the next list item
function newItem() {
    let li = document.createElement('li');
    let inputVal = document.getElementById('input_text').value;
    let textNode = document.createTextNode(inputVal);
    li.appendChild(textNode);
    document.getElementById('list').appendChild(li);
    document.getElementById('input_text').value = "";
}


var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "remove";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

var remove = document.getElementsByClassName("remove");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}