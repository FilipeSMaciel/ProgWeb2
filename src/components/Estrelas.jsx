import PropTypes from 'prop-types';
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import '../style.css';

export function Estrelas({ num }) {
  const icones = [];

  for (let i = 1; i <= Math.floor(num); i++) {
    icones.push(<FaStar key={i} />);
  }

  if (!Number.isInteger(num)) {
    icones.push(<FaStarHalfAlt key="half-star" />);
  }

  return (
    <div className="flex ml-4 gap-3 text-[1.5rem] text-amber-400 mt-3">
      {icones}
    </div>
  );
}

Estrelas.propTypes = {
  num: PropTypes.number.isRequired,
};

Estrelas.defaultProps = {
  num: 0,
};
