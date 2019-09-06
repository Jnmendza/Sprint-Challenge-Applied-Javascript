// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

const headerContainer = document.querySelector('.header-container')

const header = event => {
    //Add elements
    const headerDiv = document.createElement('div'),
          date = document.createElement('span'),
          title = document.createElement('h1'),
          temp = document.createElement('span')

    // Add classes
    headerDiv.classList.add('header');
    date.classList.add('date');
    temp.classList.add('temp');

    //Add content
    date.textContent = 'MARCH 28, 2019';
    title.textContent = 'Lambda Times';
    temp.textContent = '98 º';

    //Append
    headerDiv.appendChild(date);
    headerDiv.appendChild(title);
    headerDiv.appendChild(temp);


    return headerDiv
}

let myHeader = header()
console.log(myHeader)
headerContainer.appendChild(myHeader)
