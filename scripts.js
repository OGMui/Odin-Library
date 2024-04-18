// Constants
const darkModeBtn = document.getElementById("dark-mode-btn");
const addBookBtn = document.getElementById("add-book-btn");
const title = document.getElementById("title");
const author = document.getElementById("author");
const pages = document.getElementById("pages");
const read = document.getElementById("read");
const bookModal = document.getElementById("add-book-modal");
const submitAddBookBtn = document.getElementById("submit-add-book");
const tableContent = document.getElementById("table-content");
const tableHeaders = document.getElementById("table-headers");
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
const closeModal = document.getElementById("close-modal");

// Variables
let myLibrary = [
    {title: "The Capybara Encyclopedia", author: "Capybara", pages: 100, read: true},
    {title: "Capybara: The Ultimate Guide", author: "Capybara", pages: 200, read: false},
    {title: "Life of a Capybara: Collectors Addition", author: "Capybara", pages: 200, read: false},
];

// Event Listeners
addBookBtn.addEventListener("click", () => {
    bookModal.showModal();
    console.log("addbookbtn clicked");
});

submitAddBookBtn.addEventListener("click", (event) => {
    addBookToLibrary();
    console.log("submitAddBookBtn clicked");
    console.log(myLibrary);
    event.preventDefault();
    bookModal.close();
   
});

closeModal.addEventListener("click", () => bookModal.close());

if (prefersDarkScheme.matches) {
    darkModeBtn.textContent = "Light Mode";
}
darkModeBtn.addEventListener("click", () => {
    // If the color-mode is currently "light"...
    if (document.documentElement.getAttribute("color-mode") === "light") {
        // Change the color-mode to "dark"
        document.documentElement.setAttribute("color-mode", "dark");
        darkModeBtn.textContent = "Light Mode";
    } else {
        // Otherwise, change the color-mode to "light"
        document.documentElement.setAttribute("color-mode", "light");
        darkModeBtn.textContent = "Dark Mode";
    }
});



updateLibrary();


function Book (title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        return `${title} by ${author}, ${pages}, ${read ? "read" : "not read yet"}` 
    }
}


function addBookToLibrary() {
   myLibrary.push(new Book(title.value, author.value, pages.value, read.checked));
   updateLibrary();
   console.log(read.checked)
  
}

let book1 = new Book("The Hobbit", "J.R.R. Tolkien", 295, true);
console.log(book1.info());

function updateLibrary() {
    
    tableContent.innerHTML = "";

    myLibrary.forEach(book => {
        let bookRow = document.createElement("tr");
        bookRow.setAttribute("id", `${book.title}`);

        let bookTitle = document.createElement("td");
        bookTitle.textContent = book.title;
        bookRow.appendChild(bookTitle);

        let bookAuthor = document.createElement("td");
        bookAuthor.textContent = book.author;
        bookRow.appendChild(bookAuthor);

        let bookPages = document.createElement("td");
        bookPages.textContent = book.pages;
        bookRow.appendChild(bookPages);

        let bookRead = document.createElement("td");
        let readBtn = document.createElement("button");
        readBtn.setAttribute("id", "read-btn");
        if (book.read) {
            readBtn.innerText = "Read";
            readBtn.style.backgroundColor = "#007665";
        } else if (!book.read) { 
            readBtn.innerText = "Not Read";
            readBtn.style.backgroundColor = "#C0564A";
        }
        readBtn.addEventListener("click", () => {
            book.read = !book.read;
            updateLibrary();
        });
        //bookRead.textContent = book.read ? "Read" : "Not read yet";
        bookRead.appendChild(readBtn);
        bookRow.appendChild(bookRead);

        let bookDelete = document.createElement("td");
        let deleteBtn = document.createElement("button")
        deleteBtn.setAttribute("id", "delete-btn");
        deleteBtn.textContent = "❌";
        deleteBtn.addEventListener("click", () => {
            myLibrary = myLibrary.filter(b => b.title !== book.title);
            updateLibrary();
        });
        bookDelete.appendChild(deleteBtn);
        bookRow.appendChild(bookDelete);

        document.getElementById("table-content").appendChild(bookRow);
    });
}

