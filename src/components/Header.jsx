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
            <Link to='/' className="bg-verde_principal text-white font-bold font-sans  rounded-[0.5rem] p-2 border-solid border-[0.1rem] border-black">Cadastro</Link>
          </p>
          <p>
            <Link to='/pesquisa' className="font-bold font-sans rounded-[0.5rem] p-2 border-solid border-[0.01rem] border-black">Pesquisa</Link>
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