document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll(".menu01 ul li a");
  const currentPage = decodeURIComponent(window.location.pathname.split("/").pop());

  links.forEach(link => {
    if (decodeURIComponent(link.getAttribute("href")) === currentPage) {
      link.classList.add("active");
    }
  });
});