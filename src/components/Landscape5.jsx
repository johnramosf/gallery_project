import landscape5 from '../assets/img/image5.jpg';
import PropTypes from 'prop-types';

export const Landscape5 = ({className}) => {
  return (
   <img src={landscape5} alt="Paisaje5" className={className} />
  )
}

Landscape5.propTypes = {
  className: PropTypes.string
}