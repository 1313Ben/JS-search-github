import Form from "./Form";
import CardList from "./CardList";

class App {
  constructor() {
    this.cards = [];
    this.addCard = this.addCard.bind(this); // this is App
    
  }
  addCard(data) {
    this.cards = [data, ...this.cards]; // last entry comes to first
    //console.log(this.cards);
    CardList(this.cards);
  }
}

const app = new App();
const form = new Form(app.addCard);

export const render = (html, node) => (node.innerHTML = html);