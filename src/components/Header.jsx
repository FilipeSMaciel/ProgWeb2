import { Link } from "react-router-dom";
import '../style.css';

export function Header() {
  return (
    <header >
      <section className="flex gap-[60rem] justify-center items-center mb-16 bg-header-fundo py-6">
        <div>
          <img class="w-[12rem] " src="circuitHub.png" alt="CircuitHub Logo" />
        </div>
        <div className="flex gap-10">
          <p>
            <Link to='/' className="text-verde_principal font-bold font-sans">Cadastro</Link>
          </p>
          <p>
            <Link to='/pesquisa' className="links">Pesquisa</Link>
          </p>
        </div>
      </section>
        <div clas>
          <h1>CircuitHub</h1>
          <h2>Seu Hub de Hardware e Gadjets</h2>
        </div>
    </header>
  )
}