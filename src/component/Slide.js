import React, { Component } from 'react';
import PropTypes from 'prop-types';

// This images are test images for slide //
import p2 from '../img/product-1-2.png'
import p3 from "../img/product-1-3.png";


export default class Slide extends Component {
    static propTypes = {
        source: PropTypes.string.isRequired
    };

    render(){
    
        return (
            <div className="myCarousel">
                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="slider-thumb">
                            <img className="d-block" src={this.props.source} alt="First slide" />
                        </li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1" className="slider-thumb">
                            <img className="d-block" src={p2} alt="Second slide" />
                        </li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2" className="slider-thumb">
                            <img className="d-block" src={p3} alt="Third slide" />

                        </li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="" src={this.props.source} alt="First slide" />
                        </div>
                        <div className="carousel-item">
                            <img className="" src={p2} alt="Second slide" />
                        </div>
                        <div className="carousel-item">
                            <img className="" src={p3} alt="Third slide" />
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>
        )
  };
}
