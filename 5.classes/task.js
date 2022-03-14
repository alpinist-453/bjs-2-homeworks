// ------------------------------------ Задача 1 ----------------------------------------

class PrintEditionItem {
	constructor(name, releaseDate, pagesCount) {
		this.name = name;
		this.releaseDate = releaseDate;
		this.pagesCount = pagesCount;
		this.state = 100;
		this.type = null;
	}

	fix() {
		this.state = this.state * 1.5;
	}

	set state(value) {
		if (value < 0) {
			this._state = 0;
		} else if (value > 100) {
			this._state = 100;
		} else {
			this._state = value;
		}
	}

	get state() {
		return this._state
	}
}

class Magazine extends PrintEditionItem {
	constructor(...args) {
		super(...args)
		this.type = 'magazine';
	}
}

class Book extends PrintEditionItem {
	constructor(author, ...args) {
		super(...args)
		this.type = 'book';
		this.author = author;
	}
}

class NovelBook extends Book {
	constructor(...args) {
		super(...args)
		this.type = 'novel';
	}
}

class FantasticBook extends Book {
	constructor(...args) {
		super(...args)
		this.type = 'fantastic';
	}
}

class DetectiveBook extends Book {
	constructor(...args) {
		super(...args)
		this.type = 'detective';
	}
}

// ---------------------------- Задача 2 ---------------------------------

class Library {
	constructor(name, books) {
		this.name = name;
		this.books = [];
	}

	addBook(book) {
		if (book.state > 30) {
			this.books.push(book);
		}
	}
  
	findBookBy(type, value) {
		const result = this.books.find(obj => obj[type] === value);
		if (result === undefined) {
			return null;
		}
		return result
	}
    
  giveBookByName(bookName) {
    const book = this.books.find(item => item.name === bookName);
    if (book === undefined) {
      return null;
    } else {
      return this.books.splice(this.books.indexOf(book), 1)[0];
    }
  }
}