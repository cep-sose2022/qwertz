// Collection Of Quote
const quotes = [{
    quote: `Passwörter sind wie Unterwäsche. Du darfst sie keinen sehen lassen, musst sie regelmäßig wechseln und solltest sie nicht mit Fremden tauschen.`,
    author: `— Chris Prillo`
}, {
    quote: `Lorem ipsum1.`,
    author: `— Autor`
}, {
    quote: `Lorem ipsum2.`,
    author: `— Autor`
}, {
    quote: `Lorem ipsum3.`,
    author: `— Autor`
}, {
    quote: `Lorem ipsum4.`,
    author: `— Autor`
}, {
    quote: `Lorem ipsum5.`,
    author: `— Autor`
}, {
    quote: `Lorem ipsum6.`,
    author: `— Autor`
}, {
    quote: `Lorem ipsum7.`,
    author: `— Autor`
}, {
    quote: `Lorem ipsum8.`,
    author: `— Autor`
}, {
    quote: `Lorem ipsum9.`,
    author: `— Autor`
},]
// Neues Zitat Button
const quoteBtn = document.getElementById('quote-btn');
// Get Quote and author Section
const quote = document.querySelector('.quote');
const author = document.querySelector('.author');

// Event Handler
quoteBtn.addEventListener('click', () => {
    let random = Math.floor(Math.random() * quotes.length);
    quote.innerHTML = quotes[random].quote;
    author.innerHTML = quotes[random].author;
})