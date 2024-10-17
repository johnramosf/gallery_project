import landscape10 from '../assets/img/image10.jpg';
import PropTypes from 'prop-types';

/*export const Landscape10 = (props) => {
  return (
   <img src={landscape10} alt="Paisaje10" className={props.className} />
  )
   --se desestructura props
}*/
export const Landscape10 = ({className}) => {
  return (
   <img src={landscape10} alt="Paisaje10" className={className} />
  )
}  

Landscape10 .propTypes = {
  className: PropTypes.string
}