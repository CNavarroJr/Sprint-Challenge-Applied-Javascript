// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component


// This is how to create a function to create an HTML structure.
function Header() {
  const head = document.createElement('div');
  const date = document.createElement('span');
  const lambdaH1 = document.createElement('h1');
  const temp = document.createElement('span');

  // This is how top add the classes on the HTML structure above.
  head.classList.add('header');
  date.classList.add('date');
  temp.classList.add('temp');

  // This is how to add text content to anything that has text.
  date.textContent = 'March 28, 2019';
  lambdaH1.textContent = 'Lambda Times';
  temp.textContent = '98 Degrees';

  // This is how to add them to the DOM in the browser using appendChild
  container.appendChild(head);

  head.appendChild(date);
  head.appendChild(lambdaH1);
  head.appendChild(temp);

  return Header;
}

const container = document.querySelector('.header-container')

Header()
