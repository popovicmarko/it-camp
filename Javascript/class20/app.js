const BASE_URL = "https://catfact.ninja";
let data = null;

async function getFactData(fetch_url) {
  let res;
  if (fetch_url) {
    res = await fetch(fetch_url);
  } else {
    res = await fetch(`${BASE_URL}/facts`);
  }

  const resToJson = await res.json();

  return { ...resToJson };
}

function showFactsCards(factsArr) {
  const cardContainer = document.getElementById("card-container");

  factsArr.forEach((factEl) => {
    const factDiv = document.createElement("div");
    factDiv.textContent = factEl.fact;
    cardContainer.appendChild(factDiv);
  });
}

function showBtnPagination(paginationLinks) {
  const paginationContainer = document.getElementById("pagination-container");

  paginationLinks.forEach((link) => {
    const linkBtn = document.createElement("button");
    linkBtn.textContent = link.label;
    if (link.active) {
      linkBtn.style.backgroundColor = "gray";
      linkBtn.style.color = "gold";
    }
    if (link.url) {
      linkBtn.onclick = function () {
        refetchData(link.url);
      };
    } else {
      linkBtn.disabled = true;
    }
    paginationContainer.appendChild(linkBtn);
  });
}

async function refetchData(newLink) {
  const newRes = await getFactData(newLink);

  document.getElementById("pagination-container").innerHTML = "";
  document.getElementById("card-container").innerHTML = "";

  showFactsCards(newRes.data);
  showBtnPagination(newRes.links);
}

(async function () {
  data = await getFactData();

  showFactsCards(data.data);
  showBtnPagination(data.links);
})();