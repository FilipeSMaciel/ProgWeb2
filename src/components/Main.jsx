import { Modal } from 'react-responsive-modal';
import { useEffect, useState } from 'react';
import { Card } from './Card'
import { NovoItem } from './NovoItem';
import 'react-responsive-modal/styles.css'

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

  function abrirForm(){
    setOpen(true)
  }

  return (
    <>
      <main>
        <div className='register__btn'>
          <h2>Cadastro de Items CircuitHub</h2>
          <button onClick={abrirForm}>Adicionar</button>
        </div>

        <div className='grid-itens'>
          {listaItens}
        </div>
      </main>
      <Modal open={open} onClose={() => setOpen(false)} center>
        <NovoItem itens={itens} setItens={setItens} />
      </Modal>
    </>

  )
}