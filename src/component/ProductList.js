import React, { Component } from 'react';
import Title from './Title';
import { ProductConsumer } from '../context';
import Product from './Product';

class ProductList extends Component {
    
    render() {

        return (
            <React.Fragment>
                <div className="py-4">
                   <div className="container">
                        <Title name="our" title="Products"/>
                        <div className="grid-container">  {/* row */}
                            <ProductConsumer>
                                {value => value.products.map(product => {
                                    return (
                                        <Product 
                                            key={product.id} 
                                            product={product}
                                            handleDetails={value.handleDetails} />)
                                })}
                            </ProductConsumer>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
};

export default ProductList