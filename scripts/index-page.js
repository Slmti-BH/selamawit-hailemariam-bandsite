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

// select form 
let form = document.querySelector(".comments-form");
let commentObj = {};

// add event listener function
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


  commentsList.unshift(commentObj);/*to add the new comment to the first place in the commentsList */
  form.reset();/*to empty form input fields (reset to default) */
  clearComments();/*clears comments from the html page */
  displayComments();/*display it again with the new comments on the html page */
});

let commentsDiv = document.querySelector(".comments-cards");

// function to display the comments to the comments div
function displayComments() {
  for (let i = commentsData.length-1; i>=0; i--) {
    let currentComment = commentsData[i];
    let commentCard = createCommentCard(currentComment);
    commentsDiv.appendChild(commentCard);
  }
};
// function displayComments(comment) {
 
//     let commentCard = createCommentCard(comment);
//     commentsDiv.appendChild(commentCard);
  
// };

// commentsList.forEach((comment)=>{
//   displayComments(comment);

// });



// function below will clear comments right after form event is submitted
function clearComments() {
  commentsDiv.innerHTML = "";
}

function createCommentCard(currentComment) {
  let commentCard = document.createElement("article");
  commentCard.classList.add("comment");

  let spanElement = document.createElement("span");
  spanElement.classList.add("comment__image-placeholder");
  commentCard.appendChild(spanElement);

  let wrapperElement = createWrapperElement(currentComment);
  commentCard.appendChild(wrapperElement);



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









