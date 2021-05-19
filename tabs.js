let tabHeader = document.querySelectorAll(".TabHeader");
tabHeader.forEach(click => {
  click.onclick = changeTab;
});
function changeTab() {
  tableNumber = parseInt(this.dataset.tab);
  document.querySelector(".active-tab").classList.remove("active-tab");
  this.classList.add("active-tab");
  switch (tableNumber) {
    case 1:
      tableSection(tableNumber);
      break;
    case 2:
      tableSection(tableNumber);
      break;
    case 3:
      tableSection(tableNumber);
      break;
    case 4:
      tableSection(tableNumber);
      break;
    default:
      break;
  }
}
function tableSection(tableNumber) {
  let currentTab = document.querySelector(".showTab");
  currentTab.classList.remove("showTab");
  currentTab.classList.add("hideTab");
  let newSection = document.getElementById("tabSection-" + tableNumber);
  newSection.classList.remove("hideTab");
  newSection.classList.add("showTab");
}
