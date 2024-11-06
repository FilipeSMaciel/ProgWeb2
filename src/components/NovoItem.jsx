import { useForm } from "react-hook-form";

export function NovoItem({item, setItem}){

    const {register, handleSubmit, reset} = useForm()

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
        const item2 = [novo, ...item]
        setItem(item2)
        localStorage.setItem("item", JSON.stringify(item2))
    }

    return(
        <>
        <h2>Cadastro de itens</h2>

        <form onSubmit={handleSubmit(incluirItem)}>

        <p>
            <label htmlFor="nome">Produto: </label>
            <input type="text" name="" id="nome" required {...register('nome')}/>
        </p>

        <p>
            <label htmlFor="categoria">Categoria: </label>
            <input type="text" required {...register('categoria')}/>
        </p>

        <p>
            <label htmlFor="marca">Marca: </label>
            <input type="text" required {...register('marca')}/>
        </p>

        <p>
            <label htmlFor="preco">Preço: </label>
            <input type="number" required {...register('preco')}/>
        </p>

        <p>
            <label htmlFor="foto">Foto: </label>
            <input type="text" required {...register('foto')}/>
        </p>

        <p>
            <input type="submit" value="Incluir"/>
            <input type="reset" value="Limpar" />
        </p>

        </form>
        </>
    )



}