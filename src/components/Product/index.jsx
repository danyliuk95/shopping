import React from 'react';
import './index.scss'
import { Card, CardContent, Typography } from '@mui/material';

const Product = ({name, img, className, onClick}) => {

  return (
    <Card className={`product ${className}`} onClick={onClick}>
      <CardContent>
        <img className="img" src={img} />
        <Typography className="product-name">
          {name}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default Product;
