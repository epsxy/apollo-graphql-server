// Some fake data
const books = [
    {
      title: "Harry Potter and the Sorcerer's stone",
      author: 'J.K. Rowling',
    },
    {
      title: 'Jurassic Park',
      author: 'Michael Crichton',
    },
  ];
  
  const movies = [
    {
      title: "Harry Potter 1",
      realisator: 'A random realisator',
    },
    {
      title: 'Jurassic Park 1',
      realisator: 'Steven Spielberg',
    },
  ];

module.exports = {
    Query: { 
        books: () => books, 
        movies: () => movies 
    },
};