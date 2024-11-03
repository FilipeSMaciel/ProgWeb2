import { useForm } from 'react-hook-form'

export function Card() {

    const { register, handleSubmit } = useForm()

    return (
        <div>
            <img src={item.foto} alt="Foto do Item" />
            <div>
                <h3>{item.titulo}</h3>

                <p>
                    <input type="checkbox" {...register("possuo")} />
                    <label htmlFor="possuo">Já possuo</label>
                </p>
                <p>
                    <input type="checkbox" {...register("desejo")} />
                    <label htmlFor="desejo">Lista de desejo</label>
                </p>
                <p>
                    {item.avaliacao == 0 ?
                        <div>
                            <div className="avaliar__container">
                                <button onClick={avaliarItem}>Avaliar</button>
                            </div>
                            </div>
                        :
                        <>
                        <Estrelas num={item.avaliacao} />
                        </>
                        }
                </p>
            </div>
        </div>
    )

}