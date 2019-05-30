import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { ProductConsumer } from "../context";
import DetailDrawer from './DetailDrawer';


class Details extends Component {
    constructor(props) {
    super(props)

        this.state = {
            productData: []
        }
    };

    render() {
        const idx = this.props.match.params.id;

        return (
            <React.Fragment>
                    <ProductConsumer>
                            {value => {
                                const data = value.products.filter(item => item.id.toString() === idx)[0]               
                                return <DetailDrawer productInfo={data} />
                            }}
                    </ProductConsumer>    
            </React.Fragment>
        )
    }
};

export default withRouter(Details)