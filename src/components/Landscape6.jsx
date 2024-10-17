import landscape6 from '../assets/img/image6.jpg';
import PropTypes from 'prop-types';

export const Landscape6 = ({className}) => {
  return (
   <img src={landscape6} alt="Paisaje6" className={className} />
  )
}

Landscape6.propTypes = {
  className: PropTypes.string
}