import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import ProductTable from "../../Component.js/table/Table";
import { ProductCart } from "../../Rdux/Cart/Reducer";
import NCarde from "../../Component.js/Carde/newCard";
function Wish() {

  const dispatch = useDispatch();
  const productIds=useSelector((state)=>state.favR.fav);
  const [products, setProducts] = useState([]);
    
  useEffect(() => {
      const fetchProduct = async () => {
          const prod = [];
          for (const id of productIds) {
              try {
                  const response = await axios.get(`https://dummyjson.com/products/${id}`);
                  prod.push(response.data);
              } catch (error) {
                  console.error(`Error fetching movie with ID ${id}:`, error);
              }
          }
          setProducts(prod);
      };
  
      fetchProduct();
  
  }, [productIds]); 


  return (
    <>
     <div className="container-fluid">
                <div className="row">
                    
                    {products.map((product, index) => (
                        <NCarde
                            key={index}
                            name={product.title}
                            desc={product.description}
                            img={product.images[0]}
                            price={product.price}
                            id={product.id}
                            rating={product.rating}
                            total={product.stock}
                        />
                    ))}
                    </div>
                </div>
            

    
    </>
  );
}

export default Wish;
