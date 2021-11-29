const api_key = "8cf94fd0-8658-4735-bdef-785096ec2cd7";
const URL = "https://project-1-api.herokuapp.com/";

// select a spot in the html to put the shows
const showsList = document.querySelector(".shows");

//  create the title before the other card elements
const titleElement = document.createElement("h2");
titleElement.classList.add("shows__title");
titleElement.innerText = "Shows";
showsList.appendChild(titleElement);

// create a wrapper div for all the show cards in the showsList
const showsWrapperElement = document.createElement("div");
showsWrapperElement.classList.add("shows__wrapper");

// get the shows data from API
axios
  .get(URL + `showdates?api_key=` + api_key)
  .then((result) => {
    const shows = result.data;
    console.log(result.data);

    shows.forEach(show => {
      displayShow(show);
      
    });
  })
  .catch((error) => {
    console.log(`There was an ` + error);
  });
  
// function that takes a show and display it
function displayShow(show){
  const showCard = createCardElement(show);
  showsWrapperElement.appendChild(showCard);
}

// create each show's card
function createCardElement(show) {
  const cardElement = document.createElement("article");
  cardElement.classList.add("show-card");

  const dateDiv = document.createElement("div");
  dateDiv.classList.add("show-card__flex-container");

  const dateElement = document.createElement("h3");
  dateElement.classList.add("show-card__subtitle");
  dateElement.innerHTML = "DATE";
  dateDiv.appendChild(dateElement);

  const showDate = createShowDate(show);
  dateDiv.appendChild(showDate);

  const venueDiv = document.createElement("div");
  venueDiv.classList.add("show-card__flex-container");

  const venueElement = document.createElement("h3");
  venueElement.classList.add("show-card__subtitle");
  venueElement.innerHTML = "VENUE";
  venueDiv.appendChild(venueElement);

  const showVenue = createShowVenue(show);
  venueDiv.appendChild(showVenue);

  const locationDiv = document.createElement("div");
  locationDiv.classList.add("show-card__flex-container");

  const showLocation = document.createElement("h3");
  showLocation.classList.add("show-card__subtitle");
  showLocation.innerText = "LOCATION";
  locationDiv.appendChild(showLocation);

  const locationElement = createShowLocation(show);
  locationDiv.appendChild(locationElement);

  cardElement.appendChild(dateDiv);
  cardElement.appendChild(venueDiv);
  cardElement.appendChild(locationDiv);

  const shopBtn = document.createElement("button");
  shopBtn.classList.add("show-card__btn");
  shopBtn.innerText = "BUY TICKETS";
  cardElement.appendChild(shopBtn);

  return cardElement;
}

// append all the show cards in showsWrapperElement to where you want to display on html file (showsList)
showsList.appendChild(showsWrapperElement);

// to create the date of the show card
function createShowDate(show) {
  const showDate = document.createElement("time");
  showDate.classList.add("show-card__date");
  // to formate the date
  const date = new Date(Number(show.date));
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];
  const formattedDate = [
    days[date.getDay()],
    months[date.getMonth()],
    date.getDate(),
    date.getUTCFullYear(),
  ].join(" ");
  showDate.innerText = formattedDate;

  return showDate;
}

// to create the venue of the show card
function createShowVenue(show) {
  const showVenue = document.createElement("p");
  showVenue.classList.add("show-card__venue");
  showVenue.innerText = show.place;

  return showVenue;
}

// to create the location of the show card
function createShowLocation(show) {
  const showLocation = document.createElement("p");
  showLocation.classList.add("show-card__location");
  showLocation.innerText = show.location;

  return showLocation;
}
