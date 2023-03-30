let myLibrary = [];

function Book(title,author,pages,read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

function addBookToLibrary() {
    let bookTitle = document.querySelector('#book-title').value
    let bookAuthor = document.querySelector('#book-author').value
    let bookPages = document.querySelector('#book-pages').value
    let bookRead = document.querySelector('#book-read').checked
    
    const newBook = new Book(bookTitle,bookAuthor,bookPages,bookRead);
    myLibrary.push(newBook)
    
    renderTable()
}


/*      Display Table in Html       */
const HTML_BODY = document.querySelector('body')
const TABLE_BODY = document.querySelector('tbody')

function renderTable() {
    TABLE_BODY.innerHTML = ''
    
    
    for (let index = 0; index < myLibrary.length; index++) {
        const TABLE_DATA = document.createElement('td');
        let tableRow = TABLE_BODY.insertRow(index);
        tableRow.insertCell().innerText = myLibrary[index].title
        tableRow.insertCell().innerText = myLibrary[index].author
        tableRow.insertCell().innerText = myLibrary[index].pages
        tableRow.insertCell().innerText = myLibrary[index].read
        tableRow.insertCell().innerHTML = `<button onclick = 'markAsRead(${index})' >Read</button>`
        tableRow.insertCell().innerHTML = `<button onclick = 'deleteBook(${index})' >Delete</button>`
    }
}
//continue here
function markAsRead(index) {
    if (myLibrary[index].read === false) {
        myLibrary[index].read = true
    } else {
        myLibrary[index].read = false
    }        
    renderTable();
}

function deleteBook(index) {
    myLibrary.splice(index,1)
    renderTable();
}































/*      Modal       */

function openFormModal () {
    document.querySelector('#myModal').style.display = 'block'
}

function closeFormModal() {
    document.querySelector('#myModal').style.display = 'none'
}


/*      Prevents Form Submiting Default     */
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
});