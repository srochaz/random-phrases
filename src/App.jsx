import { useState } from "react";
import "./App.css";
import quotes from "./db/quotes.json";
import { getRandomElement } from "./utils/random";
import QuoteCard from "./components/QuoteCard";

const backGrounds = ["bg1", "bg2", "bg3", "bg4"];

<style>
  @import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@600&family=Lato:wght@300;400;700&family=Open+Sans:wght@300;400;600&family=Outfit:wght@400;700&family=Poppins:wght@300;400;600;700&display=swap');
</style>

function App() {
  const [quote, setQuote] = useState(getRandomElement(quotes));
  const [currentBg, setCurrentBg] = useState(getRandomElement(backGrounds));

  const handleChangeQuote = () => {
    setQuote(getRandomElement(quotes));
    setCurrentBg(getRandomElement(backGrounds));
  };

  return (
    <main className={`app ${currentBg}`}>
      <QuoteCard
        quote={quote}
        handleChangeQuote={handleChangeQuote}
      />
    </main>
  );
}

export default App;
