import React, { Component } from 'react';
import PropTypes, { shape } from 'prop-types';
import './Details.scss';
import { ButtonContainer } from './Button';

class DetailDrawer extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            productCount: 0,
            addedToCart: this.props.inCart
            }
    };
    
    onIncrement = () => {
        this.setState({ productCount: this.state.productCount + 1});
    };

    onDecrement = () => {
        this.setState({ productCount: this.state.productCount - 1 });
    };
    
    addToCart = () => {
        this.setState({ addedToCart: !this.state.addedToCart })
    };

    render() {
        const { company, img, title, info, price, inCart, count, total } = this.props.productInfo;
        const { productCount } = this.state;
        
        return (
          <div className="detail-container">
            <div className="info-container">
                <div className="title-field">
                    <h4>{title}</h4>
                </div>
                
                <div className="slide-field">
                    <img src={img} alt="mobile" />
                </div>

                <div className="price-cart-field">
                    <p> Price - {price}$</p>
                    <section>Count
                        <ButtonContainer 
                            onClick={this.onDecrement}
                            disabled={productCount < 1 || productCount > total ? true : false}
                            >-</ButtonContainer>
                            {productCount}
                        <ButtonContainer onClick={this.onIncrement}>+</ButtonContainer>
                    </section>
                    <ButtonContainer 
                        disabled={inCart ? true : false} 
                        onClick={() => console.log('clicked cart btn')}>
                        {inCart ? ('Phone Added in Cart'
                            ) : (
                        <span>Add to cart <i className="fas fa-cart-plus"/></span>
                        )}
                    </ButtonContainer>
                </div>

                <div className="info-area">
                    <p>{info}</p>
                </div>
            </div>
          </div>
        );
    }
};

    DetailDrawer.propTypes = {
      productInfo: PropTypes.shape({
        id: PropTypes.number,
        title: PropTypes.string,
        img: PropTypes.string,
        price: PropTypes.number,
        inCart: PropTypes.bool
      }).isRequired
    };
export default DetailDrawer