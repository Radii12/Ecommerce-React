import { FaShoppingCart,FaRegBookmark,FaStar,FaFireAlt } from "react-icons/fa";
import "./card.css"
import MyButton from "../Button/MyButton";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";

function NCarde(props){
    const myFav=useSelector((state)=>state.favR.fav)
    const [productInFavorites, setProductInFavorites] = useState(myFav.includes(props.id));
    return(<>
    
    <div className=" productList text-dark col-3  mt-3  ">
        <div key={props.id} className="card productCard  col-12 ">
            <img src={props.img} alt="product-img" className="productImage"></img>
            <FaShoppingCart className={"productCard_cart "} />
            {productInFavorites && (
          <FaRegBookmark className="productCard_wishlist bg-danger" />
        )}

             <FaRegBookmark className={"productCard_wishlist "}/>
            <FaFireAlt className={"productCard_fastSelling"}/>
            <div className="productCard_content">
            <p className="">{props.name}</p>
                <Link to={`/product/${props.id}`} class="link-opacity-50-hover" >{props.desc}</Link>
                <div className="displayStack__1">
                    <div className="productPrice">${props.price}</div>
                </div>
                <div className="displayStack__2">
                <div className="productRating">
    
        <FaStar className="star" />
        <FaStar className="star" />
        <FaStar className="star" />
        
        <FaStar className="star" />
        
    
</div>

                </div> 

            </div>
        </div>

    </div>
    
    </>)
}
export default NCarde;