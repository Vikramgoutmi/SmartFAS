import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import { FaShoppingCart, FaChartLine, FaUser, FaDollarSign } from 'react-icons/fa';

const Widgets = () => {
  return (
    <div className="container mt-4">
      <Row className="g-4">
        <Col md={3}>
          <Card className="text-white bg-primary">
            <Card.Body>
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <h5>Monthly Sales</h5>
                  <h3>$1250</h3>
                  <small>+5.5%</small>
                </div>
                <FaDollarSign size={30} />
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col md={3}>
          <Card>
            <Card.Body>
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <h5>Orders</h5>
                  <h3>1,869</h3>
                  <small className="text-success">+16.5%</small>
                </div>
                <FaShoppingCart size={30} />
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col md={3}>
          <Card>
            <Card.Body>
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <h5>Conversion</h5>
                  <h3>86.6%</h3>
                </div>
                <FaChartLine size={30} />
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col md={3}>
          <Card>
            <Card.Body>
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <h5>Avg Orders</h5>
                  <h3>$80</h3>
                </div>
                <FaUser size={30} />
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Widgets;
