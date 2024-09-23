let magic = document.querySelector('.magic-box');
let paragraph = document.querySelector('.pera');

// Box colors
const boxColors = [
  { element: '.red', color: 'red' },
  { element: '.green', color: 'green' },
  { element: '.yellow', color: 'yellow' },
  { element: '.black', color: 'black' },
  { element: '.gray', color: 'gray' },
  { element: '.violet', color: 'violet' },
  { element: '.teal', color: 'teal' },
  { element: '.aqua', color: 'aqua' }
];

boxColors.forEach(item => {
  document.querySelector(item.element).addEventListener('click', function () {
    magic.style.backgroundColor = item.color;
  });
});

// Text colors
const textColors = [
  { element: '.red1', color: 'red' },
  { element: '.green1', color: 'green' },
  { element: '.yellow1', color: 'yellow' },
  { element: '.white1', color: 'white' },
  { element: '.gray1', color: 'gray' },
  { element: '.violet1', color: 'violet' },
  { element: '.teal1', color: 'teal' },
  { element: '.aqua1', color: 'aqua' }
];

textColors.forEach(item => {
  document.querySelector(item.element).addEventListener('click', function () {
    paragraph.style.color = item.color;
  });
});