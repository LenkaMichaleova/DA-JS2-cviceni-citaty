import { render } from '@czechitas/render';
import '../global.css';
import './index.css';

document.querySelector('#root').innerHTML = render(
  <div className="container">
    <p>"Blbější z toho nevyjdu"</p>
  </div>
);
