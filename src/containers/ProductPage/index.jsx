import React, { useEffect } from 'react';
import './index.scss';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getProductById } from '../../redux/reducers/productSlice';
import { Card, CardContent, Typography } from '@mui/material';

const ProductPage = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const currentProduct = useSelector((state) => state.product.currentProduct);

  useEffect(() => {
    dispatch(getProductById(params.id));
  }, []);

  return (
    <Card className="productPage">
      <CardContent>
        {
          currentProduct && (
            <>
              <img className="imgProduct" src={currentProduct.img}/>
              <Typography className="product-name">
                {currentProduct.name}
              </Typography>
              <Typography className="product-description">
                {currentProduct.description}
              </Typography>
            </>
          )
        }
      </CardContent>
    </Card>
  )
}

export default ProductPage;
