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
    <>
      <Header />
      <div className="flex flex-col h-[85vh] bg-black">
        <h1>Pesquisa CircuitHub</h1>
        <form onSubmit={handleSubmit(pesquisaItem)}>
          <input type="text"
            required
            placeholder="Nome ou categoria do item"
            {...register('palavra')}
          />
          <input type="submit" value="Pesquisar" />

          <div>{listaItens}</div>
        </form>
      </div>
      <Footer />
    </>
  )
}