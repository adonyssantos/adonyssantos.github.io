const grid = new Muuri(".grid", {
  layout: {
    rounding: true,
  },
});

window.addEventListener("load", () => {
  grid.refreshItems().layout();
  document.getElementById("grid").classList.add("loaded");

  // Add the listeners of the links to filter by category
  const links = document.querySelectorAll("#category a");
  links.forEach((element) => {
    element.addEventListener("click", (event) => {
      const category = event.target.innerHTML.toLowerCase();

      event.preventDefault();
      links.forEach((link) => link.classList.remove("active"));
      event.target.classList.add("active");
      category === "all"
        ? grid.filter(`[data-category]`)
        : grid.filter(`[data-category="${category}]"`);
    });
  });

  // Add the listener for the search bar
  document.querySelector("#search-bar").addEventListener("input", (event) => {
    const search = event.target.value;
    grid.filter((item) => item.getElement().dataset.tags.includes(search));
  });

  // Add listener for images
  const overlay = document.getElementById("overlay");
  document.querySelectorAll(".grid .item img").forEach((element) => {
    element.addEventListener("click", () => {
      const path = element.getAttribute("src");
      const title = element.parentNode.parentNode.dataset.title;
      const description = element.parentNode.parentNode.dataset.description;
      const project_repository =
        element.parentNode.parentNode.dataset.project_repository;

      overlay.classList.add("active");
      document.querySelector("#overlay img").src = path;
      document.querySelector("#overlay .title").innerHTML = title;
      document.querySelector("#overlay .description").innerHTML = description;
      document.querySelector("#overlay a").href = project_repository;
      document.querySelector("#overlay a").innerHTML = project_repository;
      
    });
  });
});
