import landscape3 from '../assets/img/image3.jpg';
import PropTypes from 'prop-types';

export const Landscape3 = ({className}) => {
  return (
   <img src={landscape3} alt="Paisaje3" className={className} />
  )
}

Landscape3.propTypes = {
  className: PropTypes.string
}