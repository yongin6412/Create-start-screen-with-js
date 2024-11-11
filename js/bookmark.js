const bookmarkInputForm = document.getElementById("bookmark_input_form");

let bookmarkAddBtn = false;
bookmarkInputForm.style.display = "none";

const isAddBtnClick = () => {
  bookmarkAddBtn = !bookmarkAddBtn;
  if (bookmarkAddBtn) {
    bookmarkInputForm.style.display = "flex";
  } else {
    bookmarkInputForm.style.display = "none";
  }
};

document
  .getElementById("bookmark_add_btn")
  .addEventListener("click", isAddBtnClick);
