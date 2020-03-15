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

  //   .then(function (querySnapshot) {
  //     const
  //   querySnapshot.forEach(function(doc) {
  //     // doc.data() is never undefined for query doc snapshots
  //     books.push(doc.data());
  //     // console.log(doc.id, " => ", doc.data());
  //   });
  // })
  // .catch(function(error) {
  //   console.log("Error getting documents: ", error);
  // });

  return books;
};

export default getBooks;
