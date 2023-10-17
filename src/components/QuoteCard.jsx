import { getRandomElement } from "../utils/random";
import quotes from "../db/quotes.json";
import "./QuoteCard.css"

const QuoteCard = ({ quote, handleChangeQuote }) => {

  return (
    <section className="quoteCard">
      <article className="quoteCard__container">
        <h1 className="quoteCard__title">COOKIE FORTUNE</h1>

        <p className="quoteCard__phrase">{quote.phrase}</p>

        <button className="quoteCard__btn" onClick={handleChangeQuote}>
         Other
        </button>
      </article>

      <footer
      className="quoteCard__footer">Author: {quote.author}</footer>
    </section>
  );
};

export default QuoteCard;
