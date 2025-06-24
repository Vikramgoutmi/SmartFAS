// InteractiveProgressBars.jsx
import React, { useState } from 'react';
import { Container, Row, Col, Button, ProgressBar, Form, Spinner } from 'react-bootstrap';


const Progress = () => {
  const [progress, setProgress] = useState(45);
  const [multiProgress, setMultiProgress] = useState([15, 30, 20]);
  const [striped, setStriped] = useState(true);
  const [animated, setAnimated] = useState(false);
  const [labelVisible, setLabelVisible] = useState(true);

  const increaseProgress = () => {
    setProgress(prev => (prev + 10 <= 100 ? prev + 10 : 100));
  };

  const decreaseProgress = () => {
    setProgress(prev => (prev - 10 >= 0 ? prev - 10 : 0));
  };

  const colors = ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'dark'];
  
  

  return (<>
    <Container className="py-4">
      <h4>Interactive Progress Bars</h4>
      <p>Use buttons and toggles to control progress values and styles dynamically using React state.</p>

      <Row>
        <Col md={6}>
          <h6>Default</h6>
          <ProgressBar now={30} className="mb-3" />

          <h6>With label</h6>
          <ProgressBar
            now={progress}
            label={labelVisible ? `${progress}%` : ''}
            striped={striped}
            animated={animated}
            variant="primary"
            className="mb-3"
          />

          <h6>Small Progress</h6>
          <ProgressBar now={2} className="mb-3" style={{ height: '2px' }} />

          <h6>Large Progress</h6>
          <ProgressBar now={25} variant="success" className="mb-3" style={{ height: '20px' }} />

          <h6>Multiple bars</h6>
          <ProgressBar className="mb-3">
            <ProgressBar now={multiProgress[0]} variant="primary" key={1} />
            <ProgressBar now={multiProgress[1]} variant="success" key={2} />
            <ProgressBar now={multiProgress[2]} variant="info" key={3} />
          </ProgressBar>

          <h6>Multiple bars with label</h6>
          <ProgressBar className="mb-3">
            <ProgressBar now={multiProgress[0]} label="15%" variant="primary" key={1} />
            <ProgressBar now={multiProgress[1]} label="30%" variant="secondary" key={2} />
            <ProgressBar now={multiProgress[2]} label="20%" variant="dark" key={3} />
          </ProgressBar>
        </Col>

        <Col md={6}>
          <h6>Backgrounds</h6>
          <ProgressBar now={25} variant="success" className="mb-2" />
          <ProgressBar now={60} variant="info" className="mb-2" />
          <ProgressBar now={75} variant="warning" className="mb-2" />
          <ProgressBar now={100} variant="danger" className="mb-3" />

          <h6>Striped</h6>
          <ProgressBar striped now={25} variant="success" className="mb-2" />
          <ProgressBar striped now={60} variant="info" className="mb-2" />
          <ProgressBar striped now={75} variant="warning" className="mb-2" />
          <ProgressBar striped now={100} variant="danger" className="mb-3" />

          <h6>Controls</h6>
          <Button variant="success" onClick={increaseProgress} className="me-2">Increase</Button>
          <Button variant="danger" onClick={decreaseProgress}>Decrease</Button>

          <Form.Check
            className="mt-3"
            type="switch"
            label="Show Label"
            checked={labelVisible}
            onChange={() => setLabelVisible(!labelVisible)}
          />
          <Form.Check
            type="switch"
            label="Striped"
            checked={striped}
            onChange={() => setStriped(!striped)}
          />
          <Form.Check
            type="switch"
            label="Animated"
            checked={animated}
            onChange={() => setAnimated(!animated)}
          />
        </Col>
      </Row>
    </Container>

    {/* second page  */}
   <Container className="py-4">
      <h4>Spinners</h4>
      <p>
        Indicate the loading state of a component or page with Bootstrap spinners, built entirely with HTML, CSS, and no JavaScript.
      </p>

      {/* Border Spinners */}
      <h6>Border Spinners</h6>
      <div className="d-flex flex-wrap align-items-center gap-2 mb-3">
        {colors.map((variant, idx) => (
          <Spinner animation="border" variant={variant} key={idx} />
        ))}
      </div>

      {/* Spinner Sizes */}
      <h6>Spinners size</h6>
      <div className="d-flex flex-wrap align-items-center gap-2 mb-4">
        <Spinner animation="border" variant="secondary" style={{ width: '3rem', height: '3rem' }} />
        <Spinner animation="grow" variant="secondary" style={{ width: '3rem', height: '3rem' }} />

        <Spinner animation="border" variant="secondary" size="sm" />
        <Spinner animation="grow" variant="secondary" size="sm" />
      </div>

      {/* Growing Spinners */}
      <h6>Growing spinner</h6>
      <div className="d-flex flex-wrap align-items-center gap-2 mb-4">
        {colors.map((variant, idx) => (
          <Spinner animation="grow" variant={variant} key={idx} />
        ))}
      </div>

      {/* Buttons with Spinners */}
      <h6>Buttons with spinners</h6>
      <div className="d-flex flex-wrap gap-3">
        <Button variant="primary" disabled>
          <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" />
        </Button>

        <Button variant="secondary" disabled>
          <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" />
          {' '}Loading...
        </Button>

        <Button variant="success" disabled>
          <Spinner as="span" animation="grow" size="sm" role="status" aria-hidden="true" />
        </Button>

        <Button variant="dark" disabled>
          <Spinner as="span" animation="grow" size="sm" role="status" aria-hidden="true" />
          {' '}Loading...
        </Button>
      </div>
    </Container>
  </>
  );
};

export default Progress;
