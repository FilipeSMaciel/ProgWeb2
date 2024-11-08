import PropTypes from 'prop-types';
import { useForm } from "react-hook-form";
import '../style.css';

export function NovoItem({ itens, setItens }) {
  const { register, handleSubmit, setValue } = useForm();

  function normalizePreco(preco) {
    preco = preco.replace(',', '.');
    return parseFloat(preco);
  }

  function incluirItem(data) {
    const precoNormalizado = normalizePreco(data.preco);

    const novo = {
      nome: data.nome,
      categoria: data.categoria,
      marca: data.marca,
      preco: precoNormalizado,
      foto: data.foto,
      nota: 0,
      comentario: ""
    };

    const arrayItens = [novo, ...itens];
    setItens(arrayItens);
    localStorage.setItem("itens", JSON.stringify(arrayItens));
  }

  return (
    <>
      <h2>Cadastro de Itens CircuitHub</h2>

      <form onSubmit={handleSubmit(incluirItem)}>
        <p>
          <label htmlFor="nome">Produto: </label>
          <input type="text" id="nome" required {...register('nome')} />
        </p>

        <p>
          <label htmlFor="categoria">Categoria: </label>
          <input type="text" id="categoria" required {...register('categoria')} />
        </p>

        <p>
          <label htmlFor="marca">Marca: </label>
          <input type="text" id="marca" required {...register('marca')} />
        </p>

        <p>
          <label htmlFor="preco">Preço: </label>
          <input
            type="text"
            id="preco"
            required
            {...register('preco')}
            onInput={(e) => {
              e.target.value = e.target.value.replace(/[^0-9,.]/g, '');
              // Converte o valor de volta para um formato adequado
              setValue("preco", e.target.value);
            }}
          />
        </p>

        <p>
          <label htmlFor="foto">Foto: </label>
          <input type="text" id="foto" required {...register('foto')} />
        </p>

        <p>
          <input type="submit" value="Incluir" />
          <input type="reset" value="Limpar" />
        </p>
      </form>
    </>
  );
}

NovoItem.propTypes = {
  itens: PropTypes.arrayOf(
    PropTypes.shape({
      nome: PropTypes.string.isRequired,
      categoria: PropTypes.string.isRequired,
      marca: PropTypes.string.isRequired,
      preco: PropTypes.number.isRequired,
      foto: PropTypes.string.isRequired,
      nota: PropTypes.number,
      comentario: PropTypes.string
    })
  ).isRequired,
  setItens: PropTypes.func.isRequired
};
