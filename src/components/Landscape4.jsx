import landscape4 from '../assets/img/image4.jpg';
import PropTypes from 'prop-types';

export const Landscape4 = ({className}) => {
  return (
   <img src={landscape4} alt="Paisaje4" className={className} />
  )
}

Landscape4.propTypes = {
  className: PropTypes.string
}