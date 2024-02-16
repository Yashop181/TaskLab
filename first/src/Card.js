import React from 'react';
import { Carousel } from 'react-bootstrap';

const CarouselComponent = () => {
  return (
    <div className="">
      <Carousel style={{ marginLeft: '120px' }}>
        <Carousel.Item>
          <div className="row">
            <CardComponent />
            <CardComponent />
            <CardComponent />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="row">
            <CardComponent />
            <CardComponent />
            <CardComponent />
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

const CardComponent = () => {
  return (
    <div className="col-lg-4">
      <div className="card" style={{ width: '18rem' }}>
        <img src="https://images.unsplash.com/photo-1683009427598-9c21a169f98f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
};

export default CarouselComponent;
