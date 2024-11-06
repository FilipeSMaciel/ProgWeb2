import Modal from 'react-responsive-modal';
import { useState } from 'react';
import { Card } from './Card'
import { ModalForm } from "./ModalForm";
import { NovoItem } from './NovoItem';

export function Main() {
  
  const [itens, setItens] = useState([])
  const [open, setOpen] = useState(false)

  const listaItem = item.map(item => (

    <Card
    key={item.nome}
    item={item}
    itens={itens}
    setFilmes={setItem}
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
          <button>Adicionar</button>
        </div>

        <div>
          <p>Placeholder: aqui vai a lista dos items</p>
        </div>
      </main>
      <Modal open={open} onClose={() => setOpen(false)} center>
        <NovoItem item={item} setItem={setItem} />
      </Modal>
    </>

  )
}