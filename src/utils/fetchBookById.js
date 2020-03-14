const apiKey = process.env.REACT_APP_GOODREADS_KEY;

const fetchBookById = async id => {
  const response = await fetch(
    ` https://www.goodreads.com/book/show.xml?id=${id}&key=${apiKey}`
  );
  const data = await response.text();
  const parser = new DOMParser();
  const xml = parser.parseFromString(data, "text/xml");
  const booksData = xml.getElementsByTagName("book");

  const bookDataINeed = {
    id: booksData[0].childNodes[1].innerHTML,
    year: booksData[0].childNodes[21].innerHTML,
    rating: booksData[0].childNodes[37].innerHTML,
    title: booksData[0].childNodes[3].childNodes[0].wholeText,
    author: booksData[0].childNodes[53].childNodes[1].childNodes[3].innerHTML,
    image: booksData[0].childNodes[17].innerHTML
  };

  return bookDataINeed;
};

export default fetchBookById;
