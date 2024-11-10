import { useState, useEffect } from 'react';
import { Estrelas } from './Estrelas';
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
    <div className="w-[20rem] bg-fundo_card p-10 rounded-[0.3rem] max-h-[50rem]">
      <img className='w-[25rem]' src={item.foto} alt="Foto do Item" />
      <div>
        <div className='flex flex-col gap-1'>

          <h3 className='text-center mt-4 font-roboto text-[0.9rem] font-bold capitalize'>{item.nome}</h3>
          <div className=' flex flex-col gap-1 py-3 ml-[1rem] font-semibold'>
            <p className="font-roboto text-[0.8rem]">{item.categoria}</p>
            <p className="font-roboto text-[0.8rem]">{item.marca}</p>
            <p className="font-roboto text-[0.8rem]">
              {item.preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
            </p>
          </div>
        </div>

        <p>
          {avaliado ? (
            <>
              <Estrelas num={nota} />
              <p className="comentario">{comentario}</p>
              <button onClick={avaliarItem}>Reavaliar</button>
            </>
          ) : (
              <button className='bg-verde_principal text-[0.8rem] px-10 text-white font-bold font-roboto rounded-[0.5rem] uppercase p-2 border-solid border-[0.1rem] ' onClick={avaliarItem}>Avaliar</button>
          )}
        </p>
      </div>

      {isModalOpen && (
        <div className="modal">
          <div className="flex flex-col gap-2">
            <p>Você já possui este item?</p>
            <label  className='flex gap-3'>
              <input
                type="checkbox"
                checked={isPossui}
                onChange={() => handleComentario(true)}
              />
              Já possuo
            </label>
            <label className='flex gap-3'>
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
                      disabled={!isPossui}
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

            <div className='flex justify-center mt-4'>
              <button className='bg-verde_principal font-roboto text-white text-[1rem] uppercase p-4 font-bold rounded-[0.3rem]' onClick={confirmarAvaliacao} disabled={notaSelecionada === null && isPossui}>
                Confirmar Avaliação
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
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
