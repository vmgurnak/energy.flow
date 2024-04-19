import axios from 'axios';

// axios.defaults.baseURL;
axios.defaults.baseURL = 'https://energyflow.b.goit.study/api/';

// FUNCTION GET QOTE

function getQoute(endPoint, text, author) {
  const quoteText = document.querySelector(text);
  const quoteAuthor = document.querySelector(author);

  // Get date from LS
  const QUOTE_LS_KEY = 'info';
  const qoteLS = JSON.parse(localStorage.getItem(QUOTE_LS_KEY));

  const currentDate = new Date().getDate();
  const currentMonth = new Date().getMonth();

  // Checking the data in LS for null, comparing Dates
  if (qoteLS === null) {
    requestQuote('quote');
  } else if (currentDate !== qoteLS.date) {
    requestQuote('quote');
  } else if (currentMonth !== qoteLS.month) {
    requestQuote('quote');
  } else {
    quoteText.textContent = qoteLS.quote;
    quoteAuthor.textContent = qoteLS.author;
  }

  async function requestQuote(endPoint) {
    try {
      // request for Qote
      const response = await axios.get(`${endPoint}`);
      const {
        data: { author, quote },
      } = response;

      //   Write the response to the object
      const objQote = {
        author: author,
        quote: quote,
        date: currentDate,
        month: currentMonth,
      };

      // Record in LS from API
      localStorage.setItem(QUOTE_LS_KEY, JSON.stringify(objQote));

      // Record in the markup
      quoteText.textContent = objQote.quote;
      quoteAuthor.textContent = objQote.author;
    } catch (error) {
      console.log(error.message);
    }
  }
}

// ---------SECTION QUOTE---------

getQoute('quote', '.js-quote-text', '.js-quote-author');
