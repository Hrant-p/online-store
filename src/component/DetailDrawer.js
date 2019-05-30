import React, { Component } from 'react';
import PropTypes, { shape } from 'prop-types';

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
          <div className="detail-container mt-5">
            <div className="col-md">
                    <h4>{title}</h4>
                    <div className="img-field">
                        <img src={img} alt="mobile image" />
                    </div>
                    <p> Price - {price}$</p>
                    <button disabled={inCart ? true : false}>
                        {inCart ? 'Phone Added in Cart' : (<span>Add in your cart <i className="fas fa-cart-plus"/></span>)}
                    </button>
                <div>
                    <div className="card-footer">
                        <p>
                            {info}
                        </p>
                    </div>
                </div>
            </div>
          </div>
        );
    }
}
export default DetailDrawer