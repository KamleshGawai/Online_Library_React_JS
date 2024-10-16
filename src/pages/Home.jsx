import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import books from '../data/booksData'; 

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState('All'); 

  const categories = Array.from(new Set(books.map(book => book.category)));
  const filteredBooks = selectedCategory === 'All' 
    ? books 
    : books.filter(book => book.category === selectedCategory); 
  return (
    <div className="bg-gray-200 min-h-screen">
      <header className="bg-gradient-to-r from-purple-600 to-blue-500 text-white p-10 text-center shadow-lg">
        <h1 className="text-5xl font-bold mb-2">Welcome to the Online Library</h1>
        <p className="mt-2 text-lg">Explore a wide selection of books across various genres!</p>
        <Link to="/browse" className="mt-4 inline-block bg-white text-blue-600 font-semibold py-2 px-6 rounded-lg shadow-md hover:bg-red-700 hover:text-white transition duration-300">
          Browse Books
        </Link>
      </header>

      <section className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold text-center mb-6">Popular Books</h2>

        <div className="text-center mb-6">
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

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-6">
          {filteredBooks.map((book) => (
            <div key={book.id} className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg hover:shadow-slate-500 cursor-pointer transition-shadow">
              <img src={book.image} alt={book.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{book.title}</h3>
                <p className="text-gray-700 mb-4">by {book.author}</p>
                <Link to={`/book/${book.id}`} className="text-blue-500 hover:text-blue-700">
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer className="bg-gradient-to-r from-purple-600 to-blue-500 text-white text-center p-4 mt-8">
        <p>&copy; {new Date().getFullYear()} Online Library. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
