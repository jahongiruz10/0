let btn = document.querySelector('button');

if (!localStorage.getItem('count')) {
    let count = 0;
    localStorage.setItem('count', count);
} else {
    let count = localStorage.getItem('count')
    btn.textContent = `${count}`;
}

let count = localStorage.getItem('count');

btn.addEventListener('click', () => {
  count++;
  btn.textContent = `${count}`;

  localStorage.setItem('count', count);
});
