import React, { useEffect, useState } from "react";
import Card from "./Card";
import axios from "axios";
import BookTable from "./BookTable";
const Main = () => {
  const books = [
    {
      id: "1",
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      publishedDate: "1960",
      publisher: "J.B. Lippincott & Co.",
    },
    {
      id: "2",
      title: "1984",
      author: "George Orwell",
      publishedDate: "1949",
      publisher: "Secker & Warburg",
    },
    {
      id: "3",
      title: "Moby-Dick",
      author: "Herman Melville",
      publishedDate: "1851",
      publisher: "Harper & Brothers",
    },
    {
      id: "4",
      title: "Pride and Prejudice",
      author: "Jane Austen",
      publishedDate: "1813",
      publisher: "T. Egerton",
    },
  ];

  // const [search, setSearch] = useState("");
  const [bookData, setData] = useState([]);
  // const searchBook = (evt) => {
  //   if (evt.key === "Enter") {
  //     axios
  //       .get(
  //         "https://www.googleapis.com/books/v1/volumes?q=" +
  //           search +
  //           "&key=AIzaSyA6SaT23KNiiA6DnUfUQTvFeyAcQEkwnSU" +
  //           "&maxResults=40"
  //       )
  //       .then((res) => setData(res.data.items))
  //       .catch((err) => console.log(err));
  //   }
  // };
  useEffect(() => {
    axios
      .get(
        "https://www.googleapis.com/books/v1/volumes?key=AIzaSyCo_AmqWP9U19svEENXr81Y-4N8vwttfBo" +
          "&maxResults=40"
      )
      .then((res) => setData(res.data.items))
      .catch((err) => console.log(err));
  }, []);
  console.log(bookData);
  return (
    <>
      <BookTable books={books} />

      <div className="header">
        <div className="row1">
          {/* <h1>
            A room without books is like
            <br /> a body without a soul.
          </h1> */}
        </div>
        <div className="row2">
          {/* <h2>Find Your Book</h2> */}
          <div className="search">
            {/* <input
              type="text"
              placeholder="Enter Your Book Name"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyPress={searchBook}
            /> */}
            {/* <button>
              <i className="fas fa-search"></i>
            </button> */}
          </div>
        </div>
      </div>

      {/* <div className="container">{<Card book={bookData} />}</div> */}
    </>
  );
};
export default Main;
