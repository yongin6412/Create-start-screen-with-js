const API_URL = "https://random-quote.hyobb.com/";
const quoteElement = document.getElementById("quote");

const getQuote = async () => {
  try {
    const response = await fetch(API_URL).then((res) => res.json());
    const data = response[1].respond;
    setQuote(data);
  } catch (error) {
    console.error(error);
  }
};

const setQuote = (data) => {
  quoteElement.textContent = data;
};

getQuote();
