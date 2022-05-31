const select = document.querySelector("#select");
const vade = document.querySelector("#vade");
const tutar = document.querySelector("#tutar");
const button = document.querySelector(".btn");
let oran = 0;
let taksit = 0;

button.addEventListener("click", (e) => {
  e.preventDefault();

  if (!select.value || !vade.value || !tutar.value) {
    alert("Boş alan bırakmayınız.");
  } else {
    if (select.value === "Konut Kredisi") {
      oran = 1.29;
    }
    if (select.value === "Ihtiyac Kredisi") {
      oran = 1.99;
    }
    if (select.value === "Arac Kredisi") {
      oran = 1.89;
    }
    const faiz = oran / 100;
    taksit =
      (tutar.value * faiz * (1 + faiz) ** vade.value) /
      ((1 + faiz) ** vade.value - 1);

    const toplamTutar = taksit * vade.value;

    console.log(
      `Toplam ödenecek tutar: ${toplamTutar.toFixed(
        2
      )} , taksit tutarı: ${taksit.toFixed(2)}`
    );
    sonuclar();
  }
});

const sonuclar = () => {
  const sonuclar = document.querySelector(".sonuclar");
  sonuclar.innerHTML = `<table class="table table-sm">
  <thead>
    <th>İhtiyaç</th>
    <th>Vade</th>
    <th>Toplam Tutar:</th>
    <th>Taksit Tutarı:</th>
  </thead>
  <tbody>
  <td>${tutar.value}</td>
  <td>${vade.value}</td>
  <td>${(taksit * vade.value).toFixed(2)}</td>
  <td>${taksit.toFixed(2)}</td>
  </tbody>
</table> `;
};
