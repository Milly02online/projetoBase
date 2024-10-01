import React from "react";
import './style.css';

const Produtos = () => {
  return (
    <section id="produtos">

      <div className="secao-produtos center">
        <h2 className="titulos">NOSSOS PRODUTOS</h2>
        <p>
          Trabalhamos com oculos de gral, oculos de sol, lentes transitions nos modelos masculino, feminino e infantil.
        </p>

        <p>
          Todos os nossos prudutos sao acessiveis e contam com a melhor qualidade do mercado.
        </p>
      </div>

      <div className="oculos-imgs">
        <div className="card-oculos">
          <h3>Óculos de grau</h3>
          <picture>
            <img src="./assets/oculos01.png" alt="Óculos de grau"/>
          </picture>
          <p>R$ 550,00</p>
        </div>

        <div className="card-oculos">
          <h3>Óculos Transition</h3>
          <picture>
            <img src="./assets/oculos02.png" alt="Óculos Transition"/>
          </picture>
          <p>R$ 1.550,00</p>
        </div>

        <div className="card-oculos">
          <h3>Óculos de Sol</h3>
          <picture>
            <img src="./assets/oculos03.png" alt="Óculos de Sol"/>
          </picture>
          <p>R$ 750,00</p>
        </div>

        <div className="card-oculos">
          <h3>Óculos Infantil</h3>
          <picture>
            <img src="./assets/oculos04.png" alt="Óculos Infantil"/>
          </picture>
          <p>R$ 250,00</p>
        </div>
      </div>

      <div className="lista-oculos center">
        <p>Todos os nossos prosutos incluem:</p>
        <ul>
          <li>Garantia de 1 ano</li>
          <li>Manutenção preventiva</li>
          <li>Descontos especiais na compra da segunda unidade</li>
          <li>Flexibilidade de pagamento</li>
        </ul>
      </div>
    </section>
  )
}

export default Produtos;