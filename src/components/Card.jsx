import { Estrelas } from './Estrelas'
import "./Card.css"

export function Card({ item, itens, setItens }) {

	function avaliarItem() {
		const nota = Number(prompt(`Nota para o item ${item.nome}?`))
		if (nota < 1 || nota > 5 || isNaN(nota)) {
			alert('Informe uma nota válida entre 1 e 5')
			return
		}

		const comentario = prompt('Comentário para este item?')
		if (comentario === '') {
			alert('Você deve informar o comentário')
			return
		}

		const arrayItens = [...itens]

		const index = arrayItens.findIndex(x => x.nome === item.nome)

		arrayItens[index].nota = nota;
		arrayItens[index].comentario = comentario;

		setItens(arrayItens)
		localStorage.setItem('itens', JSON.stringify(arrayItens))
		alert('Ok! Item avaliado com sucesso!')
	}

	return (
		<div className='card'>
			<img src={item.foto} alt="Foto do Item" />
			<div>
				<h3>{item.nome}</h3>
				<p className='categoria'>{item.categoria}</p>
				<p className='marca'>{item.marca}</p>
				<p className='preco'>{item.preco}</p>

				<p>
					{item.avaliacao == 0 ?
						<div>
							<div className="avaliar__container">
								<button onClick={avaliarItem}>Avaliar</button>
							</div>
						</div>
						:
						<>
							<Estrelas num={item.nota} />
							<p className='comentario'>{item.comentario}</p>
						</>
					}
				</p>
			</div>
		</div>
	)

}