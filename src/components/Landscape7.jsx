import landscape7 from '../assets/img/image7.jpg';
import PropTypes from 'prop-types';

export const Landscape7 = ({className}) => {
  return (
   <img src={landscape7} alt="Paisaje7" className={className} />
  )
}

Landscape7.propTypes = {
  className: PropTypes.string
}