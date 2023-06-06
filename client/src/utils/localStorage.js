export const getSavedBookIds = () => {
  return JSON.parse(localStorage.getItem('saved_books')) || [];
};

export const saveBookIds = (bookIdArr) => {
  if (bookIdArr.length) {
    localStorage.setItem('saved_books', JSON.stringify(bookIdArr));
  } else {
    localStorage.removeItem('saved_books');
  }
};

export const removeBookId = (bookId) => {
  const savedBookIds = JSON.parse(localStorage.getItem('saved_books'));

  if (!savedBookIds) {
    return false;
  }

  const updatedSavedBookIds = savedBookIds.filter((savedBookId) => savedBookId !== bookId);
  localStorage.setItem('saved_books', JSON.stringify(updatedSavedBookIds));

  return true;
};
