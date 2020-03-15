const apiKey = process.env.REACT_APP_BOOKS_KEY;

const searchBooks = async (query, page) => {
  const results = await fetch(
    `https://www.googleapis.com/books/v1/volumes?q=${query}&startIndex=${page}&maxResults=20&printType=books&key=${apiKey}`
  )
    .then(e => e.json())
    .then(data => {
      let books = [];
      console.log(data.items);
      if (data.items.length > 0) {
        data.items.forEach(book => {
          books.push(book);
        });
      }

      return books;
    });

  return results;
};

export default searchBooks;
