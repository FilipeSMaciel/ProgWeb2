import { Link, useLocation } from "react-router-dom";
import '../style.css';

export function Header() {
  const location = useLocation();

  return (
    <header>
      <section className="flex gap-[50rem] justify-center items-center h-[10vh] bg-header-fundo">
        <div>
          <img className="w-[12rem] h-[6rem]" src="Circuit.svg" alt="CircuitHub Logo" />
        </div>
        <div className="flex gap-10">
          <p>
            <Link
              to='/'
              className={`font-bold font-roboto rounded-[0.5rem] text-[0.8rem] uppercase p-2 border-solid border-[0.1rem] ${location.pathname === '/' ? 'bg-verde_principal text-white' : 'border-verde_principal text-verde_principal'}`}
            >
              Cadastro
            </Link>
          </p>
          <p>
            <Link
              to='/pesquisa'
              className={`font-bold font-roboto rounded-[0.5rem] text-[0.8rem] p-2 uppercase border-solid border-[0.1rem] ${location.pathname === '/pesquisa' ? 'bg-verde_principal text-white' : 'text-verde_principal border-verde_principal'}`}
            >
              Pesquisa
            </Link>
          </p>
        </div>
      </section>
        <video className="absolute inset-0 z-[-4] w-[100vw]" autoPlay loop muted playsInline>
          <source src="1108.mp4" type="video/mp4" />
        </video>
      <section className="flex justify-center flex-col items-center font-roboto mt-52 mb-[40vh] bg-gray-900 p-8">
        <h1 className=" text-[10rem] text-white">CircuitHub</h1>
        <h2 className="text-[2rem] text-neutral-300">Seu Hub de Hardware e Gadjets</h2>
      </section>
    </header>
  );
}
