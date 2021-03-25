function createTitle(bookTitle) {
  return `The ${bookTitle}`;
}

function buildMainCharacter(name,age,pronouns){
  var characterObject = {
    name: name,
    age: age,
    pronouns: pronouns,
  }
  return characterObject;
}

function saveReview(reviewName,reviewList){
  if (!reviewList.includes(reviewName)){
    reviewList.push(reviewName);
  }
}

function calculatePageCount(bookTitle){
  var length = bookTitle.length;
  var lengthSum= length*20;
  return lengthSum;
}

function writeBook(bookTitle,bookCharacter,genre) {
  var book = {
    title: bookTitle,
    mainCharacter: bookCharacter,
    genre: genre,
    pageCount: calculatePageCount(bookTitle),
  }
  return book;
}

function editBook(book){
  newPageCount = book.pageCount - (book.pageCount*.25);
  console.log(newPageCount);
}

module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook,
}
// buildMainCharacter,
// saveReview,
// calculatePageCount,
// writeBook,
// editBook
