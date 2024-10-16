// src/components/BookDetails.jsx
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import books from '../data/booksData';

const BookDetails = () => {
  const { id } = useParams();
  const book = books.find((b) => b.id === parseInt(id)); 

  if (!book) {
    return <div>Book not found!</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">{book.title}</h1>
      <img src={book.image} alt={book.title} className="w-1/1 h-1/2 mb-4 rounded-lg" />
      <p className="text-xl mb-2"><strong>Author:</strong> {book.author}</p>
      <p className="text-lg mb-2"><strong>Description:</strong> {book.description}</p>
      <p className="text-lg mb-2"><strong>Rating:</strong> {book.rating} ⭐</p>
      <Link to="/books" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300">
        Back to Browse
      </Link>
    </div>
  );
};

export default BookDetails;
