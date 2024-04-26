const loader = document.querySelector(".loader");
const detailsDiv = document.querySelector("#detailsDiv");
const urlParams = new URLSearchParams(window.location.search);
const slug = urlParams.get("slug");
console.log(slug);

fetch(`https://frontend-mentor-apis-6efy.onrender.com/countries/[${slug}]`)
  .then((res) => res.json())
  .then((data) => {
    loader.classList.add("hidden");
    creatDetails(data.data);
  });

function creatDetails(data) {
  detailsDiv.innerHTML = "";
  const div = document.createElement("div");
  div.classList.add("card");
  detailsDiv.innerHTML = `
      <a id="detailsBtn" class="btn btn-primary" href="./index.html">back home</a>
        <h2 class="section-title">${data.strDrink}</h2>
        <div class="drink">
          <img
            src="${data.flags.png}"
            alt="${data.flags.png}"
          />
          <div class="drink-info">
            <p><span class="drink-data">nativeName :</span> ${data.nativeName}</p>
            <p><span class="drink-data">population :</span> ${data.population}</p>
            <p><span class="drink-data">region :</span> ${data.region}</p>
            <p><span class="drink-data">subregion :</span> ${data.subregion}</p>
            <p>
              <span class="drink-data">capital :</span> ${data.capital}
            </p>
            <p>
            </p>
          </div>
        </div>
      `;
  detailsDiv.appendChild(div);
}
