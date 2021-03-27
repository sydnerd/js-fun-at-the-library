function shelfBook(book,shelf) {
  if (shelf.length <3){
    shelf.unshift(book);
  }
}

function unshelfBook(book, shelf) {
  for(var i =0; i < shelf.length ; i++){
    if (shelf[i].title === book){
      shelf.splice([i],1);
      return shelf;
    }
  }
}

function listTitles(shelf) {
  var titleList = []
  for(var i =0; i< shelf.length; i++){
    titleList.push(shelf[i].title);
  }
    return titleList.join(", ");
}

function searchShelf(shelf,isTrue) {
  var titles = [];
  for(var i=0; i< shelf.length; i++){
      titles.push(shelf[i].title);
  }
  return titles.includes(isTrue)
  //check if it's true
}



module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  searchShelf,
  // shelfBook,
  // unshelfBook,
  // listTitles,
  // searchShelf
};
