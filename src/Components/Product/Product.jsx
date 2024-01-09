import React from 'react'
import Data from '../DataStorage/Data';
import { Link } from 'react-router-dom';
import './Product.css'

const Product = () => {
    const cardItem = (item) => {
        return (
            <div className="card my-5 py-4" key={item.id} style={{width: "18rem"}}>
                <img src={item.img} className="card-img-top" alt={item.title}/>
                    <div className="card-body text-center">
                        <h5 className="card-title">{item.title}</h5>
                        <p className="lead">${item.price}</p>
                        <Link to={`/products/${item.id}`} className="btn btn-dark">Buy Now</Link>
                    </div>
            </div>
                );
        }

        return(
        <>
            <div>
                    <div className="container py-5">
                        <div className="row">
                            <div className="col-12 text-center text-secondary">
                                <h1>Product</h1>
                                <hr />
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row justify-content-around">
                            {Data.map(cardItem)}
                        </div>
                    </div>
                </div>
        </>
    )
}

export default Product
// import React from 'react';
// import Data from '../DataStorage/Data';

// function ProductList() {
//   return (
//     <div>
//       {Data.map((product) => (
//         <div key={product.id}>
//           <h2>{product.title}</h2>
//           <img src={import.meta.env.BASE_URL + product.img} alt={product.title} />
//           <p>{product.desc}</p>
//           <p>Price: ${product.price}</p>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default ProductList;


