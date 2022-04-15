const bookTitle = document.getElementById(bookTitle);
const bookAuthor = document.getElementById(bookAuthor);
const bookPages = document.getElementById(bookPages);
const bookRead = document.getElementById(bookRead);
const submitButton = document.getElementById(submit);
const bookDisplay = document.getElementById(bookDisplay);

let myLibary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary() {
    // do stuff here
}

function displayLibrary() {
    // do stuff here
}