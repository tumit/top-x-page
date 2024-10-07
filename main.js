// *
// * Data
// *
const data = [
  {"name": "Avatar", "year": 2009, "star": 1},
  {"name": "Avengers: Endgame", "year": 2019, "star": 3},
  {"name": "Titanic", "year": 1997, "star": 4},
  {"name": "Star Wars: The Force Awakens", "year": 2015, "star": 2 },
  {"name": "Spider-Man: No Way Home", "year": 2021, "star": 4},
  {"name": "Barbie", "year": 2023, "star": 2},
  {"name": "The Super Mario Bros. Movie", "year": 2023, "star": 5},
];

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
// * Our Functions:
// *


// *
// * Function Call:
// *
const renderData = data

render(renderData);