const text = document.getElementById("quote");
const author = document.getElementById("author");
const tweetButton = document.getElementById("tweet");

async function typeWriter(quote, authorName) {
    // Split the quote into an array of characters
    const quoteArray = quote.split('');

    // Initialize variables
    let i = 0;
    let displayText = '';

    // Function to display the quote letter by letter
    async function displayQuote() {
        if (i < quoteArray.length) {
            displayText += quoteArray[i];
            text.innerHTML = displayText;
            i++;

            // Add a random delay of 0.5 or 1 second
            const randomDelay = Math.random() < 0.5 ? 50 : 100;
            await sleep(randomDelay);
            displayQuote();
        } else {
            // Once the quote is fully displayed, fade in the author name
            fadeAuthor(authorName);
        }
    }

    function fadeAuthor(authorName) {
        author.style.opacity = 0;
        author.innerHTML = "~ " + authorName;

        let opacity = 0;
        const fadeInInterval = setInterval(function () {
            if (opacity >= 1) {
                clearInterval(fadeInInterval);
            } else {
                opacity += 0.02; // You can adjust the step size
                author.style.opacity = opacity;
            }
        }, 50); // Adjust the interval for the fade effect
    }

    // Start by displaying the quote
    displayQuote();
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function getNewQuote() {
    // API for quotes
    var url = "https://type.fit/api/quotes";

    // Fetch the data from the API
    const response = await fetch(url);

    // Convert response to JSON and store it in quotes array
    const allQuotes = await response.json();

    // Generates a random number between 0 and the length of the quotes array
    const indx = Math.floor(Math.random() * allQuotes.length);

    // Store the quote present at the randomly generated index
    const quote = allQuotes[indx].text;

    // Store the author of the respective quote
    let auth = allQuotes[indx].author;

    // Remove ", type.fit" from the author's name if it exists
    if (auth != null && auth.endsWith(", type.fit")) {
        auth = auth.replace(", type.fit", "");
    }

    // Call the typewriter function to display the quote and fade in the author name
    typeWriter(quote, auth);
}

getNewQuote();
