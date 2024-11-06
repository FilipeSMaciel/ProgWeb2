import { Card } from './Card'
import { ModalForm } from "./ModalForm";

export function Main() {
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
        <ModalForm />
      </>
 
    )
  }