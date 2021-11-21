const commentsList = [
  {
    name: "Connor Walton",
    timestamp: "02/17/2021",
    commentText:
      "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
  },

  {
    name: "Emilie Beach",
    timestamp: "01/09/2021",
    commentText:
      "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
  },

  {
    name: "Miles Acosta",
    timestamp: "12/20/2020",
    commentText:
      "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
  },
];

// console.log(commentsList);
let form = document.querySelector(".comments-form");
let commentObj = {};

form.addEventListener("submit", (event) => {
  event.preventDefault();
  let date = new Date();
  let formattedDate = [
    date.getDate(),
    date.getMonth(),
    date.getUTCFullYear(),
  ].join("/");
  let commentObj = {
    name: event.target.name.value,
    timestamp: formattedDate,
    commentText: event.target.commentContent.value,
  };

  // console.log(commentObj);
  // commentObj.name = event.target.name.value;
  // commentObj.timestamp = new Date;
  // commentObj.commentText = event.target.commentContent.value;

  commentsList.unshift(commentObj);
  form.reset();
  clearComments();
  displayComments();
});

// console.log(commentsList);

const commentsDiv = document.querySelector(".comments-cards");

function displayComments() {
  for (let i = 0; i < commentsList.length; i++) {
    let currentComment = commentsList[i];
    let commentCard = createCommentCard(currentComment);
    commentsDiv.appendChild(commentCard);
  }
}

displayComments();

function clearComments() {
  commentsDiv.innerHTML = "";
}

function createCommentCard(currentComment) {
  let commentCard = document.createElement("article");
  commentCard.classList.add("comment");

//   let divider = document.createElement("hr");
  // divider.setAttribute ("width", "100px")
//   commentCard.appendChild(divider);

  // if image is needed
  // let imgElement = document.createElement("img");
  // imgElement.classList.add("comment__image");
  // imgElement.src = `./assets/images/${currentComment.name}.jpeg`;
  // imgElement.alt = `head shot of  ${currentComment.name}`;
  // commentCard.appendChild(imgElement);

  let spanElement = document.createElement("span");
  spanElement.classList.add("comment__image-placeholder");
  commentCard.appendChild(spanElement);

  let wrapperElement = createWrapperElement(currentComment);
  commentCard.appendChild(wrapperElement);

//   let endDivider = document.createElement("hr");
//   commentCard.appendChild(endDivider);

  return commentCard;
}

function createWrapperElement(currentComment) {
  let wrapperElement = document.createElement("div");
  wrapperElement.classList.add("comment__wrapper");

  let divElement = document.createElement("div");
  divElement.classList.add("comment__title-container");

  let nameElement = document.createElement("h3");
  nameElement.classList.add("comment__title");
  nameElement.innerText = currentComment.name;
  divElement.appendChild(nameElement);

  let timestampElement = document.createElement("time");
  timestampElement.classList.add("comment__date");
  timestampElement.innerHTML = currentComment.timestamp;
  divElement.appendChild(timestampElement);

  wrapperElement.appendChild(divElement);

  let commentTextElement = document.createElement("p");
  commentTextElement.classList.add("comment__text");
  commentTextElement.innerText = currentComment.commentText;
  wrapperElement.appendChild(commentTextElement);

  return wrapperElement;
}

// form.addEventListener("submit", (event)=>{
//     event.preventDefault();
//     let commentCard = document.createElement("article");
//     commentCard.classList.add("comment");

//     let spanElement = document.createElement("span");
//     spanElement.classList.add("comment__image-placeholder");
//     commentCard.appendChild(spanElement);

//     let wrapperElement = document.createElement("div");
//     wrapperElement.classList.add("comment__wrapper");

//     let nameElement = document.createElement("h3");
//     nameElement.classList.add("comment__title");
//     nameElement.innerText = event.target.name.value;
//     wrapperElement.appendChild(nameElement);

//     let timestampElement = document.createElement("time");
//     timestampElement.classList.add("comment__date");
//     let date = new Date();
//     // let month = dateObj.getMonth()
//     timestampElement.innerHTML =[date.getDate(),date.getMonth(),date.getUTCFullYear].join("/");
//     wrapperElement.appendChild(timestampElement);

//     let commentTextElement = document.createElement("p");
//     commentTextElement.classList.add("comment__text");
//     commentTextElement.innerText = event.target.commentContent.value;
//     wrapperElement.appendChild(commentTextElement);

//     commentCard.appendChild(wrapperElement);
//     commentsDiv.prepend( commentCard);
//     // form.reset();
// } )

// form.reset();
