const darkmodeBtn = document.getElementById("darkmodeBtn");
const darkmodeImg = document.getElementById("darkmodeImg");

darkmodeBtn.addEventListener("click", () => {
  if (document.body.classList.contains("dark")) {
    document.body.classList.remove("dark");
    darkmodeBtn.lastChild.textContent = "Dark Mode";
    darkmodeImg.setAttribute("src", "images/dark_mode.svg");
    localStorage.setItem("mode", "light");
  } else {
    document.body.classList.add("dark");
    darkmodeBtn.lastChild.textContent = "Light Mode";
    darkmodeImg.setAttribute("src", "images/dark_mode.svg");
    localStorage.setItem("mode", "dark");
  }
});
document.addEventListener("DOMContentLoaded", () => {
  const mode = localStorage.getItem("mode");
  if (mode === "dark") {
    document.body.classList.add("dark");
    darkmodeBtn.lastChild.textContent = "Light Mode";
    darkmodeImg.setAttribute("src", "images/dark_mode.svg");
  }
});
///  code
const select = document.querySelector("#select");
const card_Section = document.querySelector("#card_Section");
const loader = document.querySelector("#loader");
const input = document.querySelector("#input");
const error = document.querySelector("#erorr");

fetch("https://frontend-mentor-apis-6efy.onrender.com/countries")
  .then((res) => res.json())
  .then((data) => {
    loader.classList.add("hidden");
    creatCard(data.data);
  });

function creatCard(data) {
  card_Section.innerHTML = "";
  data.forEach(({ name, population, region, flags, capital }) => {
    const div = document.createElement("div");
    div.classList.add("card-div");
    div.innerHTML += `
    <a href="">
    <div class="card-div">
           <img class="card-img" src="${flags.png}" alt="" width="264px"  height="160px"/>
            <h2 class="card-name">${name.common}</h2>
            <div class="card-deck">
              <p class="card-p">
                <span class="card-span">Population:</span> ${population}
              </p>
              <p class="card-p">
                <span class="card-span">Region:</span> ${region}
              </p>
              <p class="card-p">
                <span class="card-span">Capital:</span> ${capital}
              </p>
            </div>
     </div>
    </a>
      `;
    card_Section.appendChild(div);
  });
}

// option
select.addEventListener("change", (e) => {
  card_Section.innerHTML = "";
  loader.classList.remove("hidden");
  fetch(
    `https://frontend-mentor-apis-6efy.onrender.com/countries?region=${e.target.value}`
  )
    .then((res) => res.json())
    .then((data) => {
      loader.classList.add("hidden");
      creatCard(data.data);
    });
});

// input
input.addEventListener("change", (e) => {
  let qiymat = e.target.value;
  let ishtirok = qiymat.toLowerCase();
  ishtirok = ishtirok.charAt(0).toUpperCase() + ishtirok.slice(1);
  loader.classList.remove("hidden");
  fetch(
    `https://frontend-mentor-apis-6efy.onrender.com/countries?search=${ishtirok}`
  )
    .then((res) => res.json())
    .then((data) => {
      loader.classList.add("hidden");
      creatCard(data.data);
    });
});
