import landscape2 from '../assets/img/image2.jpg';
import PropTypes from 'prop-types';

export const Landscape2 = ({className}) => {
  return (
   <img src={landscape2} alt="Paisajes2" className={className} />
  )
}

Landscape2.propTypes = {
  className: PropTypes.string
}