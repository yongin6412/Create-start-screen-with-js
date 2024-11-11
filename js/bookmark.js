(function () {
  const bookmarkInputForm = document.getElementById("bookmark_input_form");
  const bookmarkListElement = document.getElementById("bookmark_list");

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
    bookmarkItem({ name, url, createAt });
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

  const bookmarkItem = (item) => {
    const bookmarkItem = document.createElement("div");
    bookmarkItem.classList.add("bookmark_item");
    bookmarkItem.id = `bookmark-item-${item.createAt}`;

    const bookmarkUrl = document.createElement("a");
    bookmarkUrl.href = item.url;

    const bookmarkImg = document.createElement("img");
    bookmarkImg.src = `https://www.google.com/s2/favicons?domain_url=${item.url}`;

    const bookmarkName = document.createElement("div");
    bookmarkName.classList.add("bookmark_name");
    bookmarkName.textContent = item.name;

    const deleteBtn = document.createElement("div");
    deleteBtn.classList.add("delete_btn");
    deleteBtn.textContent = "삭제";
    deleteBtn.addEventListener("click", () => {
      deleteBookmarkItem(item.createAt);
    });

    bookmarkItem.appendChild(bookmarkUrl);
    bookmarkItem.appendChild(deleteBtn);
    bookmarkUrl.appendChild(bookmarkImg);
    bookmarkUrl.appendChild(bookmarkName);

    bookmarkListElement.appendChild(bookmarkItem);
  };

  const setBookmarkList = () => {
    bookmarkList.forEach((item) => {
      bookmarkItem(item);
    });
  };

  const deleteBookmarkItem = (id) => {
    const isDelete = window.confirm("정말로 삭제하시겠어요?");
    if (isDelete) {
      const bookmarkList = JSON.parse(localStorage.getItem("bookmarkList"));
      const filterBookmarkList = bookmarkList.filter(
        (item) => item.createAt !== id
      );
      localStorage.setItem("bookmarkList", JSON.stringify(filterBookmarkList));
      document.getElementById(`bookmark-item-${id}`).remove();
    }
  };

  document
    .getElementById("bookmark_add_btn")
    .addEventListener("click", isAddBtnToggle);

  document.getElementById("add_btn").addEventListener("click", addBookmarkItem);
  document
    .getElementById("cancel_btn")
    .addEventListener("click", isAddBtnToggle);

  setBookmarkList();
})();
