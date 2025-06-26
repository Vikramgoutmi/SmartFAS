import React, { useState } from 'react';

import { Container, Card, Button, Row, Col, Form, Nav , Tab, Alert} from 'react-bootstrap';


const steps = [
  { title: "1. Keyboard", content: "Try the keyboard navigation by clicking arrow left or right!" },
  { title: "2. Effects", content: "Wonderful transition effects." },
  { title: "3. Pager", content: "The next and previous buttons help you to navigate through your content." },
];

const wizardStepsData = [
  { title: "1. Keyboard", content: "Try the keyboard navigation by clicking arrow left or right!" },
  { title: "2. Effects", content: "Wonderful transition effects." },
  { title: "3. Pager", content: "The next and previous buttons help you to navigate through your content." }
];

const Wizard = () => {
  const [step, setStep] = useState(0);

  const nextStep = () => {
    if (step < steps.length - 1) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 0) setStep(step - 1);
  };

  const finish = () => {
    alert("Wizard Completed!");
    setStep(0);
  };

//   second 
 const [currentStepIndex, setCurrentStepIndex] = useState(0);

  const handleNextClick = () => {
    if (currentStepIndex < wizardStepsData.length - 1) {
      setCurrentStepIndex(currentStepIndex + 1);
    }
  };

  const handlePreviousClick = () => {
    if (currentStepIndex > 0) {
      setCurrentStepIndex(currentStepIndex - 1);
    }
  };


//   threed 

  const [formData, setFormData] = useState({
    username: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({});
  const [currentStep, setCurrentStep] = useState('account');

  const validate = () => {
    const newErrors = {};
    if (!formData.username) newErrors.username = 'This field is required.';
    if (!formData.password) newErrors.password = 'This field is required.';
    if (!formData.confirmPassword) newErrors.confirmPassword = 'This field is required.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validate()) {
      setCurrentStep('profile'); // Move to next tab (you can implement further logic)
    }
  };



  return (
    <div className="container mt-4">
      <div className="bg-light p-4">
        <h3>Form Wizard</h3>
        <p className="text-muted">
         Using jQuery Steps as default wizard plugin. That is an extremely flexible, compact and feature-rich plugin.
        </p>
      </div>
    <Container className="mt-4">
      <Card>
        <Card.Header><strong>Basic</strong></Card.Header>
        <Card.Body>
          <div className="d-flex gap-2 mb-3">
            {steps.map((s, index) => (
              <Button
                key={index}
                variant={index === step ? 'primary' : 'success'}
                onClick={() => setStep(index)}
              >
                {s.title}
              </Button>
            ))}
          </div>

          <p className="text-muted">{steps[step].content}</p>

          <div className="d-flex justify-content-end gap-2">
            <Button variant="primary" disabled={step === 0} onClick={prevStep}>
              Previous
            </Button>

            {step === steps.length - 1 ? (
              <Button variant="primary" onClick={finish}>
                Finish
              </Button>
            ) : (
              <Button variant="primary" onClick={nextStep}>
                Next
              </Button>
            )}
          </div>
        </Card.Body>
      </Card>
    </Container>

     <Container className="mt-4">
      <Card>
        <Card.Header><strong>Vertical</strong></Card.Header>
        <Card.Body>
          <Row>
            {/* Step Navigation Buttons */}
            <Col md={3} className="d-flex flex-column gap-2">
              {wizardStepsData.map((stepInfo, stepIndex) => (
                <Button
                  key={`step-${stepIndex}`}
                  variant={stepIndex === currentStepIndex ? 'primary' : 'success'}
                  onClick={() => setCurrentStepIndex(stepIndex)}
                >
                  {stepInfo.title}
                </Button>
              ))}
            </Col>

            {/* Step Content Display */}
            <Col md={9}>
              <p className="text-muted">{wizardStepsData[currentStepIndex].content}</p>
              <div className="d-flex justify-content-end gap-2">
                <Button
                  variant="light"
                  disabled={currentStepIndex === 0}
                  onClick={handlePreviousClick}
                >
                  Previous
                </Button>
                <Button
                  variant="primary"
                  onClick={handleNextClick}
                  disabled={currentStepIndex === wizardStepsData.length - 1}
                >
                  Next
                </Button>
              </div>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>


      <Tab.Container activeKey={currentStep}>
      <div className="p-4 border rounded bg-white">
        <Nav variant="tabs">
          <Nav.Item><Nav.Link eventKey="account" active>1. Account</Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link eventKey="profile" disabled>2. Profile</Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link eventKey="hints" disabled>3. Hints</Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link eventKey="finish" disabled>4. Finish</Nav.Link></Nav.Item>
        </Nav>

        <Tab.Content className="mt-4">
          <Tab.Pane eventKey="account">
            <Form>
              <Form.Group>
                <Form.Label>User name *</Form.Label>
                <Form.Control
                  type="text"
                  isInvalid={!!errors.username}
                  value={formData.username}
                  onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.username}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group>
                <Form.Label>Password *</Form.Label>
                <Form.Control
                  type="password"
                  isInvalid={!!errors.password}
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.password}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group>
                <Form.Label>Confirm Password *</Form.Label>
                <Form.Control
                  type="password"
                  isInvalid={!!errors.confirmPassword}
                  value={formData.confirmPassword}
                  onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.confirmPassword}
                </Form.Control.Feedback>
              </Form.Group>

              <div className="d-flex justify-content-between mt-4">
                <Button variant="light" disabled>Previous</Button>
                <Button variant="primary" onClick={handleNext}>Next</Button>
              </div>
            </Form>

            <p className="mt-3 text-muted">(*) Mandatory</p>
          </Tab.Pane>
        </Tab.Content>
      </div>
    </Tab.Container>

    


    </div>
  );
};

export default Wizard;
