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
