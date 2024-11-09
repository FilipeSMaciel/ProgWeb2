import { Modal } from 'react-responsive-modal';
import { useEffect, useState } from 'react';
import { Card } from './Card'
import { NovoItem } from './NovoItem';
import 'react-responsive-modal/styles.css'
import '../style.css';


export function Main() {

  const [itens, setItens] = useState([])
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (localStorage.getItem('itens')) {
      const storedItens = JSON.parse(localStorage.getItem('itens'))
      setItens(storedItens)
    }
  }, [])

  const listaItens = itens.map(item => (
    <Card
      key={item.nome}
      item={item}
      itens={itens}
      setItens={setItens}
    />
  ))

  function abrirForm() {
    setOpen(true)
  }

  return (
    <main className='flex flex-col max-h-screen font-roboto'>
      <div className='flex justify-around p-16 text-[1.5rem] mt-[-0.1rem]  bg-adicionar_secBg'>
        <h2 className='text-[2rem] text-adicionar_btn'>Cadastro de Reviews</h2>
        <button className='text-adicionar_btn border-adicionar_btn border-solid border-[0.03rem] p-2 rounded-[0.8rem]' onClick={abrirForm}>Adicionar</button>
      </div>

      <div className='flex justify-center gap-8 bg-adicionar_secBg p-20'>
        {listaItens}
      </div>
      <Modal open={open} onClose={() => setOpen(false)} center>
        <NovoItem itens={itens} setItens={setItens} />
      </Modal>
    </main>
  )
}