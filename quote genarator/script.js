
const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const fbButton = document.getElementById('fb');
const newQuotebtn = document.getElementById('new-quote');
const loader = document.getElementById('loader');
let apiQuote = [];

//show loading
function loading() {
    loader.style.visibility = visible;
    quoteContainer.hidden = true;
}
//hise loading
function complete() {
    loader.style.visibility = hidden;
    quoteContainer.hidden = false;
}

//show new quote
function newQuote() {
    
     //random
    const quote = apiQuote[Math.floor(Math.random() * apiQuote.length)];
    //check if no author so can replace
    if (!quote.author){
        authorText.textContent = 'unknown';
    }else {
        authorText.textContent = quote.author;
    }
    //check quote length to adjust css
    if(quote.text.length > 100){
        quoteText.classList.add('long-quote');
    }else {
        quoteText.classList.remove('long-quote');
    }
    //set quote hide loader
    quoteText.textContent = quote.text;
   
}

//get quote from api
async function getQuote() {
    
    const proxyUrl = ''
    const apiUrl= 'https://type.fit/api/quotes';
    try{
        const response = await fetch(proxyUrl + apiUrl);
        apiQuote = await response.json();
        newQuote();    
    }
    catch (error){
        getQuote();
        console.log('oops,no quote',error);
    }
    
}
//share quote
 let share = function(){
    const quote = quoteText.innerText;
    const author = authorText.innerText;
    const twtUrl = `https://twitter.com/intent/tweet?text=${quote} - ${author}`;
    window.open(twtUrl,'_blank');
    
    
}
//event
newQuotebtn.addEventListener('click',newQuote);
fbButton.addEventListener('click',share);
//on load
//loading();
getQuote();
//complete();


