const grid = new Muuri(".grid", {
  layout: {
    rounding: true,
  },
});

window.addEventListener("load", () => {
  grid.refreshItems().layout();
  document.getElementById("grid").classList.add("loaded");
});
