import React from "react";
import "./styles.css"

const Localizacao = () => {
  return <>
  <section class="Localizacao">
    <div class="conteudo-localizacao">
      <h3 id="text-localizacao">LOCALIZAÇÃO</h3>
      <div class="info-localizacao">
        <p id="endereco"><i class=""/>Rua Fulana de Tal, 711 - Bairro - Fortaleza-CE</p>
        <p id="email"><i class=""/>odontoclinica@email.com</p>
        <p id="telefone"><i class=""/>(85) 4002-8922</p>
      </div>
    </div>
    <div class="mapa">
      <img src="https://www.aeroin.net/wp-content/uploads/2019/09/Print-Google-Maps-Toledo-Express-Airport.jpg" id="img-mapa"></img>
    </div>
  </section>
  </>
};

export default Localizacao;
