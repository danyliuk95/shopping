import SearchProduct from '../../components/SearchProduct';
import Product from '../../components/Product';
import { useEffect, useState } from 'react';
import { getProducts, searchedOurProduct, setIsSearching } from '../../redux/reducers/productSlice';
import { useDispatch, useSelector } from 'react-redux';
import './index.scss';
import { useNavigate } from "react-router-dom";

const ShoppingList = () => {
  const navigate = useNavigate();
  const products = useSelector((state) => state.product.products);
  const isSearching = useSelector((state) => state.product.isSearching);
  const searchedProducts = useSelector((state) => state.product.searchedProducts)
  const dispatch = useDispatch();

  const [searchProduct, setSearchProduct] = useState("");

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  const onSearch = (event) => {
    if (event.key === 'Enter') {
      if (searchProduct.length > 0) {
        dispatch(setIsSearching(true));
        dispatch(searchedOurProduct(searchProduct));
      } else {
        dispatch(setIsSearching(false));
      }
    }
  };

  const ourProducts = isSearching ? searchedProducts : products;

  const onChangeListener = (event) => setSearchProduct(event.target.value)
  const goToProduct = (id) => navigate(`/products/${id}`)

  return (
    <div>
      <SearchProduct
        label="Search Product"
        value={searchProduct}
        onChange={onChangeListener}
        onKeyDown={onSearch}
      />

      <div className="productContainer">
        {
          ourProducts.map(product => (
            <div key={product.id}>
              <Product name={product.name} img={product.img} onClick={() => goToProduct(product.id)} />
            </div>
          ))
        }
      </div>

    </div>
  );
};

export default ShoppingList;
