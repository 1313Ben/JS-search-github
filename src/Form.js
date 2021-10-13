const API_URL = "https://api.github.com/users"

class Form {
  constructor() {
    this.API_URL = "";
    this.searchTerm = "";
    this.searchInput = document.querySelector('input[name = "search"]');
    this.searchInput.addEventListener('keyup', (event) => this.handleKeyup(event))
  }
  handleKeyup(event) {
   // console.log('key is pressed');
   // console.log(event);
    this.searchTerm = event.target.value.trim(); // trim removes whitespace
    this.API_URL = `${API_URL}/${this.searchTerm}`;
    console.log(this.API_URL);
  }
}

export default Form;