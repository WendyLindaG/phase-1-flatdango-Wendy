//My code
const movies = document.getElementById("films");
const pic = document.getElementById("poster");
const about = document.getElementById("film-info");
const time = document.getElementById("showtime");
const runtime = document.getElementById("runtime");
const movieTitle = document.getElementById("title");
const availableTickets = document.getElementById("ticket-num");

//Adding a buy-ticket button
const buyTicket = document.getElementById("buy-ticket");

fetch("http://localhost:3000/films/1")
  .then((response) => response.json())
  .then((film) => {
    pic.src = film.poster;
    pic.alt = film.title;

    const title = document.createElement("li");
    title.innerText = film.title;
    movies.replaceChildren(title);

    movieTitle.innerHTML = film.title;
    about.innerHTML = film.description;
    runtime.innerHTML = film.runtime;
    time.innerHTML = film.showtime;

    availableTickets.innerHTML = film.capacity - film.tickets_sold;
  });

//Adding the movies list

fetch("http://localhost:3000/films")
  .then((response) => response.json())
  .then((films) => {
    films.forEach((film) => {
      const title = document.createElement("li");
      title.innerText = film.title;
      movies.appendChild(title);
    });
  });


  fetch("http://localhost:3000/films/1")
  .then(response => response.json())
  .then(film => {
      let soldTickets = film.tickets_sold;
      film.forEach(

  buyTicket.addEventListener("click", () => {
      soldTickets = soldTickets + 1;
      availableTickets.innerHTML = (film.capacity - soldTickets);
      if (availableTickets.innerHTML <= 0) {
          alert("SOLD OUT!!")
      }
  }))});
