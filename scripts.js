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
        storeFact(randomFact);
  }});

  // Function to display a fact on the page
const displayFact = (fact) => {
  const factDisplay = document.getElementById("factDisplay");
  factDisplay.innerHTML = fact ? `<b>Did you know</b> "${fact.fact}"` : "No facts available.";
};


// Fetch and display a random fact when the page loads
(async () => {
  const randomFact = await fetchRandomFact();
  displayFact(randomFact);
   if (randomFact) {
    storeFact(randomFact);
  }
})();

// Function to store data in local storage
const storeFact = (fact) => {
  const storedFacts =
    JSON.parse(localStorage.getItem("randomFacts")) || [];
  storedFacts.push(fact);
  localStorage.setItem("randomFacts", JSON.stringify(storedFacts));
    updateStoredFactsUI();
};

// Function to update the UI with stored facts
const updateStoredFactsUI = () => {
  const storedFactsList = document.getElementById("storedFactsList");
  storedFactsList.innerHTML = "";
  const storedFacts =
    JSON.parse(localStorage.getItem("randomFacts")) || [];

  // Display stored facts in reverse order (latest first)
  storedFacts.reverse().forEach((fact, index) => {
    const listItem = document.createElement("li");
    listItem.classList.add("stored-fact");

    const factText = document.createElement("p");
    factText.textContent = fact.fact;

    listItem.appendChild(factText);
    storedFactsList.appendChild(listItem);
  });
};