const apiKey = process.env.REACT_APP_GOODREADS_KEY;

const searchBooks = async (query, page) => {
  const response = await fetch(
    `https://www.goodreads.com/search/index.xml?q=${query}&key=${apiKey}&page=${page}`
  );
  const data = await response.text();
  const parser = new DOMParser();
  const xml = parser.parseFromString(data, "text/xml");
  const booksData = xml.getElementsByTagName("work");

  const bookDataINeed = [];

  for (let item of booksData) {
    bookDataINeed.push({
      id: item.childNodes[17].childNodes[1].innerHTML,
      year: item.childNodes[9].innerHTML,
      rating: item.childNodes[15].innerHTML,
      title: item.childNodes[17].childNodes[3].innerHTML,
      author: item.childNodes[17].childNodes[5].childNodes[3].innerHTML,
      image: item.childNodes[17].childNodes[7].innerHTML
    });
  }

  return bookDataINeed;
};

export default searchBooks;
