import { Link } from "react-router-dom";

export function Header() {
  return (
    <header>
      <div className="div-titulo">
        <img src="" alt="CircuitHub Logo" />
        <div>
          <h1>CircuitHub</h1>
          <h2>Seu Hub de Hardware e Gadjets</h2>
        </div>
      </div>
      <div className="div-links">
        <p>
          <Link to='/' className="links">Cadastro</Link>
        </p>
        <p>
          <Link to='/pesquisa' className="links">Pesquisa</Link>
        </p>
      </div>
    </header>
  )
}