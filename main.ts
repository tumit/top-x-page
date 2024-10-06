// *
// * Data
// *
// const data = [
//   {"name": "Avatar", "year": 2009, "star": 4},
//   {"name": "Avengers: Endgame", "year": 2019, "star": 4},
//   {"name": "Titanic", "year": 1997, "star": 4},
//   {"name": "Star Wars: The Force Awakens", "year": 2015, "star": 4},
//   {"name": "Spider-Man: No Way Home", "year": 2021, "star": 4},
//   {"name": "Barbie", "year": 2023, "star": 2},
//   {"name": "The Super Mario Bros. Movie", "year": 2023, "star": 5},
// ];
// data v2
const data = [
  {"nameEN": "Avatar", "nameTH": "อวตาร", "year": 2009, "star": 4},
  {"nameEN": "Avengers: Endgame", "nameTH": "อเวนเจอร์ส: เผดญจศึก", "year": 2019, "star": 4},
  {"nameEN": "Titanic", "nameTH": "ไททานิค", "year": 1997, "star": 4},
  {"nameEN": "Star Wars: The Force Awakens", "nameTH": "สตาร์ วอร์ส: อุบัติการณ์แห่งพลัง", "year": 2015, "star": 4},
  {"nameEN": "Spider-Man: No Way Home", "nameTH": "สไปเดอร์แมน: โน เวย์ โฮม", "year": 2021, "star": 4},
  {"nameEN": "Barbie", "nameTH": "บาร์บี้ †", "year": 2023, "star": 2},
  {"nameEN": "The Super Mario Bros. Movie", "nameTH": "เดอะ ซูเปอร์มาริโอบราเธอร์ส มูฟวี่ †", "year": 2023, "star": 5},
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

// a.star, b.star
function compareByStar(a, b) {
  return b.star - a.star
}

// *
// * Function Call:
// *
render(data.sort(compareByStar).slice(0, 3));