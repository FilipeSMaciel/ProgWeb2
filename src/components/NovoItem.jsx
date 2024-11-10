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

  return  (
    <>
      <section className='text-black font-r p-16 text-[1.5rem] flex items-center flex-col gap-6'>

        <h2>Cadastro de Itens CircuitHub</h2>

        <form className='flex flex-col gap-[1rem]' onSubmit={handleSubmit(incluirItem)}>
          <p>
            <label className='flex text-[1.3rem]' htmlFor="nome">Produto: </label>
            <input className='border-black border-[0.1rem] h-[5vh] bg-black/15' type="text" id="nome" required {...register('nome')} />
          </p>

          <p>
            <label className='flex text-[1.3rem]' htmlFor="categoria">Categoria: </label>
            <input className='border-black border-[0.1rem] h-[5vh] bg-black/15' type="text" id="categoria" required {...register('categoria')} />
          </p>

          <p>
            <label className='flex text-[1.3rem]' htmlFor="marca">Marca: </label>
            <input className='border-black border-[0.1rem] h-[5vh] bg-black/15' type="text" id="marca" required {...register('marca')} />
          </p>

          <p>
            <label className='flex text-[1.3rem]' htmlFor="preco">Preço: </label>
            <input className='border-black border-[0.1rem] h-[5vh] bg-black/15'
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
            <label className='flex text-[1.3rem]' htmlFor="foto">Foto: </label>
            <input className='border-black border-[0.1rem] h-[5vh] bg-black/15' type="text" id="foto" required {...register('foto')} />
          </p>

          <p className='flex justify-evenly gap-2 '>
            <input className='hover:cursor-pointer border-black border-[0.1rem] p-2 px-8 rounded-[0.3rem] hover:bg-verde_principal/65' type="submit" value="Incluir" />
            <input className='hover:cursor-pointer border-black border-[0.1rem] p-2 px-8 rounded-[0.3rem] hover:bg-red-600/40' type="reset" value="Limpar" />
          </p>
        </form>
      </section>
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
