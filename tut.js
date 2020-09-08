const anchors = document.querySelectorAll('.anchor');
const contentTab = document.querySelector('.content-tab');
const section1 = document.getElementById('section-1');
const section2 = document.getElementById('section-2');
const section3 = document.getElementById('section-3');
const section4 = document.getElementById('section-4');
const section5 = document.getElementById('section-5');

// sidebar
const sidebar = document.querySelector('.sidebar');
const container = document.querySelector('.container');
const btn = sidebar.querySelector('.sidebar-toggle');

btn.addEventListener('click', function () {
  btn.style.transform="rotate-90"
  if (sidebar.classList.contains('hide-sidebar')) {
    sidebar.classList.remove('hide-sidebar')
    container.classList.remove("increase");
  } else {
    sidebar.classList.add("hide-sidebar");
    container.classList.add('increase')
  }
  
  
})

window.addEventListener('DOMContentLoaded', loadPages);

function loadPages() {
    anchors.forEach((anchor) => {
      anchor.addEventListener("click", () => {
        anchorSection = anchor.getAttribute("href").replace("#", "");
        switch (anchorSection) {
          case "section-1":
            contentTab.innerHTML = section1.innerHTML;
            break;
          case "section-2":
            contentTab.innerHTML = section2.innerHTML;
            break;
          case "section-3":
            contentTab.innerHTML = section3.innerHTML;
            break;
          case "section-4":
            contentTab.innerHTML = section4.innerHTML;
            break;
          case "section-5":
            contentTab.innerHTML = section5.innerHTML;
            break;
        }
      });
    });
}
