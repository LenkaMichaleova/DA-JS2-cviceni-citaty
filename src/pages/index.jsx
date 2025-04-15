import { render } from '@czechitas/render';
import '../global.css';
import './index.css';
import { listQuotes , randomQuote} from "/quotes.js"

document.querySelector('#root').innerHTML = render(
  <div className="container">
    <p>{randomQuote(listQuotes)}</p>
  </div>
);