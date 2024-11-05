import { FaStar, FaRegStarHalf, FaRegStar  } from "react-icons/fa";

export function Estrelas({num}) {

    const icones = []

    for (let i = 1; i <= Math.floor(num); i++) {
        icones.push(<FaStar />)

    }
    if (! Number.isInteger(num)) {
        icones.push(<FaRegStarHalf />)
    }

    return(

        <div className="estrelas">
            {icones}
        </div>


    )

}