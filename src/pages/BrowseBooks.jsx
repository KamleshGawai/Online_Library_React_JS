import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import books from '../data/booksData'; 

const BrowseBooks = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All"); 


  const categories = Array.from(new Set(books.map(book => book.category)));


  const filteredBooks = books.filter(book => {
    const matchesSearchTerm =
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || book.category === selectedCategory;
    
    return matchesSearchTerm && matchesCategory;
  });

  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4">Browse Books</h1>
      
      <input
        type="text"
        placeholder="Search by title or author"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="border border-black border-x-2 p-2 mb-4 w-1/3"
      />
      
      <div className="mb-4">
        <label htmlFor="category" className="mr-2 font-semibold">Filter by Category:</label>
        <select
          id="category"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="border border-gray-300 p-2 rounded"
        >
          <option value="All">All Categories</option>
          {categories.map((category, index) => (
            <option key={index} value={category}>{category}</option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredBooks.map(book => (
          <div key={book.id} className="border p-4 rounded">
            <img src={book.image} alt={book.title} className="w-full h-48 object-cover mb-4" />
            <h2 className="text-xl font-bold">{book.title}</h2>
            <p>by {book.author}</p>
            <p>Category: {book.category}</p>
            <p>Rating: {book.rating} / 5</p>
            <Link to={`/book/${book.id}`} className="text-blue-500">View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrowseBooks;
