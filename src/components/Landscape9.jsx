import landscape9 from '../assets/img/image9.jpg';
import PropTypes from 'prop-types';

export const Landscape9 = ({className}) => {
  return (
   <img src={landscape9} alt="Paisaje9" className={className} />
  )
}

Landscape9.propTypes = {
  className: PropTypes.string
}