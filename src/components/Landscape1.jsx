import landscape1 from '../assets/img/image1.jpg';
import PropTypes from 'prop-types';

export const Landscape1 = ({className}) => {
  return (
   <img src = {landscape1} alt="Paisaje 1" className={className} />
  )
}

Landscape1.propTypes = {
  className: PropTypes.string
}