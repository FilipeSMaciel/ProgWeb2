import { useState, useEffect } from 'react';
import { Estrelas } from './Estrelas';
import { Modal } from 'react-responsive-modal';
import PropTypes from 'prop-types';
import '../style.css';

export function Card({ item, itens, setItens }) {
  const [comentario, setComentario] = useState(item.comentario || '');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [avaliado, setAvaliado] = useState(item.nota !== 0);
  const [nota, setNota] = useState(item.nota || 0);
  const [isPossui, setIsPossui] = useState(item.comentario === 'Já possuo');
  const [notaSelecionada, setNotaSelecionada] = useState(null);

  useEffect(() => {
    setAvaliado(item.nota !== 0);
  }, [item.nota]);

  function openModal() {
    setIsModalOpen(true);
  }

  function handleComentario(temItem) {
    setComentario(temItem ? 'Já possuo' : 'Não possuo');
    setIsPossui(temItem);

    if (!temItem) {
      setNota(0);
      setNotaSelecionada(null);
    }
  }

  function handleNota(novaNota) {
    if (novaNota < 1 || novaNota > 5 || isNaN(novaNota)) {
      return;
    }
    setNotaSelecionada(novaNota);
  }

  function confirmarAvaliacao() {
    const novaNota = notaSelecionada || nota;

    setNota(novaNota);

    const arrayItens = [...itens];
    const index = arrayItens.findIndex((x) => x.nome === item.nome);

    arrayItens[index].nota = novaNota;
    arrayItens[index].comentario = comentario;

    setItens(arrayItens);
    localStorage.setItem('itens', JSON.stringify(arrayItens));
    setAvaliado(true);
    setIsModalOpen(false);
  }

  function avaliarItem() {
    openModal();
  }

  return (
    <>
      <div className='bg-fundo_card w-[20rem] h-[32rem] p-3 flex flex-col justify-between rounded-md drop-shadow-3xl'>
        <img className='w-[18rem] h-[13rem] rounded-md bg-cover' src={item.foto} alt="Foto do Item" />
        <div className='p-2 mb-2'>
            <h3 className='text-[1.2rem] text-center mb-3 mt-[-1rem]'>{item.nome}</h3>
          <div className=' flex flex-col'>

            <p >{item.categoria}</p>
            <p >{item.marca}</p>
            <p >
              {item.preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
            </p>
          </div>
        </div>



        <p className='flex flex-col gap-1 items-center'>
          {avaliado ? (
            <>
              <Estrelas num={nota} />
              <p className='font-roboto flex justify-center text-fundo_card'>{comentario}</p>
              <div className='flex justify-center'>
                <button onClick={avaliarItem} className='bg-verde_principal text-[0.8rem] px-10 text-white font-bold font-roboto rounded-[0.5rem] uppercase p-2 border-solid border-[0.1rem]'>Reavaliar</button>
              </div>
            </>
          ) : (
            <div className=''>
              <button className='bg-verde_principal text-[0.8rem] px-10 text-white font-bold font-roboto rounded-[0.5rem] uppercase p-2 border-solid border-[0.1rem]' onClick={avaliarItem}>Avaliar</button>
            </div>
          )}
        </p>
      </div>

      {isModalOpen && (
        <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)} center>
          <div className="flex flex-col gap-2">
            <p>Você já possui este item?</p>
            <label className="flex gap-3">
              <input
                type="checkbox"
                checked={isPossui}
                onChange={() => handleComentario(true)}
              />
              Já possuo
            </label>
            <label className="flex gap-3">
              <input
                type="checkbox"
                checked={!isPossui}
                onChange={() => handleComentario(false)}
              />
              Não possuo
            </label>

            {isPossui && (
              <>
                <p>Escolha sua nota:</p>
                <div className="flex justify-evenly text-[1.5rem]">
                  {[1, 2, 3, 4, 5].map((value) => (
                    <button
                      key={value}
                      onClick={() => handleNota(value)}
                      style={{
                        backgroundColor: notaSelecionada === value ? 'lightblue' : '',
                      }}
                    >
                      {value}
                    </button>
                  ))}
                </div>
              </>
            )}

            <div className="flex justify-center items-end mt-4">
              <button
                className="bg-verde_principal font-roboto text-white text-[1rem] uppercase p-4 font-bold rounded-[0.3rem]"
                onClick={confirmarAvaliacao}
                disabled={notaSelecionada === null && isPossui}
              >
                Confirmar Avaliação
              </button>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
}

Card.propTypes = {
  item: PropTypes.shape({
    foto: PropTypes.string.isRequired,
    nome: PropTypes.string.isRequired,
    categoria: PropTypes.string,
    marca: PropTypes.string,
    preco: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    nota: PropTypes.number,
    comentario: PropTypes.string,
  }).isRequired,
  itens: PropTypes.arrayOf(
    PropTypes.shape({
      foto: PropTypes.string,
      nome: PropTypes.string,
      categoria: PropTypes.string,
      marca: PropTypes.string,
      preco: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      nota: PropTypes.number,
      comentario: PropTypes.string,
    })
  ).isRequired,
  setItens: PropTypes.func.isRequired,
};
