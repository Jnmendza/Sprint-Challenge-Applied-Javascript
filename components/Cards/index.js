// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.
axios.get('https://lambda-times-backend.herokuapp.com/articles')
//  .then(resolve => {
//      console.log(resolve)
//  })
    

 const cardsContainer = document.querySelector('.cards-container')

 const cardCreator = (headline, imgUrl, authorsName) => {
     // Add elements
     const card = document.createElement('div'),
           headlineDiv = document.createElement('div'),
           author = document.createElement('div'),
           imageContainer = document.createElement('div'),
           image = document.createElement('img'),
           name = document.createElement('span');

    // Add classes
    card.classList.add('card');
    headlineDiv.classList.add('headline');
    author.classList.add('author');
    imageContainer.classList.add('img-container');

    // Add src
    image.src = imgUrl

    //Add Content
    headlineDiv.textContent = headline
    name.textContent = authorsName

    //Append 
    card.appendChild(headlineDiv);
    card.appendChild(author);
    author.appendChild(imageContainer);
    imageContainer.appendChild(image);
    author.appendChild(name);

    return card
 }