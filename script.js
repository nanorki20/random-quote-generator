const quoteContainer = document.getElementById('quote-container')
const quoteText = document.getElementById('quote')
const authorText = document.getElementById('author')
const twitterBtn = document.getElementById('twitter')
const newQuoteBtn = document.getElementById('new-quote')
const loader = document.getElementById('loader')


let apiQuotes = []

// Show Loading
function loading() {
    loader.hidden = false
    quoteContainer.hidden = true
}

//Hide Loading
function loadingComplete() {
    quoteContainer.hidden = false
    loader.hidden = true
}

// SHOW NEW QUOTE
function newQuote() {
    // loading()
    quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];

    //  check if author field is blank and return 'unknown' 
    if (!quote.author){
        author.textContent = 'Unknown'
    } else {
        authorText.textContent = quote.author
    }

    // check quote length to determine styling
    if (quote.text.length > 150) {
        quoteText.classList.add('long-quote')
    } else{
        quoteText.classList.remove('long-quote')
    }
    // set quote, hide loader
    quoteText.textContent = quote.text;
    loadingComplete();
}

// GET QUOTES
// async function getQuotes() {
//     loading();
//     const apiUrl = 'https://jacintodesign.github.io/quotes-api/data/quotes.json';
//     try {
//         const response = await fetch(apiUrl)
//         apiQuotes = await response.json();
//         newQuote();
//     } catch(error) {
//         // console.log('whoops! no quote here ', error)
//     }
// }

//Get quotes
async function getQuotes() {
    const apiUrl = 'https://forismatic.com/en/api/1.0?method=getQuote&lang=en&format=json'
}

// tweet the quote that resonated with you
function tweetQuote() {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`
    window.open(twitterUrl, '_blank')
}

// ADD EVENT LISTENERS
newQuoteBtn.addEventListener('click', newQuote);
twitterBtn.addEventListener('click', tweetQuote);

//ON LOAD
getQuotes();
// loading();