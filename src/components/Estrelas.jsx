import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import '../style.css';


export function Estrelas({ num }) {
	const icones = []

	for (let i = 1; i <= Math.floor(num); i++) {
		icones.push(<FaStar />)
	}

	if (!Number.isInteger(num)) {
		icones.push(<FaStarHalfAlt />)
	}

	return (
		<div className="estrelas">
			{icones}
		</div>
	)
}