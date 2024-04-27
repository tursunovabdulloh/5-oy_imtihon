const darkmodeBtn = document.getElementById("darkmodeBtn");
const darkmodeImg = document.getElementById("darkmodeImg");
const detIMg = document.getElementById("detIMg");
const loader = document.querySelector("#loader");
const detailsDiv = document.querySelector("#detailsDiv");
const urlParams = new URLSearchParams(window.location.search);
const slug = urlParams.get("slug");
console.log(slug);

fetch(`https://frontend-mentor-apis-6efy.onrender.com/countries/${slug}`)
  .then((data) => data.json())
  .then((data) => {
    creatDetails(data);
  });
function creatDetails(data) {
  const div = document.createElement("div");
  div.classList.add("det-wrapper");
  div.innerHTML = `
         <div class="det-img-div">
                <a href="./index.html" class="det-a" id="det-a">
                  <img src="images/call-made.svg" alt="" id="detIMg" />
                  Back home
                </a>
                <img src="${data.flags.png}" alt="" class="detail-img" />
              </div>
              <div class="det-dec-div">
                <div class="det-item-div">
                  <div class="det-item-1-div">
                    <div class="divH">
                      <h2 class="dec-h2">${data.name.common}</h2>
                    </div>
                    <p class="about-p">
                      Native Name: <span class="about-span">${data.name.nativeName}</span>
                    </p>
                    <p class="about-p">
                      Population: <span class="about-span">${data.population}</span>
                    </p>
                    <p class="about-p">
                      Region: <span class="about-span">${data.region}</span>
                    </p>
                    <p class="about-p">
                      Sub Region: <span class="about-span">${data.subregion}</span>
                    </p>
                    <p class="about-p">
                      Capital: <span class="about-span">${data.capital}</span>
                    </p>
                  </div>
                  <div class="det-item-2-div">
                    <p class="about-p">
                      Top Level Domain: <span class="about-span">${data.cioc}</span>
                    </p>
                    <p class="about-p">
                      Currencies: <span class="about-span">${data.currencies}</span>
                    </p>
                    <p class="about-p">
                      Languages:
                      <span class="about-span">${data.languages}</span>
                    </p>
                  </div>
                </div>
                <div class="det-border-div">
                  <h2 class="ab-bor-text">Border Countries:</h2>
                  <a href=""><button class="det-btn">Uzbekistan</button></a>
                  <a href=""><button class="det-btn">France</button></a>
                  <a href=""><button class="det-btn">German</button></a>
                </div>
         </div>            
        `;
  detailsDiv.appendChild(div);
}
//darmkde
darkmodeBtn.addEventListener("click", () => {
  if (document.body.classList.contains("dark")) {
    document.body.classList.remove("dark");
    darkmodeBtn.lastChild.textContent = "Dark Mode";
    darkmodeImg.setAttribute("src", "images/dark_mode.svg");
    detIMg.setAttribute("src", "images/call-made.svg");
    localStorage.setItem("mode", "light");
  } else {
    document.body.classList.add("dark");
    darkmodeBtn.lastChild.textContent = "Light Mode";
    darkmodeImg.setAttribute("src", "images/dark_mode.svg");
    detIMg.setAttribute("src", "images/call-madee.svg");
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
document.addEventListener("DOMContentLoaded", () => {
  const modde = localStorage.getItem("modde");
  if (modde === "dark") {
    document.body.classList.add("dark");
    detIMg.setAttribute("src", "images/call-madee.svg");
    localStorage.setItem("modde", "dark");
  } else {
    document.body.classList.add("light");
    detIMg.setAttribute("src", "images/call-made.svg");
    localStorage.setItem("modde", "light");
  }
});
