function Book (title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = false;
    this.info = function() {
        return `${title} by ${author}, ${pages}, ${read ? "read" : "not read yet"}` 
    }
}

let book1 = new Book("The Hobbit", "J.R.R. Tolkien", 295, true);
console.log(book1.info());