import { Modal } from 'react-responsive-modal';
import { useEffect, useState } from 'react';
import { Card } from './Card'
import { NovoItem } from './NovoItem';
import 'react-responsive-modal/styles.css'
import '../style.css';


export function Main() {

  const [itens, setItens] = useState([])
  const [open, setOpen] = useState(false)

  const listaItens = itens.map(item => (
    <Card
      key={item.nome}
      item={item}
      itens={itens}
      setItens={setItens}
    />
  ))

  useEffect(() => {
    if (localStorage.getItem('itens')) {
      const storedItens = JSON.parse(localStorage.getItem('itens'))
      setItens(storedItens)
    }
  }, [listaItens])

  function abrirForm() {
    setOpen(true)
  }



  return (
    <main className=' font-roboto  bg-header-fundo '>

      <section className='flex flex-col items-center gap-[5rem] p-[10rem] '>

        <h2 className='text-[3rem] capitalize text-neutral-300'>Como funciona</h2>

        <div className='flex  gap-[2rem] items-center'>
          <div className='flex flex-col justify-center items-center gap-3 bg-neutral-700 p-20 rounded-[20rem] w-[25rem] h-[25rem]   hover:border-white hover:border-2 hover:scale-105 hover:bg-verde_principal transition-transform duration-300 ease-in-out'>
            <img className='w-[10rem] rounded-[0.4rem]' src="add.png" alt="" />
            <h3 className='text-neutral-200 text-[2rem] text-center'>1</h3>
            <h4 className='text-neutral-300 text-[1.3rem] capitalize text-center'>Cadastro de itens</h4>
            <p className='w-[14rem] text-center text-neutral-300'>Você cadastra os itens que deseja avaliar</p>
          </div>
          <div className='flex flex-col justify-center items-center gap-3 bg-neutral-700 p-20 rounded-[20rem] w-[25rem] h-[25rem] hover:border-white hover:border-2 hover:scale-105 hover:bg-verde_principal transition-transform duration-300 ease-in-out '>
            <img className='w-[13rem]' src="avaliacaoHomem.svg" alt="" />
            <h3 className='text-neutral-200 text-[2rem]'>2</h3>
            <h4 className='text-neutral-300 text-[1.3rem] capitalize text-center'>avaliação</h4>
            <p className='w-[14rem] text-center text-neutral-300'>Você avalia os itens que possui</p>
          </div>
          <div className='flex flex-col justify-center items-center gap-3 bg-neutral-700 p-20 rounded-[20rem] w-[25rem] h-[25rem] hover:border-white hover:border-2 hover:scale-105 hover:bg-verde_principal transition-transform duration-300 ease-in-out
'>
            <img className='w-[10rem]' src="pesquisa.svg" alt="" />
            <h3 className='text-neutral-200 text-[1.5rem]'>3</h3>
            <h4 className='text-neutral-300 text-[1.3rem] capitalize text-center'>pesquisa de itens</h4>
            <p className='w-[14rem] text-center text-neutral-300'>Você pesquisa os itens cadastrados na página de pesquisa</p>
          </div>
        </div>

      </section>
      <section className='flex flex-col justify-around items-center bg-center bg-cover p-16 text-[1.5rem] h-[65vh] bg-[url("./cadastrar.png")]' >
        <h2 className='text-[5rem] text-verde_principal font-extrabold'>Cadastro de Reviews</h2>
        <button className='text-white bg-black/40 border-[0.17rem] h-20 w-56 font-bold border-verde_principal p-2 rounded-[0.8rem] hover:bg-white hover:text-verde_principal hover:border-none' onClick={abrirForm}>Adicionar</button>
      </section>

      <section className='flex flex-wrap justify-center gap-8 bg-adicionar_secBg p-20'>
        {(!listaItens || listaItens.length === 0) ? (
          <p className='text-white'>Você não tem nada aqui ainda...</p>
        ) : (
          listaItens
        )}
      </section>

      <Modal open={open} onClose={() => setOpen(false)} center>
        <NovoItem itens={itens} setItens={setItens} />
      </Modal>
    </main>
  )
}