import { Link, useLocation } from "react-router-dom";
import '../style.css';

export function Header() {
  const location = useLocation();

  return (
    <header className={`w-full h-[100vh] ${location.pathname === '/' ? 'bg-[url("Circuit5.png")]' : 'h-[13vh] bg-header-fundo'}`}>
      <section className={`flex gap-[50rem] justify-center items-center h-[13vh]  ${location.pathname === '/pesquisa' ? 'bg-header-fundo' : ' bg-black/40'}`} >
        <div>
          <img className="w-[10vw]  py-4" src="Circuit3.svg" alt="CircuitHub Logo" />
        </div>
        <div className="flex gap-10">
          <p>
            <Link
              to='/'
              className={`font-extrabold font-roboto rounded-[0.3rem] text-[1rem] uppercase px-3 py-2   ${location.pathname === '/' ? ' text-white font-extrabold text-[1.2rem]' : 'text-white font-light'}`}
            >
              Cadastro
            </Link>
          </p>
          <p>
            <Link
              to='/pesquisa'
              className={`font-bold font-roboto rounded-[0.3rem] text-[1rem] uppercase px-3 py-2  ${location.pathname === '/pesquisa' ? 'text-white font-extrabold text-[1.2rem]' : 'text-white font-light'}`}
            >
              Pesquisa
            </Link>
          </p>
        </div>
      </section>
      {location.pathname === '/pesquisa' ? ''
      :
      <>
        
        <section className="flex justify-center flex-col items-center font-roboto mt-[13vh]   p-8">
          <h1 className=" text-[10rem] text-white font-bold">Circuit<span className="text-verde_principal">Hub</span></h1>
          <h2 className="text-[2rem] text-neutral-300 ">Seu Hub de Hardware e Gadjets</h2>
        </section>
      </>
      }
    </header>
  );
}
