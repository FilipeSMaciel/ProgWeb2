import { Modal } from 'react-responsive-modal';

export function ModalForm() {
  return (
    <Modal>
      <h2>Cadastro de Items CircuitHub</h2>
      <form>
        <p>
          <label htmlFor="nome">Nome: </label>
          <input type="text" id='nome' required />
        </p>
      </form>
    </Modal>
  )
}