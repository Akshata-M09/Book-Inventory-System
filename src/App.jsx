import { useState } from 'react'
import './App.css'
import BooksTable from './components/BooksTable';

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

function App() {
  const [bookData, ] = useState(books);

  return (
      <>
        <BooksTable books={bookData} />
      </>
    
  )
}

export default App
