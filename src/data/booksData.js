const books = [
    {
      id: 1,
      title: "Dune",
      author: "Frank Herbert",
      description: "A science fiction novel about politics, religion, and ecology on a desert planet.",
      category: "Sci-Fi",
      rating: 4.5,
      image: "https://cdn.kobo.com/book-images/2bd0e164-5c02-4e40-a43a-17d2fd5451b7/353/569/90/False/dune-2.jpg"
    },
    {
      id: 2,
      title: "1984",
      author: "George Orwell",
      description: "A dystopian novel about totalitarianism and surveillance.",
      category: "Fiction",
      rating: 4.8,
      image: "https://m.media-amazon.com/images/I/61ZewDE3beL._AC_UF1000,1000_QL80_.jpg"
    },
    {
      id: 3,
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      description: "A novel about the American dream, wealth, and excess in the 1920s.",
      category: "Fiction",
      rating: 4.3,
      image: "https://m.media-amazon.com/images/I/81Q6WkLhX4L._UF1000,1000_QL80_.jpg"
    },
    {
      id: 4,
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      description: "A novel about racial injustice in the American South.",
      category: "Fiction",
      rating: 4.9,
      image: "https://media.glamour.com/photos/56e1f3c462b398fa64cbd304/master/w_1600%2Cc_limit/entertainment-2016-02-18-main.jpg"
    },
    {
      id: 5,
      title: "Sapiens",
      author: "Yuval Noah Harari",
      description: "A brief history of humankind from the Stone Age to the modern era.",
      category: "Non-Fiction",
      rating: 4.6,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScJPBpOQVqZYjHCPbomAw_lOkdjX-C-ohQhg&s"
    },

  {
    id: 6,
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    description: "A novel about the events in the life of a young man struggling with the realities of adulthood.",
    category: "Fiction",
    rating: 4.0,
    image: "https://i.etsystatic.com/12063400/r/il/e092e2/2427195695/il_fullxfull.2427195695_rwsi.jpg"
  },
  {
    id: 7,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    description: "A powerful tale of racial injustice in the Deep South.",
    category: "Fiction",
    rating: 4.9,
    image: "https://m.media-amazon.com/images/I/81gepf1eMqL._AC_UF1000,1000_QL80_.jpg"
  },
  {
    id: 8,
    title: "Sapiens",
    author: "Yuval Noah Harari",
    description: "A brief history of humankind, exploring how we came to dominate the world.",
    category: "Non-Fiction",
    rating: 4.7,
    image: "https://rukminim2.flixcart.com/image/850/1000/xif0q/book/b/q/w/sapiens-a-graphic-history-volume-2-original-imagwfmhhrtbfhhz.jpeg?q=20&crop=false"
  },
  {
    id: 9,
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    description: "A fantasy novel about a hobbit's journey to reclaim a lost kingdom.",
    category: "Fantasy",
    rating: 4.8,
    image: "https://m.media-amazon.com/images/I/712cDO7d73L._AC_UF1000,1000_QL80_.jpg"
  },
  {
    id: 10,
    title: "Brave New World",
    author: "Aldous Huxley",
    description: "A dystopian novel exploring a future where humanity is controlled by technology and drugs.",
    category: "Sci-Fi",
    rating: 4.3,
    image: "https://m.media-amazon.com/images/I/91D4YvdC0dL._AC_UF1000,1000_QL80_.jpg"
  },
  {
    id: 11,
    title: "Pride and Prejudice",
    author: "Jane Austen",
    description: "A classic novel that explores love, reputation, and class in the 19th century.",
    category: "Romance",
    rating: 4.6,
    image: "https://rukminim2.flixcart.com/image/850/1000/kkec4280/book/d/h/d/pride-prejudice-original-imafzra6pfewjjwb.jpeg?q=20&crop=false"
  },
  {
    id: 12,
    title: "The Alchemist",
    author: "Paulo Coelho",
    description: "A story about a young shepherd's journey to find his personal legend.",
    category: "Fiction",
    rating: 4.2,
    image: "https://m.media-amazon.com/images/I/61HAE8zahLL._AC_UF1000,1000_QL80_.jpg"
  },
  {
    id: 13,
    title: "The Da Vinci Code",
    author: "Dan Brown",
    description: "A thriller involving secret societies and hidden codes in famous works of art.",
    category: "Thriller",
    rating: 4.4,
    image: "https://m.media-amazon.com/images/I/71y4X5150dL._AC_UF1000,1000_QL80_.jpg"
  },
  {
    id: 14,
    title: "The Hunger Games",
    author: "Suzanne Collins",
    description: "A dystopian novel about a young girl who fights in a televised survival competition.",
    category: "Fiction",
    rating: 4.7,
    image: "https://m.media-amazon.com/images/I/71un2hI4mcL._AC_UF1000,1000_QL80_.jpg"
  },
  {
    id: 15,
    title: "Harry Potter and the Sorcerer's Stone",
    author: "J.K. Rowling",
    description: "A young boy discovers he is a wizard and attends a magical school.",
    category: "Fantasy",
    rating: 4.9,
    image: "https://m.media-amazon.com/images/I/81q77Q39nEL._AC_UF1000,1000_QL80_.jpg"
  },
  {
    id: 16,
    title: "The Shining",
    author: "Stephen King",
    description: "A psychological horror novel about a family staying at a haunted hotel.",
    category: "Horror",
    rating: 4.8,
    image: "https://m.media-amazon.com/images/I/91U7HNa2NQL._AC_UF1000,1000_QL80_.jpg"
  },
  {
    id: 17,
    title: "Moby Dick",
    author: "Herman Melville",
    description: "A story about one man's obsession with hunting a great white whale.",
    category: "Fiction",
    rating: 4.0,
    image: "https://m.media-amazon.com/images/I/61PBBKyZ1rL._AC_UF1000,1000_QL80_.jpg"
  },
  {
    id: 18,
    title: "The Road",
    author: "Cormac McCarthy",
    description: "A post-apocalyptic novel about a father and son's journey through a desolate landscape.",
    category: "Fiction",
    rating: 4.6,
    image: "https://m.media-amazon.com/images/I/51M7XGLQTBL._AC_UF1000,1000_QL80_.jpg"
  },
  {
    id: 19,
    title: "Becoming",
    author: "Michelle Obama",
    description: "A memoir by the former First Lady of the United States.",
    category: "Non-Fiction",
    rating: 4.8,
    image: "https://m.media-amazon.com/images/I/81KGjsBXQ7L._AC_UF1000,1000_QL80_.jpg"
  },
  {
    id: 20,
    title: "Gone Girl",
    author: "Gillian Flynn",
    description: "A psychological thriller about a marriage gone wrong.",
    category: "Thriller",
    rating: 4.4,
    image: "https://m.media-amazon.com/images/I/713e4Yk6brL._AC_UF1000,1000_QL80_.jpg"
  },
  {
    id: 21,
    title: "The Fault in Our Stars",
    author: "John Green",
    description: "A love story between two teenagers who meet at a cancer support group.",
    category: "Romance",
    rating: 4.7,
    image: "https://m.media-amazon.com/images/I/61fbVx3W5cL._AC_UF1000,1000_QL80_.jpg"
  },
  {
    id: 22,
    title: "The Handmaid's Tale",
    author: "Margaret Atwood",
    description: "A dystopian novel about a totalitarian society that oppresses women.",
    category: "Fiction",
    rating: 4.5,
    image: "https://m.media-amazon.com/images/I/61su39k8NUL._AC_UF1000,1000_QL80_.jpg"
  },
  {
    id: 23,
    title: "The Subtle Art of Not Giving a F*ck",
    author: "Mark Manson",
    description: "A counterintuitive approach to living a good life.",
    category: "Non-Fiction",
    rating: 4.3,
    image: "https://m.media-amazon.com/images/I/71t4GuxLCuL._AC_UF1000,1000_QL80_.jpg"
  },
    
  ];
  
  export default books;
  