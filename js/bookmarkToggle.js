const bookMarkBar = document.getElementById("bookmark_bar");
const bookMarkOpen = document.getElementById("bookmark_open");
const bookMarkClose = document.getElementById("bookmark_close");

const bookmarkState = localStorage.getItem("isbookmark");

if (bookmarkState === "open") {
  bookMarkBar.style.display = "flex";
  bookMarkOpen.style.display = "flex";
  bookMarkClose.style.display = "none";
} else {
  bookMarkBar.style.display = "none";
  bookMarkOpen.style.display = "none";
  bookMarkClose.style.display = "flex";
}

const bookmarkToggle = () => {
  const isBookMarkState = localStorage.getItem("isbookmark");
  if (isBookMarkState === "open") {
    localStorage.setItem("isbookmark", "close");
    bookMarkBar.style.display = "none";
    bookMarkOpen.style.display = "none";
    bookMarkClose.style.display = "flex";
  } else {
    localStorage.setItem("isbookmark", "open");
    bookMarkBar.style.display = "flex";
    bookMarkOpen.style.display = "flex";
    bookMarkClose.style.display = "none";
  }
};

document
  .getElementById("bookmark_close_btn")
  .addEventListener("click", bookmarkToggle);

document
  .getElementById("bookmark_open_btn")
  .addEventListener("click", bookmarkToggle);
