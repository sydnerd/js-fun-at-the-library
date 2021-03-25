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
  var length = bookTitle.length*20;
  return length;
}

function writeBook(){
}

function editBook(){

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
