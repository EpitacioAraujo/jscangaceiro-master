// TODO: 69
class NegociacaoController {
  constructor() {
    let $ = document.querySelector.bind(document);

    this._inputData = $("#data");
    this._inputQuantidade = $("#quantidade");
    this._inputValor = $("#valor");
  }

  adiciona(event) {
    event.preventDefault();

    console.log(this._inputData);
    console.log(parseInt(this._inputQuantidade));
    console.log(parseFloat(this._inputValor));
  }
}