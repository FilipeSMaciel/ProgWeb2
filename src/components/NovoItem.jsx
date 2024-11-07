import { useForm } from "react-hook-form";

export function NovoItem({ itens, setItens }) {
    const { register, handleSubmit } = useForm()

    function incluirItem(data) {
        const novo = {
            nome: data.nome,
            categoria: data.categoria,
            marca: data.marca,
            preco: data.preco,
            foto: data.foto,
            nota: 0,
            comentario: ""

        }
        const arrayItens = [novo, ...itens]
        setItens(arrayItens)
        localStorage.setItem("itens", JSON.stringify(arrayItens))
    }

    return (
        <>
            <h2>Cadastro de Itens CircuitHub</h2>

            <form onSubmit={handleSubmit(incluirItem)}>

                <p>
                    <label htmlFor="nome">Produto: </label>
                    <input type="text" name="" id="nome" required {...register('nome')} />
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
                    <input type="number" id="preco" required {...register('preco')} />
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
    )



}