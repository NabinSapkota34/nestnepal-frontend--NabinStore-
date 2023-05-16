import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function ProductsPage() {
  const [displayedItems, setDisplayedItems] = useState([]);
  const [remainingItems, setRemainingItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get('https://fakestoreapi.com/products');
      setDisplayedItems(response.data.slice(0, 3));
      setRemainingItems(response.data.slice(3));
    }
    fetchData();
  }, []);

  const handleLoadMore = () => {
    const nextItems = remainingItems.slice(0, 3);
    setDisplayedItems([...displayedItems, ...nextItems]);
    setRemainingItems(remainingItems.slice(3));
  };

  const handleAddToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const handleRemoveFromCart = (item) => {
    const updatedCartItems = cartItems.filter((cartItem) => cartItem.id !== item.id);
    setCartItems(updatedCartItems);
  };

  return (
    <>
      <h2 className="fw-bold text-uppercase text-center mt-5">
        Our <span style={{ color: '#373B61' }}>Products</span>
      </h2>
      <div className="d-flex flex-wrap justify-content-center  mt-5">
        {displayedItems.map((item) => (
          <div className="card mx-2 my-4" style={{ width: '20rem' }} key={item.id}>
           <div className="">
           <img src={item.image} className="card-img-top" alt=""  />
           </div>
            <div className="card-body">
              <h5 className="card-title fw-bold">{item.title}</h5>
              <p className="card-text">{item.description}</p> 
              <h5>Price:-  {item.price}</h5>
              <p className='text-success'>Rating:-  {item.rating.rate}</p>
              <button className='btn btn-primary' onClick={() => handleAddToCart(item)}>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
      {remainingItems.length > 0 && (
        <div className="d-flex justify-content-center mt-5">
          <button className="btn btn-primary mb-5" onClick={handleLoadMore}>
            Load More
          </button>
        </div>
      )}

      {cartItems.length > 0 && (
        <div className="mt-5">
          <h2 className="fw-bold text-uppercase text-center mb-3">
            Your <span style={{ color: '#373B61' }}>Cart</span>
          </h2>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Title</th>
                <th scope="col">Price</th>
                <th scope="col">Remove</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id}>
                  <td>{item.title}</td>
                  <td>{item.price}</td>
                  <td><button className='btn btn-danger' onClick={() => handleRemoveFromCart(item)}>Remove</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
}

export default ProductsPage
