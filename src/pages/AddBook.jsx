import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/booksSlice';
import { useNavigate } from 'react-router-dom';

const AddBook = () => {
  const [formData, setFormData] = useState({ title: '', author: '', category: '', description: '', rating: 0 });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addBook({ ...formData, id: Date.now().toString() }));
    navigate('/books');
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 space-y-4">
      <input type="text" placeholder="Title" value={formData.title} onChange={(e) => setFormData({ ...formData, title: e.target.value })} className="border p-2 w-full" required />
      <input type="text" placeholder="Author" value={formData.author} onChange={(e) => setFormData({ ...formData, author: e.target.value })} className="border p-2 w-full" required />
      <input type="text" placeholder="Category" value={formData.category} onChange={(e) => setFormData({ ...formData, category: e.target.value })} className="border p-2 w-full" required />
      <textarea placeholder="Description" value={formData.description} onChange={(e) => setFormData({ ...formData, description: e.target.value })} className="border p-2 w-full" required />
      <input type="number" placeholder="Rating" value={formData.rating} onChange={(e) => setFormData({ ...formData, rating: e.target.value })} className="border p-2 w-full" required />
      <button type="submit" className="bg-blue-500 text-white p-2">Add Book</button>
    </form>
  );
};

export default AddBook;
