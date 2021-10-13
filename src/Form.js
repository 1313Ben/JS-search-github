import axios from 'axios';

const API_URL = "https://api.github.com/users"

class Form {
  constructor(addCard) {
    this.addCard = addCard;

    console.log(this.addCard);

    this.API_URL = "";
    this.searchTerm = "";
    this.searchInput = document.querySelector('input[name = "search"]');
    this.searchInput.addEventListener('keyup', (event) => this.handleKeyup(event));
    this.submitButton = document.querySelector('button[type = "submit"]');
    // if (this.searchTerm === "") {
    //   this.submitButton.disabled = true;
    // }
    // submitButton is disabled if searchTerm is empty
    this.submitButton.disabled = !this.searchTerm;

    this.form = document.querySelector('form');
    this.form.addEventListener('submit', (event) => this.handleSubmit(event));
  }

  handleKeyup(event) {
   // console.log('key is pressed');
   // console.log(event);
    this.searchTerm = event.target.value.trim(); // trim removes whitespace
    this.API_URL = `${API_URL}/${this.searchTerm}`;
    console.log(this.API_URL);
    this.submitButton.disabled = !this.searchTerm;
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(event);
    axios
      .get(this.API_URL)
      .then(res => this.addCard(res.data)) // ({data} => console.log(data) )
      .catch((err) => this.formatError('Promise rejected!', err));
    this.form.reset(); // empty form inputs
  }

  formatError(err) {
    console.log(err);
    const errorText = document.createElement('p');
    errorText.innerText = "No User Found";
    errorText.style.color = "red";
    this.form.appendChild(errorText);
    setTimeout(() => this.form.removeChild(errorText), 5000);
  }
}

export default Form;