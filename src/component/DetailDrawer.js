import React, { Component } from 'react';
import PropTypes, { shape } from 'prop-types';
import './Details.scss';
import { ButtonContainer } from './Button';

class DetailDrawer extends Component {

    static propTypes = {
        productInfo: PropTypes.shape({
            id: PropTypes.number,
            title: PropTypes.string,
            img: PropTypes.string,
            price: PropTypes.number,
            inCart: PropTypes.bool
        }).isRequired
};

    render() {
        const { company, img, title, info, price, inCart, count } = this.props.productInfo;
        
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
                    <p> Count - {count}</p>
                    <ButtonContainer disabled={inCart ? true : false} onClick={() => console.log('clicked cart btn')}>
                        {inCart ? ('Phone Added in Cart'
                            ) : (
                        <span>Add in your cart <i className="fas fa-cart-plus"/></span>
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
}
export default DetailDrawer