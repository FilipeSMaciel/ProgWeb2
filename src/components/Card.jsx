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
    <div className="card">
      <img src={item.foto} alt="Foto do Item" />
      <div>
        <h3>{item.nome}</h3>
        <p className="categoria">{item.categoria}</p>
        <p className="marca">{item.marca}</p>
        <p className="preco">
          {item.preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
        </p>

        <p>
          {avaliado ? (
            <>
              <Estrelas num={nota} />
              <p className="comentario">{comentario}</p>
              <button onClick={avaliarItem}>Reavaliar</button>
            </>
          ) : (
            <>
              <button onClick={avaliarItem}>Avaliar</button>
            </>
          )}
        </p>
      </div>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <p>Você já possui este item?</p>
            <label>
              <input
                type="checkbox"
                checked={isPossui}
                onChange={() => handleComentario(true)}
              />
              Já possuo
            </label>
            <label>
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
                <div className="nota-buttons">
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

            <button onClick={confirmarAvaliacao} disabled={notaSelecionada === null && isPossui}>
              Confirmar Avaliação
            </button>
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
