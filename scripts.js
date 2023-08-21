// API URL and headers for making requests
const url = "https://facts-by-api-ninjas.p.rapidapi.com/v1/facts";
const headers = {
  "X-RapidAPI-Key": "5659067cd4msh0aae8be80c1491ap1918d4jsn002d12c832df",
  "X-RapidAPI-Host": "facts-by-api-ninjas.p.rapidapi.com",

};

// Function to fetch a random fact from the API
const fetchRandomFact = async () => {
  try {
    const response = await fetch(url, { headers });
    const result = await response.json();
    return result[0] || null;
  } catch (error) {
    console.error(error);
    return null;
  }
};


// Fetch fact button event listener
const fetchFactBtn = document.getElementById("fetchFactBtn");
fetchFactBtn.addEventListener("click", async () => {
  const randomFact = await fetchRandomFact();
 if (randomFact) {
    displayFact(randomFact);
  }});

  // Function to display a fact on the page
const displayFact = (fact) => {
  const factDisplay = document.getElementById("factDisplay");
  factDisplay.textContent = fact ? `Did you know "${fact.fact}"` : "No facts available.";
};
