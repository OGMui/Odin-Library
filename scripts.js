// Constants
const darkModeBtn = document.getElementById("dark-mode-btn");
const addBookBtn = document.getElementById("add-book-btn");
const title = document.getElementById("title");
const author = document.getElementById("author");
const pages = document.getElementById("pages");
const read = document.getElementById("read");
const bookModal = document.getElementById("add-book-modal");
const submitAddBookBtn = document.getElementById("submit-add-book");

// Variables
let Mylibrary = [];

// Event Listeners
addBookBtn.addEventListener("click", openAddBookModal);


function Book (title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = false;
    this.info = function() {
        return `${title} by ${author}, ${pages}, ${read ? "read" : "not read yet"}` 
    }
}

const openAddBookModal = () => {
    bookModal.showModal();
}

function addBookToLibrary() {
    let title = 
}

let book1 = new Book("The Hobbit", "J.R.R. Tolkien", 295, true);
console.log(book1.info());