import { useParams } from 'react-router-dom';
import classes from './HighlightedQuote.module.css';
// import { Redirect } from 'react-router';
// import NoQuotesFound from "./NoQuotesFound";
const HighlightedQuote = (props) => {
  const param=useParams();
  const { text, author} = props.details;
  return (
    <figure className={classes.quote}>
      <p>{text}</p>
      <figcaption>{author}</figcaption>
    </figure>
  );
};

export default HighlightedQuote;
