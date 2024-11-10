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
    <div className="flex gap-5 text-[1.5rem] mt-4 text-amber-400 ">
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
