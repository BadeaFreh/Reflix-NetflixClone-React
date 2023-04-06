import classes from './QuoteItem.module.css';
import { Link } from 'react-router-dom';

const QuoteItem = (props) => {
  return (
    <li className={classes.item}>
      <figure>
        <blockquote>
          <p>{props.text}</p>
        </blockquote>
        <figcaption>{props.author}</figcaption>
      </figure>
      {/* we already have "/quotes" defined in the App, so just add /quoteId to the path */}
      <Link to={`${props.id}`} className='btn'>
        View Fullscreen
      </Link>
    </li>
  );
};

export default QuoteItem;
