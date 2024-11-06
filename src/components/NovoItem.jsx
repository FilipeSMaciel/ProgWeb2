import { useForm } from "react-hook-form";

export function NovoItem({item, setItem}){

    const {register, handleSubmit, reset} = useForm()

    function incluirFilme(data) {
        const novo = {
            nome: data.nome,
            categoria: data.categoria,
            marca: data.marca,
            preco: data.preco,
            foto: data.foto,
            nota: 0,
            comentario: ""

        }
    }




}