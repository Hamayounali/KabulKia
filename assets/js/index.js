// Mobile Menu Portions
function toggleButton(a) {
  a.classList.toggle('change');
}

function menuFunction() {
  const x = document.getElementById('myTopnav');
  if (x.className === 'topnav') {
    x.className += ' responsive';
  } else {
    x.className = 'topnav';
  }
  const y = document.getElementById('brand');
  if (y.className === 'hide-2') {
    y.className = 'hide';
  } else {
    y.className = 'hide-2';
  }
}

menuFunction();

function hideMenu() {
  const z = document.getElementById('myTopnav');
  z.className = 'topnav';
}


// Employees
const employees = [
  {
    name: 'Hamayoun Ali',
    position: 'CEO & Full Stack Devloper',
    education: 'Studied Computer Science, at Katib University, Having more than five experience in computer programming and web development.',
    image: 'assets/images/hamayoun.png',
  },
  {
    name: 'Omid Babur',
    position: 'Front-end Developer',
    education: 'Studied Computer Science, at Katib University, Having more than five experience in computer programming and web development.',
    image: 'assets/images/Omid.png',
  },
  {
    name: 'Hussain Negah',
    position: 'Finance Consultent',
    education: 'Studied BBA finance, at Katib University, Having more than five experience in computer programming and web development.',
    image: 'assets/images/hussain.png',
  },
  {
    name: 'Mahdi Shamim',
    position: 'Website Developer',
    education: 'Studied Computer Science, at Kabul University, Having more than five experience in computer programming and web development.',
    image: 'assets/images/mahdi.png',
  },
  {
    name: 'Zahra Amiri',
    position: 'Admin Officer',
    education: 'Studied Computer Science, at Poli Takhnic University, Having more than five experience in computer programming and web development.',
    image: 'assets/images/shabnam.png',
  },
  {
    name: 'Hamidullah Purdil',
    position: 'Application Developer',
    education: 'Studied Computer Science, at Poli Takhnic University, Having more than five experience in computer programming and web development.',
    image: 'assets/images/hamid.png',
  },
];

function AddNew() {
  for (let j = 0; j < 6; j += 1) {
    const newH1 = document.getElementById(`name-${j}`);
    newH1.insertAdjacentText('beforeend', employees[j].name);

    const img = document.getElementById(`img-${j}`);
    img.src = employees[j].image;

    const position = document.getElementById(`position-${j}`);
    position.insertAdjacentText('beforeend', employees[j].position);

    const education = document.getElementById(`education-${j}`);
    education.insertAdjacentText('beforeend', employees[j].education);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  AddNew();
});