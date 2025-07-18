let tugma = document.getElementById('tugma');
let matnKiritish = document.getElementById('matn-kiritish');
let natija = document.getElementById('natija');
let kursorMaydoni = document.getElementById('kursor-maydoni');
let koordinatalar = document.getElementById('koordinatalar');
let rangliQuti = document.getElementById('rangli-quti');
let hisoblagich = document.getElementById('hisoblagich');
let kirishMaydoni = document.getElementById('kirish-maydoni');
let xabar = document.getElementById('xabar');

// 1-topshiriq
tugma.addEventListener('click', () => {
  if (tugma.style.backgroundColor === 'red') {
    tugma.style.backgroundColor = 'blue';
  } else {
    tugma.style.backgroundColor = 'red';
  }
});

// 2-topshiriq
matnKiritish.addEventListener('input', () => {
  natija.textContent = matnKiritish.value || 'Bu yerda matn chiqadi';
});

// 3-topshiriq
kursorMaydoni.addEventListener('mousemove', function(e) {
  let x = e.offsetX;
  let y = e.offsetY;
  koordinatalar.textContent = 'X: ' + x + ', Y: ' + y;
});

kursorMaydoni.addEventListener('mouseleave', function() {
  koordinatalar.textContent = 'X: -, Y: -';
});

// 4-topshiriq
let sanash = 0;
let rangOzgardi = false;

rangliQuti.addEventListener('dblclick', function() {
  sanash++;

  if (!rangOzgardi) {
    rangliQuti.style.backgroundColor = 'tomato';
    rangOzgardi = true;
  } else {
    rangliQuti.style.backgroundColor = 'lightblue';
    rangOzgardi = false;
  }

  hisoblagich.textContent = '2 marta bosishlar soni: ' + sanash;
});

// 5-topshiriq
kirishMaydoni.addEventListener('keydown', function(e) {
  if (e.key === 'Enter') {
    kirishMaydoni.value = '';
    xabar.textContent = 'Maydon tozalandi';
    xabar.style.color = 'green';
  }
});