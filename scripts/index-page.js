// using API request
const api_key = "8cf94fd0-8658-4735-bdef-785096ec2cd7";
const URL = "https://project-1-api.herokuapp.com/";
const commentsDiv = document.querySelector(".comments-cards");/* select a spot on html to place comments in*/

// global function to make a GET request
function getData(){

  //to remove duplicate comments every time a get request is made
  removeAllChildNodes(commentsDiv);
axios
.get(URL + `comments?api_key=` + api_key)
.then ((result)=>{
  const commentsData= result.data.reverse();/*to make new comments appear on top */
  // console.log(result);
commentsData.forEach((currentComment)=>{
  displayComments(currentComment);
});
})
.catch((error)=>{
  console.log(`There was an error ` + error);
});
}

// function to remove all children of commentDiv
function removeAllChildNodes(commentsDiv) {
  while (commentsDiv.firstChild) {
    commentsDiv.removeChild(commentsDiv.firstChild);
  }
}

// to display comment card
function displayComments(currentComment) {
 
  const commentCard = createCommentCard(currentComment);
  commentsDiv.appendChild(commentCard);

};

// Call the function to GET the comments data
getData()
  

// create the comment cards at resolved promise
function createCommentCard(currentComment) {
  const commentCard = document.createElement("article");
  commentCard.classList.add("comment");

  // create img element
  const imgElement = document.createElement("img");
  imgElement.classList.add("comment__image-placeholder");
  imgElement.src="./assets/images/image-placeholder.jpg";
  imgElement.alt=`Image uploaded by `+ currentComment.name;
  commentCard.appendChild(imgElement);

  const wrapperElement = createWrapperElement(currentComment);
  commentCard.appendChild(wrapperElement);
  return commentCard;
};

function createWrapperElement(currentComment) {
  const wrapperElement = document.createElement("div");
  wrapperElement.classList.add("comment__wrapper");

  const divElement = document.createElement("div");
  divElement.classList.add("comment__title-container");

  const nameElement = document.createElement("h3");
  nameElement.classList.add("comment__title");

  nameElement.innerText = currentComment.name;
  divElement.appendChild(nameElement); 

  const timestampElement = document.createElement("time");
  timestampElement.classList.add("comment__date");

  // to format date to dd/mm/yyyy
  const date = new Date(currentComment.timestamp);
  const formattedDate = [
    date.getDate(),
    date.getMonth()+1,
    date.getUTCFullYear(),
  ].join("/");
  
  timestampElement.innerHTML = formattedDate;
  divElement.appendChild(timestampElement);

  wrapperElement.appendChild(divElement);

  const commentTextElement = document.createElement("p");
  commentTextElement.classList.add("comment__text");
  
  commentTextElement.innerText = currentComment.comment;
  wrapperElement.appendChild(commentTextElement);

  return wrapperElement;
};


// select form 
const form = document.querySelector(".comments-form");

// add event listener for form submit
form.addEventListener("submit", (event) => {
  event.preventDefault();/*to prevent page from reloading after form submit*/
  const commentObj = {
    name: event.target.name.value,
    comment: event.target.commentContent.value,
  };
  handelFormSubmit(commentObj);
  event.target.reset();/*to empty form input fields*/
});

//on form submit make a post request to add the new comment
function handelFormSubmit(commentObj){
  axios
  .post(URL + `comments?api_key=` + api_key, commentObj)
  .then((result)=>{
    getData();/*call this function to get  all comments including the new ones*/
  })
  .catch((error)=>{
    console.log("Your comments was not added ", error)
  })

}




