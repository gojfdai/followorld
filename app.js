// Sample data for demonstration
const data = [
  "Apple",
  "Banana",
  "Cherry",
  "Grape",
  "Lemon",
  "Orange",
  "Peach",
  "Strawberry",
];

const searchInput = document.getElementById("searchInput");
const resultsList = document.getElementById("results");

searchInput.addEventListener("input", function () {
  const searchQuery = searchInput.value.toLowerCase();
  const filteredData = data.filter(function (item) {
    return item.toLowerCase().includes(searchQuery);
  });

  displayResults(filteredData);
});

function displayResults(results) {
  resultsList.innerHTML = "";

  if (results.length === 0) {
    resultsList.innerHTML = "<li>No results found</li>";
    return;
  }

  results.forEach(function (result) {
    const li = document.createElement("li");
    li.textContent = result;
    resultsList.appendChild(li);
  });
}
