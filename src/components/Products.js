import { useEffect, useState } from "react";

import ProductItem from "./UI/ProductItem";
import classes from "./Products.module.css";

const Products = (props) => {
    const [products, setProfucts] = useState([]);

    useEffect( ()=> {
        const  fetchProducts = async () => {
            const responce = await fetch('https://yellow-kitchen-95221-default-rtdb.firebaseio.com/meals.json');
            const responceData = await responce.json();

            const loadedProducts = [];

            for (const key in responceData) {
                loadedProducts.push({
                    id:  key,
                    name: responceData[key].name,
                    description: responceData[key].description,
                    price: responceData[key].price,
                    ident: responceData[key].id,
                    img: responceData[key].img
                });
            };

            setProfucts(loadedProducts);
        };

        fetchProducts();
    }, []);

    const productsList = products.map( product => <ProductItem 
        id = {product.id}
        key = {product.id}
        name = {product.name}
        description={product.description}
        price={product.price}
        ident={product.ident}
        img = {product.img}
    />)

  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {productsList}
      </ul>
    </section>
  );
};

export default Products;
