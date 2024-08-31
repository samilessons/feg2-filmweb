"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const movieDB = {
    movies: [
      "Логан",
      "Лига справедливости",
      "Ла-ла лэнд",
      "Одержимость",
      "Скотт Пилигрим против...",
    ]
  };
  
  const adv = document.querySelectorAll(".promo__adv img");
  const poster = document.querySelector(".promo__bg");
  const genre = document.querySelector(".promo__genre");
  const moviesList = document.querySelector(".promo__interactive-list");
  const addForm = document.querySelector("form.add");
  const addInput = addForm.querySelector(".adding__input");
  const addCheckbox = addForm.querySelector("[type='checkbox']")
  
  addForm.addEventListener("submit", (e) => {
    e.preventDefault();

    let newFilm = addInput.value.trim();
    const isFavorite = addCheckbox.checked;

    if (newFilm) {

      if (newFilm.length > 21) {
        newFilm = `${newFilm.slice(0, 21)}...`;
      }

      if (isFavorite) {
        console.log(`${newFilm} is favorite !`);
      }

      movieDB.movies.push(newFilm);
      e.target.reset();
      createMoviesList(movieDB.movies, moviesList);
    }
  });

  adv.forEach(item => item.remove());
  genre.textContent = "драма";
  poster.style.backgroundImage = "url(img/bg.jpg)";
  
  createMoviesList(movieDB.movies, moviesList);

  function createMoviesList(moviesArr, parent) {
    parent.innerHTML = "";

    moviesArr.sort().forEach((movie, i) => {
      parent.innerHTML += `
          <li class="promo__interactive-item">
            ${i + 1}. 
            ${movie}
            <div class="delete"></div>
          </li>
        `;
    });

    document.querySelectorAll(".delete").forEach((btn, i) => {
      btn.addEventListener("click", (e) => {
        e.target.parentElement.remove();
        moviesArr.splice(i, 1);
        console.log(moviesArr);
        createMoviesList(moviesArr, parent);
      });
    });
  }
});