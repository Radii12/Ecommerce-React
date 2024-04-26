import React, { useEffect, useState } from "react";
import axios from "axios";
import NCarde from "../Component.js/Carde/newCard";
import { useSelector } from "react-redux";

function Home() {
    const [products, setProducts] = useState([]);
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(5);


    useEffect(() => {
        axios.get("https://dummyjson.com/products")
            .then((res) => setProducts(res.data.products))
            .catch((err) => console.log(err));
    }, []);

    const totalPages = Math.ceil(products.length / limit);
    const currentProducts = products.slice((page - 1) * limit, page * limit);

    const goToNextPage = () => setPage((prevPage) => Math.min(prevPage + 1, totalPages));
    const goToPreviousPage = () => setPage((prevPage) => Math.max(prevPage - 1, 1));

    console.log(products);

    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    
                    {currentProducts.map((product, index) => (
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
            

            <button className="btn btn-primary m-1" onClick={goToPreviousPage}>Back</button>
            <button className="btn btn-primary" onClick={goToNextPage}>Next</button>
        </>
    );
}

export default Home;
