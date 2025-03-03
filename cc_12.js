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
