window.addEventListener("scroll", function () {
  const header = this.document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});

//---------Toggle Menu
function toggleMenu() {
  const menuBar = document.querySelector(".menuToggle");
  const nav = document.querySelector(".nav");
  menuBar.classList.toggle("active");
  nav.classList.toggle("active");
}
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
window.addEventListener("load", function () {
  //-------- loader

  document.querySelector(".page-loader").classList.add("fade-out");
  this.setTimeout(function () {
    document.querySelector(".page-loader").style.display = "none";
  });

  //--------AOS or scrool after loader

  AOS.init({
    Delay: 500,
    duration: 600,
  });
});

// Signup page for the site
// Get the modal for the site
