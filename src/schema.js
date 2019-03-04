const typeDefs = `
  type Query {
    books: [Book]
    movies: [Movies]
  }

  type Book {
    title: String
    author: String
  }

  type Movies {
    title: String
    realisator: String
  }
`;

module.exports = typeDefs;
