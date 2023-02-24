const travelSuggestionsButton = document.getElementById("travel-suggestions-button");
const thrillingAdventuresButton = document.getElementById("thrilling-adventures-button");
const roadtripAdventuresButton = document.getElementById("roadtrip-adventures-button");

const travelSuggestions = document.getElementById("travel-suggestions");
const thrillingAdventures = document.getElementById("thrilling-adventures");
const roadtripAdventures = document.getElementById("roadtrip-adventures");

function hideAll() {
  travelSuggestions.style.display = "none";
  thrillingAdventures.style.display = "none";
  roadtripAdventures.style.display = "none";
}

travelSuggestionsButton.addEventListener("click", function() {
  hideAll();
  travelSuggestions.style.display = "block";
});

thrillingAdventuresButton.addEventListener("click", function() {
  hideAll();
  thrillingAdventures.style.display = "block";
});

roadtripAdventuresButton.addEventListener("click", function() {
  hideAll();
  roadtripAdventures.style.display = "block";
});

// Initially hide all cards
hideAll();
// Show the first card (travel suggestions) by default
travelSuggestions.style.display = "block";


