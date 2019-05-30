import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ProductConsumer } from '../context';
import PropTypes from 'prop-types';
import './ProductList.scss';
import { withRouter } from "react-router-dom";
//  onClick={() => this.handleDetail(id)}

class Product extends Component {



    handleDetail = id => {
        this.props.history.push(`/${id}`);
    };

    render() {
        const { id, title, img, price, inCart } = this.props.product;

        return (
          <div className="card">
            <div className="img-container p-5">
              <Link to={`/details/${id}`}>
                <img src={img} alt="product" className="card-img-top" />
              </Link>
              <button
                className="cart-btn"
                disabled={inCart ? true : false}
                onClick={() => console.log("added to the cart")}
              >
                {inCart ? (
                  <p className="text-capitalize mb-0">in cart</p>
                ) : (
                  <i className="fas fa-cart-plus" />
                )}
              </button>
            </div>
            {/* footer */}
            <div className="card-footer">
              <Link to={`/details/${id}`}>
                <p className="text-center mb-0">{title}</p>
              </Link>
              <h5 className="text-blue text-center mb-0">
                <span>$</span>
                {price}
              </h5>
            </div>
            <div />
          </div>
        );
    };
};

Product.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.number,
        title: PropTypes.string,
        img: PropTypes.string,
        price: PropTypes.number,
        inCart: PropTypes.bool
    }).isRequired
};

export default withRouter(Product)