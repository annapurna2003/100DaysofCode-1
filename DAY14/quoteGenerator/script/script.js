const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuotesBtn = document.getElementById('new-quote');

// get quotes from an API

let apiQuotes = []

// display new quotes
function newQuotes(){
    // pick a random quote 
    const quotes = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    // console.log(quotes);
    if(!quotes.author){
        authorText.textContent = "unknown";
    }
    else{
        authorText.textContent = quotes.author;
    }
    // check quote length to determine styling 
    if (quotes.text.length > 50){
        quoteText.classList.add('long-quote');
    }
    else{
        quoteText.classList.remove('long-quote');
    }
        quoteText.textContent = quotes.text;

}
async function getQuotes() {
    const apiURL = 'https://type.fit/api/quotes'

    try{
        const response = await fetch(apiURL)
        apiQuotes = await response.json();
        newQuotes()
    }
    catch(err){
        // catch error here
    }
}

// On load
getQuotes();
