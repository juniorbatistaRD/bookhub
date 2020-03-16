import { db } from "../initFireBase";
import swal from "@sweetalert/with-react";

const saveBook = async data => {
  //quick validate

  if (!data.user) {
    alert("Data is invalid, Contact Developer");
  }

  db.collection("books")
    .add({
      title: data.book ? data.book.volumeInfo.title : data.title,
      author: data.book
        ? data.book.volumeInfo.authors
          ? data.book.volumeInfo.authors[0]
          : null
        : data.author,
      image: data.book
        ? data.book.volumeInfo.imageLinks
          ? data.book.volumeInfo.imageLinks.thumbnail.replace("http", "https")
          : null
        : null,
      book_id: data.book ? data.book.id : null,
      date: data.date,
      description: data.description,
      user: data.user
    })
    .then(() => {
      swal({
        text: "Yay, your book was added",
        icon: "success"
      });
    })
    .catch(err => {
      swal({
        text: "Oh no! We couldn't add you book" + err,
        icon: "error"
      });
    });
};

export default saveBook;
