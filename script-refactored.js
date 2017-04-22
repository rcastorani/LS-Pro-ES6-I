const me = 'LambdaSchool';

const you = 'Student';

let numberOfCatsIOwn = 0;

function buyCat() {
  numberOfCatsIOwn++;
  console.log(`I now own ${numberOfCatsIOwn} cats!`);
}

const favoriteBooks = [
  'Captain Underpants',
  'Magic Treehouse',
  'Brown Bear, Brown Bear, What Do You See?',
  'Slaughterhouse 5',
];

const likesCaptainUnderpants = (bookList = favoriteBooks) => {
  let yes = false;
  bookList.forEach((book) => {
    if (book === 'Captain Underpants') yes = true;
  });
  return yes;
}

let result = likesCaptainUnderpants();

var sumInput = (...args) => {
  var total = 0;
  for (var i = 0; i < args.length; i++) {
    total += args[i];
  }
  return total;
}

var sum = sumInput(1, 2, 3, 4, 5);

const add = (x = 0, y = 0) => (x + y);

var sum = add(5, 5);
