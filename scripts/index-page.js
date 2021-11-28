// using api request
const api_key = "8cf94fd0-8658-4735-bdef-785096ec2cd7";
const URL = "https://project-1-api.herokuapp.com/";
const commentsDiv = document.querySelector(".comments-cards");/* select a spot on html to place comments in*/

// global function to make a GET request
function getData(){
  commentsDiv.innerHTML="";/*to remove duplicate comments every time a get request is done */
  // commentsData.remove(); 
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
  console.log(error);
});
}


function displayComments(currentComment) {
 
  let commentCard = createCommentCard(currentComment);
  commentsDiv.appendChild(commentCard);

};

// Call the function to GET the comments data
getData()
  

// create the comment cards at resolved promise
function createCommentCard(currentComment) {
  let commentCard = document.createElement("article");
  commentCard.classList.add("comment");

  let spanElement = document.createElement("span");
  spanElement.classList.add("comment__image-placeholder");
  commentCard.appendChild(spanElement);

  let wrapperElement = createWrapperElement(currentComment);
  commentCard.appendChild(wrapperElement);
  return commentCard;
};

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
  // to format date to dd/mm/yyyy
  let date = new Date(currentComment.timestamp);
  let formattedDate = [
    date.getDate(),
    date.getMonth()+1,
    date.getUTCFullYear(),
  ].join("/");
  
  timestampElement.innerHTML = formattedDate;
  divElement.appendChild(timestampElement);

  wrapperElement.appendChild(divElement);

  let commentTextElement = document.createElement("p");
  commentTextElement.classList.add("comment__text");
  
  commentTextElement.innerText = currentComment.comment;
  wrapperElement.appendChild(commentTextElement);

  return wrapperElement;
};


// select form 
let form = document.querySelector(".comments-form");

// add event listener for form submit
form.addEventListener("submit", (event) => {
  event.preventDefault();/*to prevent page from reloading after form submit*/
  let commentObj = {
    name: event.target.name.value,
    comment: event.target.commentContent.value,
  };
  handelFormSubmit(commentObj);
  event.target.reset();/*to empty form input fields*/
});

//on form submit make a post request to add the new comment
function handelFormSubmit(commentObj){
  axios
  .post(`https://project-1-api.herokuapp.com/comments?api_key=`+api_key, commentObj)
  .then((result)=>{
    getData();/*call this function to get  all comments including the new ones*/
  })
  .catch((error)=>{
    console.log("Your comments was not added ", error)
  })

}




