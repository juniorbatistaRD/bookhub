import { db } from "../initFireBase";

const getBooks = async user => {
  const books = [];
  const response = await db
    .collection("books")
    .where("user", "==", user)
    .get();

  response.forEach(doc => {
    books.push({ id: doc.id, ...doc.data() });
  });

  return books;
};

export default getBooks;
