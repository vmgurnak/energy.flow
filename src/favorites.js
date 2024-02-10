// import './js/modal-menu';

import axios from 'axios';

// Elements ojects
const elements = {
  quoteСont: document.querySelector('.js-info-quote'),
  quoteAuthor: document.querySelector('.js-quote-author'),
};
const { quoteСont, quoteAuthor } = elements;

// axios.defaults.baseURL;
axios.defaults.baseURL = 'https://energyflow.b.goit.study/api/';

// request function
async function requestQuote(endPoint) {
  const objQote = {};
  objQote.date = new Date();

  const response = await axios.get(`${endPoint}`);
  console.log(response);
  const {
    data: { author, quote },
  } = response;
  objQote.author = author;
  objQote.quote = quote;
  console.log(objQote);

  localStorage.setItem('qouteData', JSON.stringify(objQote));
  const savedQoteDate = JSON.parse(localStorage.getItem('qouteData'));
  console.log(savedQoteDate);

  quoteСont.textContent = savedQoteDate.quote;
  quoteAuthor.textContent = savedQoteDate.author;
}

requestQuote('quote');

// requestQuote('quote').then(({ data: { author, quote } }) =>
//   console.log({ author, quote })
// );

// async function requestSearch(endPoint, filter, currentPage, perPage) {
//   const config = {
//     params: {
//       filter,
//       limit: perPage,
//       page: currentPage,
//     },
//   };

//   const response = await axios.get(`${endPoint}`, config);

//   console.log(response);
//   return response;
// }

// requestSearch('filters', 'Body parts', 1, 12);

// Объект с информацией по упражнению
// {
//   "_id": "64f389465ae26083f39b17a2",
//   "bodyPart": "waist",
//   "equipment": "body weight",
//   "gifUrl": "https://ftp.goit.study/img/power-pulse/gifs/0001.gif",
//   "name": "3/4 sit-up",
//   "target": "abs",
//   "description": "This refers to your core muscles, which include the rectus abdominis, obliques, and transverse abdominis. They're essential for maintaining posture, stability, and generating force in many movements. Exercises that target the abs include crunches, leg raises, and planks.",
//   "rating": 3.49,
//   "burnedCalories": 220,
//   "time": 3,
//   "popularity": 9953
// }
