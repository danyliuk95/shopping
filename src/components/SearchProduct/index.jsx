import { TextField } from '@mui/material';
import './index.scss';

const SearchProduct = ({className, label, onChange, value, onKeyDown}) => {
  return (
    <TextField className={`searchProduct ${className}`}
               label={label}
               onChange={onChange}
               value={value}
               onKeyDown={onKeyDown} />
  )
}

SearchProduct.defaultProps =  {
  label: "Search Product",
  className: ''
}

export default SearchProduct;
