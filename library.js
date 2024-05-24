class Library {
    #books;
  
    constructor(initialBooks = []) {
      if (new Set(initialBooks).size !== initialBooks.length) {
        throw new Error("Initial book list contains duplicates");
      }
      this.#books = [...initialBooks];
    }
  
    get allBooks() {
      return [...this.#books];
    }
  
    addBook(title) {
      if (this.#books.includes(title)) {
        throw new Error(`The book "${title}" already exists in the library`);
      }
      this.#books.push(title);
    }
  
    removeBook(title) {
      const bookIndex = this.#books.indexOf(title);
      if (bookIndex === -1) {
        throw new Error(`The book "${title}" does not exist in the library`);
      }
      this.#books.splice(bookIndex, 1);
    }
  
    hasBook(title) {
      return this.#books.includes(title);
    }
  }
  
  // Пример использования:
  try {
    const library = new Library(['Book 1', 'Book 2']);
    console.log(library.allBooks); // ['Book 1', 'Book 2']
    library.addBook('Book 3');
    console.log(library.allBooks); // ['Book 1', 'Book 2', 'Book 3']
    library.removeBook('Book 1');
    console.log(library.allBooks); // ['Book 2', 'Book 3']
    console.log(library.hasBook('Book 2')); // true
  } catch (error) {
    console.error(error.message);
  }
  