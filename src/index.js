// import _ from 'lodash';
// import './style.css';
// import logo from './logo.jpeg';

function component() {
  const element = document.createElement('div');

  //   lodash, now imported by this script
  //   Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  //   element.classList.add('hello');

  //   Add the log to the div
  //   const myLogo = new Image();
  //   myLogo.src = logo;

  //   element.appendChild(myLogo);

  return element;
}

document.body.appendChild(component());
