import './js/modal-menu';
import './js/arrow-button';
import './js/quote-day';
// import getQoute from './js/get-qoute';

import axios from 'axios';
// // axios.defaults.baseURL;
// axios.defaults.baseURL = 'https://energyflow.b.goit.study/api/';

// ---------SECTION QUOTE---------

// getQoute('quote', '.js-quote-text', '.js-quote-author');

// -----------SECTION FAVORITES------------

const favorContent = document.querySelector('.js-favor-content');

// Запрос на бэкенд получение данных по упражениям
// Запись ответа с бекенда в LS
const FAVORITES_LS_KEY = 'exerciseItems';

async function requestSearchExercises(
  endPoint,
  filter,
  subsPart,
  currentPage,
  perPage
) {
  const config = {
    params: {
      [filter]: subsPart,
      limit: perPage,
      page: currentPage,
    },
  };

  const response = await axios.get(`${endPoint}`, config);

  const {
    data,
    data: { results },
  } = response;

  localStorage.setItem(FAVORITES_LS_KEY, JSON.stringify(results));
}

requestSearchExercises('exercises', 'bodypart', 'cardio', 1, 30);

// Получение данных из LS
const favorExercLS = JSON.parse(localStorage.getItem(FAVORITES_LS_KEY));
// const favorExercNumber = favorExercLS.length;

console.log(favorExercLS);
// console.log(favorExercNumber);

// Разметка для заглушки
const markupPlug =
  '<div class="favor-plug-wrap"><div class="favor-icon-wrap"><img class="favor-icon-item" src="./img/dumbbell/dumbbell-desktop.png" alt=""></div><div class="favor-text">It appears that you haven&#8216t added any exercises to your favorites yet. To get started, you can add exercises that you like to your favorites for easier access in the future</div></div>';

// Шаблон разметка c упражениями
const markupCard =
  '<ul><li>FAVORITE EXERCISES</li><li>FAVORITE EXERCISES</li><li>FAVORITE EXERCISES</li><li>FAVORITE EXERCISES</li><li>FAVORITE EXERCISES</li> </ul>';

// Функция для разметки из массива объектов упражнений
function createMarkupFavExers(arr) {
  favorContent.innerHTML = markupCard;
}

// Функция для разметки, если нет упраженений, выводит сообщение
function createMarkupNonFavExers() {
  favorContent.innerHTML = markupPlug;
}

// Прверкa на null (если нет данных в LS с таким ключом) и на длину массива

if (favorExercLS === null) {
  createMarkupNonFavExers();
} else if ((favorExercLS.length = 0)) {
  createMarkupNonFavExers();
} else {
  createMarkupFavExers(favorExercLS);
}

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
