import landscape8 from '../assets/img/image8.jpg';
import PropTypes from 'prop-types';

export const Landscape8 = ({className}) => {
  return (
   <img src={landscape8} alt="Paisaje8" className={className} />
  )
}

Landscape8.propTypes = {
  className: PropTypes.string
}