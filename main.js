// * Mock data
const mockData = [
  { id: 1, name: 'Attack on Titan', star: 4 },
  { id: 2, name: 'The Glory', star: 4 },
  { id: 3, name: 'Forrest Gumpup', star: 2 },
  { id: 4, name: 'Up', star: 5 },
  { id: 5, name: 'Ted', star: 3 },
  { id: 6, name: 'Madagascar', star: 3 }
];

// * Functions: implement here
//

// * UI: add ul & li
// create ul
const ul = document.createElement("ul");

// init contents
const contents = mockData;

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

// append ul to body
document.body.appendChild(ul);
