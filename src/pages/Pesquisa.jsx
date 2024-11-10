import { useState } from "react"
import { useForm } from "react-hook-form"
import { Card } from "../components/Card"
import { Header } from "../components/Header"
import { Footer } from "../components/Footer"

export default function Pesquisa() {
  const { register, handleSubmit } = useForm()
  const [itens, setItens] = useState([])

  function pesquisaItem(data) {
    if (data.palavra.length < 2) {
      alert('Informe, no mínimo, 2 caracteres para a pesquisa')
      return
    }

    if (localStorage.getItem('itens')) {
      const storedItens = JSON.parse(localStorage.getItem('itens'))

      const filteredItens = storedItens.filter(item => item.nome.toUpperCase().includes(data.palavra.toUpperCase()) ||
        item.categoria.toUpperCase().includes(data.palavra.toUpperCase()))

      setItens(filteredItens)
    }
  }

  const listaItens = itens.map(item => (
    <Card
      key={item.nome}
      item={item}
      itens={itens}
      setItens={setItens}
    />
  ))

  return (
    <div className="flex flex-col  bg-header-fundo h-[100vh]">
      <Header />
      <section className="bg-header-fundo">
        <div className="flex items-center justify-start flex-col h-[35vh] bg-[url('./pesquisaa.svg')] bg-cover bg-center">

          <h1 className="mt-5 text-white font-bold upp text-[4rem]">Pesquisa Circuit<span className="text-verde_principal">Hub</span></h1>
          <form className="flex gap-20  p-20" onSubmit={handleSubmit(pesquisaItem)}>
            <input className="px-20 rounded-md" type="text"
              required
              placeholder="Nome ou categoria"
              {...register('palavra')}
            />
            <input className="p-2 bg-verde_principal rounded-md border-[0.1rem] border-white text-white" type="submit" value="Pesquisar" />

          </form>
        </div>
        <div className="flex justify-center items-center p-20 m-auto">
          <div>{listaItens}</div>
        </div>
      </section>
      <Footer />
    </div>
  )
}