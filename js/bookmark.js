const bookmarkInputForm = document.getElementById("bookmark_input_form");

let bookmarkList = [];
if (localStorage.getItem("bookmarkList")) {
  bookmarkList = JSON.parse(localStorage.getItem("bookmarkList"));
} else {
  localStorage.setItem("bookmarkList", JSON.stringify(bookmarkList));
}

const addBookmarkItem = () => {
  let bookmarkList = [];
  if (localStorage.getItem("bookmarkList")) {
    bookmarkList = JSON.parse(localStorage.getItem("bookmarkList"));
  }
  let name = document.getElementById("name_input").value;
  let url = document.getElementById("url_input").value;
  let createAt = Date.now();
  bookmarkList.push({ name, url, createAt });
  localStorage.setItem("bookmarkList", JSON.stringify(bookmarkList));
  document.getElementById("name_input").value = "";
  document.getElementById("url_input").value = "";
  isAddBtnToggle();
};

let bookmarkAddBtn = false;
bookmarkInputForm.style.display = "none";

const isAddBtnToggle = () => {
  bookmarkAddBtn = !bookmarkAddBtn;
  if (bookmarkAddBtn) {
    bookmarkInputForm.style.display = "flex";
  } else {
    bookmarkInputForm.style.display = "none";
  }
};

document
  .getElementById("bookmark_add_btn")
  .addEventListener("click", isAddBtnToggle);

document.getElementById("add_btn").addEventListener("click", addBookmarkItem);
document.getElementById("cancel_btn").addEventListener("click", isAddBtnToggle);
