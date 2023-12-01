// TODO: 69
class NegociacaoController {
  constructor() {
    let $ = document.querySelector.bind(document);

    this._inputData = $("#data");
    this._inputQuantidade = $("#quantidade");
    this._inputValor = $("#valor");

    this._negociacoes = new Negociacoes();
  }

  _limpaFormulario() {
    this._inputData.value = "";
    this._inputQuantidade = 1;
    this._inputValor.value = 0.0;
    this._inputData.focus();
  }

  _criaNegociacao() {
    return new Negociacao(
      DateConverter.paraData(this._inputData.value),
      parseInt(this._inputQuantidade.value),
      parseFloat(this._inputValor.value)
    );
  }

  adiciona(event) {
    event.preventDefault();

    this._negociacoes.adiciona(this._criaNegociacao(0));

    console.log(this._negociacoes.paraArray());

    this._limpaFormulario();
  }
}
