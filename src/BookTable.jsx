import React, { useState } from "react";
import "./BookTable.css";

const BookTable = () => {
  const [books, setBooks] = useState([
    {
      id: 1,
      title: "Book One",
      author: "Author One",
      publishedDate: "2020",
      publisher: "Publisher One",
    },
    {
      id: 2,
      title: "Book Two",
      author: "Author Two",
      publishedDate: "2021",
      publisher: "Publisher Two",
    },
    {
      id: 3,
      title: "The Great Adventure",
      author: "John Smith",
      publishedDate: "2019",
      publisher: "Adventure Press",
    },
    {
      id: 4,
      title: "Mystery of the Lost City",
      author: "Jane Doe",
      publishedDate: "2018",
      publisher: "Mystery House",
    },
    {
      id: 5,
      title: "Science Wonders",
      author: "Albert Newton",
      publishedDate: "2022",
      publisher: "Science World",
    },
  ]);

  const [newBook, setNewBook] = useState({
    title: "",
    author: "",
    publishedDate: "",
    publisher: "",
  });

  const [editingBook, setEditingBook] = useState(null);

  const handleChange = (e) => {
    setNewBook({ ...newBook, [e.target.name]: e.target.value });
  };

  const handleSaveBook = () => {
    if (editingBook) {
      setBooks(
        books.map((book) =>
          book.id === editingBook.id ? { ...editingBook, ...newBook } : book
        )
      );
      setEditingBook(null);
    } else {
      setBooks([...books, { id: Date.now(), ...newBook }]);
    }
    setNewBook({ title: "", author: "", publishedDate: "", publisher: "" });
  };

  const handleEditBook = (book) => {
    setEditingBook(book);
    setNewBook(book);
  };

  const handleDeleteBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  return (
    <div className="table-container">
      <h2>📚 Book List</h2>
      <table className="book-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Author</th>
            <th>Published Date</th>
            <th>Publisher</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {books.length > 0 ? (
            books.map((book, index) => (
              <tr key={book.id}>
                <td data-label="#"> {index + 1} </td>
                <td data-label="Title"> {book.title} </td>
                <td data-label="Author"> {book.author} </td>
                <td data-label="Published Date"> {book.publishedDate} </td>
                <td data-label="Publisher"> {book.publisher} </td>
                <td data-label="Actions">
                  <button
                    className="edit-btn"
                    onClick={() => handleEditBook(book)}
                  >
                    Edit
                  </button>
                  <button
                    className="delete-btn"
                    onClick={() => handleDeleteBook(book.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6">No books available</td>
            </tr>
          )}
        </tbody>
      </table>
      <div className="add-book-form">
        <h2 className="form-title">
          {editingBook ? "✏ Edit Book Details" : "📚 Add a New Book"}
        </h2>
        <p className="form-subtitle">
          {editingBook
            ? "Modify the book details below:"
            : "Fill out the details to add a new book."}
        </p>

        <label htmlFor="title">Book Title</label>
        <input
          type="text"
          id="title"
          name="title"
          placeholder="Enter book title"
          value={newBook.title}
          onChange={handleChange}
        />

        <label htmlFor="author">Author Name</label>
        <input
          type="text"
          id="author"
          name="author"
          placeholder="Enter author name"
          value={newBook.author}
          onChange={handleChange}
        />

        <label htmlFor="publishedDate">Published Date</label>
        <input
          type="text"
          id="publishedDate"
          name="publishedDate"
          placeholder="Enter published year"
          value={newBook.publishedDate}
          onChange={handleChange}
        />

        <label htmlFor="publisher">Publisher</label>
        <input
          type="text"
          id="publisher"
          name="publisher"
          placeholder="Enter publisher name"
          value={newBook.publisher}
          onChange={handleChange}
        />

        <button onClick={handleSaveBook} className="submit-btn">
          {editingBook ? "✅ Update Book" : "➕ Add Book"}
        </button>
      </div>
    </div>
  );
};

export default BookTable;
