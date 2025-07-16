async function tarjimaQil() {
  const matn = document.querySelector(".matn").value;
  const src = document.querySelector(".src-lang").value;
  const dest = document.querySelector(".dest-lang").value;
  const natija = document.getElementById("natija");

  if (!matn.trim()) {
    natija.innerText = "Iltimos, matn kiriting!";
    return;
  }

  const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=${src}&tl=${dest}&dt=t&q=${encodeURIComponent(matn)}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    let tarjima = "";
    data[0].forEach(qism => tarjima += qism[0]);
    natija.innerText = tarjima;
  } catch (err) {
    natija.innerText = "Xatolik yuz berdi. Internetni tekshiring.";
    console.error(err);
  }
}

document.querySelector(".btn").addEventListener("click", tarjimaQil);