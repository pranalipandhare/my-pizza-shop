window.addEventListener("scroll", function () {
  const header = this.document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});

//---------Toggle Menu

//---------Menu filter

{
  const menuFilter = document.querySelector(".menu-tabs"),
    menuItems = document.querySelectorAll(".item");

  // Fliter menu items
  menuFilter.addEventListener("click", (event) => {
    if (
      event.target.classList.contains("tab-item") &&
      !event.target.classList.contains("active")
    ) {
      //deactive existing active 'item
      menuFilter.querySelector(".active").classList.remove("active");

      //Active new 'Item
      event.target.classList.add("active");

      const target = event.target.getAttribute("data-target");

      menuItems.forEach((item) => {
        if (target === item.getAttribute("data-category") || target === "all") {
          item.classList.remove("hide");
          item.classList.add("show");
        } else {
          item.classList.add("hide");
          item.classList.remove("show");
        }
      });
    }
  });
}

//---------Page loader
