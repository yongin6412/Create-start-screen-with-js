const searchElement = document.getElementById("input");

const search = () => {
  const searchWord = searchElement.value;
  window.location.href = `https://www.google.com/search?q=${searchWord}`;
};

const onClickEnter = (e) => {
  if (e.code === "Enter") {
    search();
  }
};

searchElement.addEventListener("keypress", (e) => {
  onClickEnter(e);
});
