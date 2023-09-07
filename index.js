const btn = document.getElementById("search-button");
const result_bar = document.getElementById("right");

const getHotels = async () => {
  // Clear previous search results
  result_bar.innerHTML = "";

  try {
    // Modify the URL to include the appropriate endpoint and query parameters
    const response = await fetch("https://geekster-gotels-project.free.beeceptor.com/hotels"); // Adjust the URL accordingly

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();

    data.forEach((hotel) => {
      const card = document.createElement("div");
      card.classList.add("cards");
      card.innerHTML = `
        <div class="row g-0">
          <div class="col-md-4">
            <img src='${hotel.images}' class="img-fluid rounded-start" alt="...">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">${hotel.name}</h5>
              <p class="card-text">Description: ${hotel.details}</p>
              <p>Price: ${hotel.price}rs</p>
              <p>Rating: ${hotel.rating}rs</p>
            </div>
          </div>
        </div>
      `;
      result_bar.appendChild(card);
    });
  } catch (error) {
    
    result_bar.innerHTML = "<p>An error occurred while fetching data. Please try again later.</p>";
  }
};

btn.addEventListener("click", () => {
  getHotels();
});