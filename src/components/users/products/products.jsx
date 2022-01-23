<<<<<<< HEAD
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getProducts } from '../../../redux/actions/products'
import { Container, Category, SelectCategory } from '../../../globalStyles'
import SearchBar from '../SearchBar/SearchBar'
import Product from './product'
import Paginado from '../Paginado/Paginado.jsx'
import { getCategories } from '../../../../src/redux/actions/categories.js'
import { filterByCategory } from '../../../../src/redux/actions/products.js'

=======
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../../../redux/actions/products";
import { Container } from "../../../globalStyles";
import Product from "./product";
import Paginado from "../Paginado/Paginado.jsx";
import Filters from "../../filters/Filters";
import {
  filterClothingTipe,
  filterPrice,
  filterRanking,
  filterAlph,
} from "../../filters/logicFunctionFilters";
import { getCategories } from "../../../../src/redux/actions/categories.js";
import { filterByCategory } from "../../../../src/redux/actions/products.js";
>>>>>>> 78dcf18bc15907f7b51f325ad4026b394daf1801

const Products = () => {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(9);
  const [filter, setFilter] = useState({
    clothingType: "",
    price: "",
    ranking: "",
    alph: "",
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
    dispatch(getCategories());
  }, [dispatch, search]);

  let allProducts = useSelector((store) =>
    store.productsReducer.products.filter((p) =>
      p.name.toLowerCase().includes(search.toLowerCase())
    )
  );

  // allProducts = filterClothingTipe(allProducts);

  const allCategories = useSelector(
    (store) => store.categoryReducer.categories
  );

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProduct = allProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleSearch = (e) => setSearch(e.target.value);

  return (
    <div>
<<<<<<< HEAD
      <SearchBar />
      <Category>
        <SelectCategory onChange={e=>handleFilterCategories(e)}>
          <option value="All">All</option>         
          {allCategories && allCategories.map(cat=>(
          <option value={cat}>{cat}</option>
            ))}
        </SelectCategory>
        </Category>
=======
      <input
        id="search"
        type="text"
        placeholder="Nombre producto"
        onChange={handleSearch}
      />

      <Filters
        filter={filter}
        setFilter={setFilter}
        clothingType={allCategories}
        price={["Mayor", "Menor"]}
        ranking={["Mayor", "Menor"]}
        alph={["A > z", "Z > a"]}
      />
>>>>>>> 78dcf18bc15907f7b51f325ad4026b394daf1801

      <Container>
        {currentProduct?.map((product) => {
          return (
            <Product
              img={product.img}
              name={product.name}
              price={product.price}
              ranking={product.ranking}
            />
          );
        })}
      </Container>
      <Paginado
        productsPerPage={productsPerPage}
        allProducts={allProducts.length}
        paginado={paginado}
      />
    </div>
  );
};

export default Products;
