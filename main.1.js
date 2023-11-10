// *
// * Functions:
// *
function render(contents) {

  // clear child
  document.getElementById('list').innerHTML = ''

  // create ul
  const ul = document.createElement("ul");

  // loop contents
  for (let content of contents) {

    // create li
    let li = document.createElement("li");

    li.appendChild(
      document.createTextNode(content.name + " : " + content.star + " stars")
    );

    // append li to ul
    ul.appendChild(li);
  }

  // append to parent node
  document.getElementById('list').appendChild(ul);
}

// *
// * Function Call:
// *
render(data);