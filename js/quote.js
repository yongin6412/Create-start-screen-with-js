(function () {
  const API_URL = "https://random-quote.hyobb.com";
  const quoteElement = document.getElementById("quote");
  const quoteItem = localStorage.getItem("quote");

  const nowDay = new Date();
  const month = nowDay.getMonth() + 1;
  const date = nowDay.getDate();
  const today = `${month}-${date}`;

  const getQuote = async () => {
    try {
      const response = await fetch(API_URL).then((res) => res.json());
      const data = response[1].respond;
      setQuote(data);
      localData(data);
    } catch (error) {
      console.error(error);
      setQuote("어쩌겠습니까?? 해내야죠!! - 박은빈");
    }
  };

  const setQuote = (data) => {
    quoteElement.textContent = data;
  };

  const localData = (data) => {
    const quote = { create: today, quote: data };
    localStorage.setItem("quote", JSON.stringify(quote));
  };

  if (quoteItem) {
    const { create, quote } = JSON.parse(quoteItem);
    if (create === today) {
      quoteElement.textContent = quote;
    } else {
      getQuote();
    }
  } else {
    getQuote();
  }
})();
