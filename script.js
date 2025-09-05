const bookTitle = document.querySelector('#title');
const authorName = document.querySelector('#author');
const imdbNumber = document.querySelector('#imdb');
const addBtn = document.querySelector('#add-btn');
let bookList = document.querySelector('#book-list');
const titleValue = bookTitle.value;
const authorValue = authorName.value;
const imdbValue = imdbNumber.value;


addBtn.addEventListener('click', function() {
    let titleValue = bookTitle.value;
    let authorValue = authorName.value;
    let imdbValue = imdbNumber.value;
    let bookListContent = `<tr>
                            <td class="out-values">${titleValue}</td>
                            <td class="out-values">${authorValue}</td>
                            <td class="out-values">${imdbValue}</td>
                            </tr>`;
    bookList.innerHTML += bookListContent;
    bookTitle.value = '';
    authorName.value = '';
    imdbNumber.value = '';
});
