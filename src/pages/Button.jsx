import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Button = () => {
  return (
   <div className='row g-3'>
    <div className="container  ">
      {/* Buttons */}
      <div className="card  ">
        <div className="card-body">
          <h5 className="card-title">Buttons</h5>
          <p className="card-text">
            Bootstrap includes several predefined button styles, each serving its own semantic purpose, with a few extras thrown in for more control.
          </p>
          <button className="btn btn-primary m-1">Primary</button>
          <button className="btn btn-secondary m-1">Secondary</button>
          <button className="btn btn-success m-1">Success</button>
          <button className="btn btn-danger m-1">Danger</button>
          <button className="btn btn-warning m-1">Warning</button>
          <button className="btn btn-info m-1">Info</button>
          <button className="btn btn-light m-1">Light</button>
          <button className="btn btn-dark m-1">Dark</button>
          <button className="btn btn-link m-1">Link</button>
        </div>
      </div>

      {/* Outline Buttons */}
      <div className="card mb-4">
        <div className="card-body">
          <h5 className="card-title">Outline buttons</h5>
          <p className="card-text">
            Bootstrap includes several predefined button styles, each serving its own semantic purpose, with a few extras thrown in for more control.
          </p>
          <button className="btn btn-outline-primary m-1">Primary</button>
          <button className="btn btn-outline-secondary m-1">Secondary</button>
          <button className="btn btn-outline-success m-1">Success</button>
          <button className="btn btn-outline-danger m-1">Danger</button>
          <button className="btn btn-outline-warning m-1">Warning</button>
          <button className="btn btn-outline-info m-1">Info</button>
          <button className="btn btn-outline-light m-1">Light</button>
          <button className="btn btn-outline-dark m-1">Dark</button>
          <button className="btn btn-link m-1">Link</button>
        </div>
      </div>
     

      {/* Button Sizes */}
      <div className="card mb-4">
        <div className="card-body">
          <h5 className="card-title">Buttons sizes</h5>
          <p className="card-text">
            Bootstrap includes several predefined button styles, each serving its own semantic purpose, with a few extras thrown in for more control.
          </p>
          <button className="btn btn-secondary btn-lg m-1">Large button</button>
          <button className="btn btn-secondary m-1">Default Button</button>
          <button className="btn btn-secondary btn-sm m-1">Small Button</button>
        </div>
      </div>

      {/* Button States */}
      <div className="card mb-4">
        <div className="card-body">
          <h5 className="card-title">Buttons State</h5>
          <p className="card-text">
            Bootstrap includes several predefined button styles, each serving its own semantic purpose, with a few extras thrown in for more control.
          </p>
          <button className="btn btn-primary active m-1">Active</button>
          <button className="btn btn-outline-primary m-1" disabled>Disabled</button>
        </div>
      </div>
    
 </div>
 </div> );
};

export default Button;
