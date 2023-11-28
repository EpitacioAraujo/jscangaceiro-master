Esse projeto é desenvolvido baseado no livro
Cangaceiro JavaScript uma aventura no sertão da programação

Timeline do que já foi feito:

- Cap. 1: Inicio do projeto escrevendo código rapidamente sem nos preocuparmos com boas práticas ou sua reutilização e observando as consquências dessa abordagem.

- Cap. 2: Recomeçando o projeto dessa vez utilizando a arquitetura MVC, que é uma arquitetura simples e muito conhecida. Comaçamos pela implantação do conceito de model (M de MVC) cuja o objetivo é materializar algo do mundo real em código, e o paradigma de orientação a objetos é excelente para isso, o objeto ou modelo é a representação em código de qualquer objeto (algum substantivo comum) que exista no mundo real que possa ser descrito.

- Cap. 3: Começamos a implementar controllers (C de MVC) que tem como objetivo a intermediação da instância e manipulação dos modelos com as ações do usuário.

- Cap. 4: Vemos que nosso modelo não era imutavel (caracteristica desejada nessa situação), logo percebemos que deveriamos implementar um série de tecnicas para prevenir que auterações sejam feitas diretamente no modelo, esse conjunto de tecnicas ficaram chamadas de "programação defenciva".

- Cap. 5: Estamos nesse captulo. (Pág 106), implantação de classe helper para trabalharmos com datas, podendo converter de texto para Data object e vice-versa.
  Para validação das datas utilizamos a boa prática de fail first, onde testamos os parametros recebidos e se caso não estajam no formato desejado uma exceção é impressa no console para que o programador saiba da existência do erro.
  Para validarmos um string de data no formato aaaa-mm-dd foi-se implantado um metodo regex que valida a string neste exato formato.
