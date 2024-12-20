import { useState, useEffect } from "react"
import { useForm } from "react-hook-form"
import { Card } from "../components/Card"
import { Header } from "../components/Header"
import { Footer } from "../components/Footer"

export default function Pesquisa() {
  const { register, handleSubmit } = useForm()
  const [itens, setItens] = useState([])
  const [itensFiltrados, setItensFiltrados] = useState([])

  useEffect(() => {
    const storedItens = JSON.parse(localStorage.getItem('itens')) || []
    setItens(storedItens)
  }, [])

  function pesquisaItem(data) {
    if (data.palavra.length < 2) {
      alert('Informe, no mínimo, 2 caracteres para a pesquisa')
      return
    }

    const storedItens = JSON.parse(localStorage.getItem('itens')) || []

    const filteredItens = storedItens.filter(item => 
      item.nome.toUpperCase().includes(data.palavra.toUpperCase()) ||
      item.categoria.toUpperCase().includes(data.palavra.toUpperCase())
    )

    setItensFiltrados(filteredItens)
  }

  function limparPesquisa() {
    setItensFiltrados([])
  }

  const listaItens = itensFiltrados.map(item => (
    <Card
      key={item.nome}
      item={item}
      itens={itens}
      setItens={setItens}
    />
  ))

  return (
    <div className="flex flex-col bg-header-fundo min-h-[100vh]">
      <Header />
      <main className="bg-header-fundo min-h-[65vh]">
        <div className="flex items-center justify-start flex-col h-[35vh] bg-[url('./pesquisaa.svg')] bg-cover bg-center">

          <h1 className="mt-5 text-white font-bold upp text-[4rem]">Pesquisa Circuit<span className="text-verde_principal">Hub</span></h1>
          <form className="flex gap-4 p-20" onSubmit={handleSubmit(pesquisaItem)}>
            <input
              className="px-20 rounded-md"
              type="text"
              required
              placeholder="Nome ou categoria"
              {...register('palavra')}
            />
            <input
              className="p-2 bg-black/40 hover:bg-verde_principal/60 rounded-md border-[0.1rem] border-white text-white"
              type="submit"
              value="Pesquisar"
            />
            <button
              type="button"
              className="p-2 bg-black/40 hover:bg-red-600/40  rounded-md border-[0.1rem] border-white text-white"
              onClick={limparPesquisa}
            >
              Limpar Pesquisa
            </button>
          </form>
        </div>

        <section className='flex flex-wrap justify-center items-center gap-8 bg-adicionar_secBg p-20 min-h-[45vh]'>
          {(!listaItens || listaItens.length === 0) ? (
            <p className='text-white'>Nada pesquisado ainda...</p>
          ) : (
            listaItens
          )}
        </section>
      </main>
      <Footer />
    </div>
  )
}
