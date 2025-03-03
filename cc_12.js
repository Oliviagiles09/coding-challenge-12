// Task 1
cosnt dashboard = document.getElementById("dashboard");
const deashboardSelector = document.querySelector('#dashboard');

function createMetricCard(id, title, initvalue) {
  let card = document.createElement("div");
  card.setAttribute("class","metric-card");
  card.setAttribute("id",id);
  card.innerHTML = '<h3>${title}</h3><p>$${initvalue}</p>';
  dashboard.appendChild(card);
};

createMetricCard("revenueCard", "Revenue", 0);

// Task 2
createMetricCard("profitCard", "profit", 0);
createMetricCard("expensesCard", "expenses", 0);

cosnt metricCardList = document.querySelectorAll(".metric-card");
const metricCardArray = Array.from(metricCardList);

metricCardArray.forEach(card => {
  card.innerHTML += "<p><i> - Updated</i></p>";
  card.style.backgroundColor = "greenyellow";
});
// Task 3
const inventoryList = document.getElementById("inventoryList");

function addInventoryItem(product) {
  let newLi = document.createElement("li");
  newLi.setAttribute("class","product-item");
  newLi.setAttribute("dataset",product);
  newLi.addEventListener("click", () => {removeInventoryItem(newLi)});
  newLi.textContent = product;
  inventoryList.appendChild(newLi);
};

addInventoryItem("Click me");
addInventoryItem("Add a product below");

let productForm = document.getElementById('productForm');
let error = document.getElementById('error');

productForm.addEventListener('submit', (event) => {
  let productName = document.getElementById('productName').value;
  if (productName.trim() === '';
  addInventoryItem(productName);
  event.preventDefault();
} else {
   error.textContent = '';
  addInventoryItem(productName);
  event.preventDefult();
};

function removeInventoryItem(item) {
  inventoryList.removeChild(item);
};

// Task 4
cosnt customerCards = document.querySelectorAll(".customer-card");
Const customerSelection = document.getElementById("customerSelection");

custometCards.forEach(card => {
  card.addEventListener("click", (event) => {
    console.log('User clicked ${event.target.textContent}');
    event.stopPropagation();
  });
});

customerSelection.addEventListener("click", () => {
consol.log('User clicked customerSelection');
});
