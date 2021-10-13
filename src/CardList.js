import { render } from './index';
import Card from './Card';

const CardList = (cards => {
 // const html = `<ul>${cards.map((card) => `<li>${card.name} </li>`).join("")}</ul>`;
  const html = `<ul>${cards.map((card) => Card(card)).join("")} </ul>`;
  render(html,document.getElementById('root'));
});

export default CardList;