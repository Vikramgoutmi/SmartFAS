import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Container, Row, Col, Card, ProgressBar } from "react-bootstrap";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  ButtonGroup,
  ButtonToolbar,
} from "react-bootstrap";
import {
  FaArrowRight,
  FaChevronDown,
  FaDownload,
  FaRedoAlt,
} from "react-icons/fa";

const NewButton = () => {
  return (
   <Row className="g-4">
    <Col md={6}>
      {/* Buttons */}
       <div className="card mb-4 ">
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
      </Col>

 

      {/* Outline Buttons */}
      <Col md={6}>
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
      </Col>
     

      {/* Button Sizes */}
       <Col md={6}>
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
      </Col>

      {/* Button States */}
       <Col md={6}>
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
      </Col>
    


    <Col md={6}>
        <Card>
          <Card.Header>Button group</Card.Header>
          <Card.Body>
            <p className="text-muted">
              Bootstrap includes several predefined button styles, each serving
              its own semantic purpose, with a few extras thrown in for more
              control.
            </p>
            <ButtonGroup>
              <Button variant="secondary">Left</Button>
              <Button variant="secondary">Middle</Button>
              <Button variant="secondary">Right</Button>
            </ButtonGroup>
          </Card.Body>
        </Card>
      </Col>


       <Col md={6}>
        <Card>
          <Card.Header>Button toolbar</Card.Header>
          <Card.Body>
            <p className="text-muted">
              Bootstrap includes several predefined button styles, each serving
              its own semantic purpose, with a few extras thrown in for more
              control.
            </p>

            <ButtonToolbar className="mb-2">
              <ButtonGroup className="me-2">
                {[1, 2, 3, 4].map((n) => (
                  <Button key={n} variant="secondary">
                    {n}
                  </Button>
                ))}
              </ButtonGroup>

              <ButtonGroup className="me-2">
                {[5, 6, 7].map((n) => (
                  <Button key={n} variant="secondary">
                    {n}
                  </Button>
                ))}
              </ButtonGroup>

              <ButtonGroup>
                <Button variant="secondary">8</Button>
              </ButtonGroup>
            </ButtonToolbar>
          </Card.Body>
        </Card>
      </Col>


       <Col md={6}>
        <Card>
          <Card.Header>Icon buttons</Card.Header>
          <Card.Body>
            <p className="text-muted">
              Bootstrap includes several predefined button styles, each serving
              its own semantic purpose, with a few extras thrown in for more
              control.
            </p>

            {/* solid */}
            <Button variant="primary" className="me-2 mb-2">
              <FaArrowRight className="me-1" /> Primary
            </Button>
            <Button variant="success" className="me-2 mb-2">
              Success <FaChevronDown className="ms-1" />
            </Button>
            <Button variant="secondary" className="me-2 mb-2">
              <FaDownload />
            </Button>
            <br />

            {/* outline */}
            <Button variant="outline-primary" className="me-2 mb-2">
              <FaArrowRight className="me-1" /> Primary
            </Button>
            <Button variant="outline-secondary" className="me-2 mb-2">
              <FaChevronDown className="me-1" /> Secondary
            </Button>
            <Button variant="outline-success" className="me-2 mb-2">
              <FaRedoAlt />
            </Button>
          </Card.Body>
        </Card>
      </Col>

<Col md={6}>
        <Card>
          <Card.Header>Block level buttons</Card.Header>
          <Card.Body>
            <p className="text-muted">
              Bootstrap includes several predefined button styles, each serving
              its own semantic purpose, with a few extras thrown in for more
              control.
            </p>

            <Button variant="primary" size="lg" className="w-100 mb-3">
              Block level button
            </Button>
            <Button variant="secondary" size="lg" className="w-100">
              Block level button
            </Button>
          </Card.Body>
        </Card>
      </Col>

 
 </Row> );
};

export default NewButton;
