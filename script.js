let bookTitle = document.getElementById('bookTitle')
let bookAuthor = document.getElementById('bookAuthor')
let bookPages = document.getElementById('bookPages')
let bookRead = document.getElementById('bookRead')
const submitButton = document.getElementById('submit')
let bookDisplay = document.getElementById('bookDisplay')
let del = document.querySelector('.delete')
let read = document.querySelector('.read')

let myLibrary = []

function addBookToLibrary(title, author, pages, read) {
    if (read.checked) {
        myLibrary.push([title, author, pages, "Read"])
    } else {
        myLibrary.push([title, author, pages, "Not read"])
    }
}

function displayLibrary() {
    console.log(`myLibrary length is ${myLibrary.length}`)
    let books = document.querySelectorAll('.book')
    books.forEach(book => {
        book.remove()
    })
    for (let i = 0; i < myLibrary.length; i++) {
        let bookHTML = `<p>${myLibrary[i][0]}</p>` +
            `<p>${myLibrary[i][1]}</p>` +
            `<p>${myLibrary[i][2]} pgs</p>` +
            `<p>${myLibrary[i][3]}</p>` +
            `<img src="./delete.png" alt="delete" class="delete">` +
            `<img src="./book-open-blank-variant.png" alt="read" class="read"></img>`
        let g = document.createElement('div')
        g.setAttribute('class', 'book')
        g.innerHTML = bookHTML
        bookDisplay.appendChild(g)
    }
}

submitButton.onclick = function () {
    addBookToLibrary(bookTitle.value, bookAuthor.value, bookPages.value, bookRead)
    displayLibrary()
}

// When clicking the book icon in the book class in the Library, it changes
//   the status of the book from Read to Not read and vice versa

document.querySelector('body').addEventListener('click', function (e) {
    if (e.target.className == 'read') {
        console.log('read button test')
        let temp = e.target.parentNode.previousSibling
        let count = 0
        console.log(`previous sibling is ${temp}`)
        while (temp.className == 'book') {
            count++
            temp = temp.previousSibling
        }
        if (myLibrary[count][3] == 'Read') {
            myLibrary[count][3] = 'Not read'
        } else {
            myLibrary[count][3] = 'Read'
        }
        displayLibrary()
    }
})


document.querySelector('body').addEventListener('click', function (e) {
    if (e.target.className == 'delete') {
        console.log('delete button test')
        let temp = e.target.parentNode.previousSibling
        let count = 0
        console.log(`previous sibling is ${temp}`)
        while (temp.className == 'book') {
            count++
            temp = temp.previousSibling
        }
        myLibrary.splice(count, 1)
        displayLibrary()
    }
})