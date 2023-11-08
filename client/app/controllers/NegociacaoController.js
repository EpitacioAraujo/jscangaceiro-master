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

    let negociacao = new Negociacao(
      this._inputData.value
        .split("-")
        .map((item, indice) => item - (indice % 2)),
      parseInt(this._inputQuantidade.value),
      parseFloat(this._inputValor.value)
    );

    console.log(negociacao);
  }
}
