

//create function that adds the text from our input as the next list item
function newItem() {
    let li = document.createElement('li');
    let inputVal = document.getElementById('input_text').value;
    let textNode = document.createTextNode(inputVal);
    li.appendChild(textNode);
    document.getElementById('list').appendChild(li);
    document.getElementById('input_text').value = "";
}


