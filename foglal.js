document.addEventListener("DOMContentLoaded", function () {
  const submitButton = document.createElement("button");
  submitButton.innerText = "Küldés";
  submitButton.className = "btn btn-lg btn-custom mt-4";
  document.querySelector("main").appendChild(submitButton);

  submitButton.addEventListener("click", function () {
    // Összegyűjtjük az összes mezőt
    const name = document.querySelector('input[placeholder="Név"]').value;
    const email = document.querySelector(
      'input[placeholder="példa@gmail.com"]'
    ).value;
    const phone = document.querySelector('input[placeholder="+36....."]').value;
    const arrival = document.querySelector(
      'input[type="date"]:nth-of-type(1)'
    ).value;
    const departure = document.querySelector(
      'input[type="date"]:nth-of-type(2)'
    ).value;
    const address = document.querySelector('input[placeholder="Cím"]').value;

    // Ellenőrizni, hogy van-e üres mező
    if (!name || !email || !phone || !arrival || !departure || !address) {
      alert("Hiányzó adatok! Kérjük, töltse ki az összes mezőt.");
    } else {
      // Ha minden mező ki van töltve, sikeres foglalást mutatunk
      alert("Sikeres foglalás!");
    }
  });
});
