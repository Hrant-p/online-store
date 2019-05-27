import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ProductConsumer } from '../context';

class Product extends Component {
    
    render() {

        const { id, title, img, price, inCart } = this.props.product;

        return (
            <ProductSection className="col-9 mx-auto col-md col-lg-3 my-3">
                <div className="card">
                    <div 
                        className="img-container p-5" 
                        onClick={() => console.log('clicked into image container')}>

                        <Link to="details">
                            <img src={img} alt="product" className="card-img-top" />
                        </Link>
                        <button 
                            className="cart-btn"
                            disabled={inCart ? true : false}
                            onClick={() => console.log('added to the cart')}>
                                {inCart ?
                                 (<p className="text-capitalize mb-0">in cart</p>
                                 ) : (
                                 <i className="fas fa-cart-plus"/>)}
                        </button>
                    </div>
                    {/* footer */}
                    <div className="card-footer d-flex justify-content-between">
                        <p className="align-self-center mb-0">
                            {title}
                        </p>
                    </div>
                    <div></div>
                </div>
                
            </ProductSection>
        )
    }
};

const ProductSection = styled.section`


`
export default Product;