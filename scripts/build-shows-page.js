const shows=[
    {
      date: "Mon Sept 06 2021 ",
      venue: "Ronald Lane",
      location: "San Francisco, CA",
      button: "BUY TICKETS"  
    },

    {
        date: "Tue Sept 21 2021",
        venue: "Pier 3 East",
        location: "San Francisco, CA",
        button: "BUY TICKETS"  
    },

    {
        date: "Fri Oct 15 2021",
        venue: "View Lounge ",
        location: "San Francisco, CA",
        button: "BUY TICKETS"  
    },
    {
        date: "Sat Nov 06 2021",
        venue: "Hyatt Agency",
        location: "San Francisco, CA",
        button: "BUY TICKETS"  
    },
    {
        date: "Fri Nov 26 2021",
        venue: "Moscow Center",
        location: "San Francisco, CA",
        button: "BUY TICKETS"  
    },
    {
        date: "Wed Dec 15 2021",
        venue: "Press Club",
        location: "San Francisco, CA",
        button: "BUY TICKETS"  
    }
];

// select a spot in the html to put the shows
 const showsList = document.querySelector(".shows");

//  create the title before the other card elements
const titleElement = document.createElement("h2");
titleElement.classList.add("shows__title");
titleElement.innerText= "Shows";
showsList.appendChild(titleElement);

// create a wrapper div for all the show cards in the showsList
const showsWrapperElement = document.createElement("div");
showsWrapperElement.classList.add("shows__wrapper");


// function to loop through the shows array and display shows in showsList
function displayShows(){
    for (let i= 0; i< shows.length; i++){
        let show = shows[i];
        let showCard = createCardElement(show);
        showsWrapperElement.appendChild(showCard);
    }
};

displayShows ();

// create each show's card
function createCardElement(show){

    let cardElement = document.createElement("article");
    cardElement.classList.add("show-card");

    
    const dateDiv = document.createElement("div");
    dateDiv.classList.add("show-card__flex-container");

    const dateElement = document.createElement("h3");
    dateElement.classList.add("show-card__subtitle")
    dateElement.innerHTML = "DATE";
    dateDiv.appendChild(dateElement);

    let showDate = createShowDate(show);
    dateDiv.appendChild(showDate);

    const venueDiv = document.createElement("div");
    venueDiv.classList.add("show-card__flex-container")

    
    const venueElement = document.createElement("h3");
    venueElement.classList.add("show-card__subtitle")
    venueElement.innerHTML = "VENUE";
    venueDiv.appendChild(venueElement);

    let showVenue = createShowVenue(show);
    venueDiv.appendChild(showVenue);

    const locationDiv = document.createElement("div");
    locationDiv.classList.add("show-card__flex-container")

    
    let showLocation = document.createElement("h3");
    showLocation.classList.add("show-card__subtitle");
    showLocation.innerText = "LOCATION";
    locationDiv.appendChild(showLocation);

    const locationElement = createShowLocation(show);
    locationDiv.appendChild(locationElement);
    
    cardElement.appendChild(dateDiv);
    cardElement.appendChild(venueDiv);
    cardElement.appendChild(locationDiv);
    
    let shopBtn = document.createElement("button");
    shopBtn.classList.add("show-card__btn");
    shopBtn.innerText = "BUY TICKETS";
    cardElement.appendChild(shopBtn);
    
    
    return cardElement;

}
// append all the show cards in showsWrapperElement to where you want to display on html file (showsList)
showsList.appendChild(showsWrapperElement);

// to create the date of the show card
function createShowDate(show){
    let showDate = document.createElement("time");
    showDate.classList.add("show-card__date");
    showDate.innerText = show.date;
    // showCard.appendChild(showDate);
    
    return showDate;
}

// to create the venue of the show card
function createShowVenue(show){
    let showVenue = document.createElement("p");
    showVenue.classList.add("show-card__venue");
    showVenue.innerText = show.venue;
    // showCard.appendChild(showVenue);
    
    return showVenue;
}

// to create the location of the show card
function createShowLocation(show){
    let showLocation = document.createElement("p");
    showLocation.classList.add("show-card__location");
    showLocation.innerText = show.location;
    // showCard.appendChild(showLocation);
    
    return showLocation;
}




