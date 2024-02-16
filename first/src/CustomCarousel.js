import React from 'react';
import { Carousel as BootstrapCarousel } from 'react-bootstrap'; 

const CustomCarousel = () => {
  return (
    <div style={{ maxWidth: '1100px', maxHeight: '800px', margin: 'auto' }}> {/* Adjust the maxWidth as needed */}
      <BootstrapCarousel>
        <BootstrapCarousel.Item>
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1707343848552-893e05dba6ac?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="First slide"
          />
        </BootstrapCarousel.Item>
        <BootstrapCarousel.Item>
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1682685794761-c8e7b2347702?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Second slide"
          />
        </BootstrapCarousel.Item>
        <BootstrapCarousel.Item>
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1707344088547-3cf7cea5ca49?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Second slide"
          />
        </BootstrapCarousel.Item>
        <BootstrapCarousel.Item>
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1708003564543-fd4f884e5dec?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Second slide"
          />
        </BootstrapCarousel.Item>
        {/* Add more BootstrapCarousel.Item components for additional slides */}
      </BootstrapCarousel>
    </div>
  );
};

export default CustomCarousel;
