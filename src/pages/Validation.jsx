import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Form, Card, Button } from 'react-bootstrap';


const Validation = () => {
    const indianStates = [
        "Option",
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal"
];



  return (
    <div className="container mt-4">
      <div className="bg-light p-4">
        <h3>Form advanced elements</h3>
        <p className="text-muted">
          Provide valuable, actionable feedback to your users with HTML5 form validation
        </p>
      </div>



        <Row>
        {/* Default Validation */}
        <Col md={6}>
          <Card>
            <Card.Header><strong>Default Validation</strong></Card.Header>
            <Card.Body>
              <Form>
                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                      We'll never share your email with anyone else.
                    </Form.Text>
                  </Form.Group>

                  <Form.Group as={Col} controlId="formUsername">
                    <Form.Label>Username</Form.Label>
                    <div className="d-flex">
                      <span className="input-group-text">@</span>
                      <Form.Control type="text" placeholder="Username" />
                    </div>
                  </Form.Group>
                </Row>

                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formFirstName">
                    <Form.Label>First name</Form.Label>
                    <Form.Control type="text" placeholder="First name" defaultValue="Mark" />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formLastName">
                    <Form.Label>Last name</Form.Label>
                    <Form.Control type="text" placeholder="Last name" defaultValue="Otto" />
                  </Form.Group>
                </Row>

                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formCity">
                    <Form.Label>City</Form.Label>
                    <Form.Control type="text" />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formState">
                    <Form.Label>State</Form.Label>
                    <Form.Select defaultValue="Choose...">
                        {indianStates.map((curElem) => {
                            return  <option>{curElem}</option>
                        })}
                      {/* <option>...</option> */}
                    </Form.Select>
                  </Form.Group>

                  <Form.Group as={Col} controlId="formZip">
                    <Form.Label>Zip</Form.Label>
                    <Form.Control type="text" />
                  </Form.Group>
                </Row>
              </Form>

               
                <Form.Group className="mb-3" controlId="aboutYourself">
                  <Form.Label>About your self</Form.Label>
                  <Form.Control as="textarea" placeholder="Required example textarea" />
                </Form.Group>

 <Form.Group className="mb-3" controlId="customCheckbox">
                  <Form.Check type="checkbox" label="Check this custom checkbox" />
                </Form.Group>

                 <Form.Group className="mb-3">
                  <Form.Check
                    type="radio"
                    name="customRadio"
                    id="customRadio1"
                    label="Toggle this custom radio"
                  />
                  <Form.Check
                    type="radio"
                    name="customRadio"
                    id="customRadio2"
                    label="Or toggle this other custom radio"
                  />
                </Form.Group>

                  <Form.Group className="mb-3" controlId="selectLevel">
                  <Form.Label>Select your level</Form.Label>
                  <Form.Control as="select" multiple>
                    <option>Level 1</option>
                    <option>Level 2</option>
                    <option>Level 3</option>
                    <option>Level 4</option>
                    <option>Level 5</option>
                    <option>Level 6</option>
                  </Form.Control>
                </Form.Group>

                 <Form.Group className="mb-3" controlId="formFile">
                  <Form.Label>Upload file</Form.Label>
                  <Form.Control type="file" />
                </Form.Group>
                 
                 <div className="d-flex">
                   <Form.Group className="mb-3" controlId="termsCheckbox1">
                  <Form.Check type="checkbox" label="Agree to terms and conditions" />
                </Form.Group>

                  <Button variant="primary" type="submit">
                  Submit form
                </Button>
                </div>

                
            </Card.Body>
          </Card>
        </Col>

        {/* Advanced Validation */}
        <Col md={6}>
          <Card>
            <Card.Header><strong>Advanced Validation</strong></Card.Header>
            <Card.Body>
              <Form>
                <Row className="mb-3">
                  <Form.Group as={Col} controlId="advFirstName">
                    <Form.Label>First name</Form.Label>
                    <Form.Control type="text" defaultValue="Mark" />
                  </Form.Group>

                  <Form.Group as={Col} controlId="advLastName">
                    <Form.Label>Last name</Form.Label>
                    <Form.Control type="text" defaultValue="Otto" />
                  </Form.Group>
                </Row>

                <Row className="mb-3">
                  <Form.Group as={Col} controlId="advEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                      We'll never share your email with anyone else.
                    </Form.Text>
                  </Form.Group>

                  <Form.Group as={Col} controlId="advPhone">
                    <Form.Label>US Telephone</Form.Label>
                    <Form.Control type="text" placeholder="" />
                  </Form.Group>
                </Row>

                <Form.Group className="mb-3" controlId="advAddress">
                  <Form.Label>Address</Form.Label>
                  <Form.Control type="text" placeholder="Enter your address" />
                </Form.Group>
                
                  <Row className="mb-3">
                 <Form.Group as={Col} controlId="formCity">
                    <Form.Label>City</Form.Label>
                    <Form.Control type="text" />
                  </Form.Group>

                   <Form.Group as={Col} controlId="formState">
                    <Form.Label>State</Form.Label>
                    <Form.Select defaultValue="Choose...">
                        {indianStates.map((curElem) => {
                            return  <option>{curElem}</option>
                        })}
                      {/* <option>...</option> */}
                    </Form.Select>
                  </Form.Group>

                   <Form.Group as={Col} controlId="formZip">
                    <Form.Label>Zip code</Form.Label>
                    <Form.Control type="text" />
                  </Form.Group>
                  </Row>

                   <Row className="mb-3">
                  <Form.Group as={Col} controlId="formDate">
                    <Form.Label>Date Picker</Form.Label>
                    <Form.Control type="date" defaultValue="2020-04-24" />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formTime">
                    <Form.Label>Time</Form.Label>
                    <Form.Control type="time" />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formSwitch">
                    <Form.Label>Pick Up</Form.Label>
                    <Form.Check type="switch" label="Yes" />
                  </Form.Group>
                </Row>

                 <Row className="mb-3">
                  <Col>
                    <Form.Check
                      type="radio"
                      name="paymentMethod"
                      label={
                        <>
                          Card <br />
                          <small className="text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</small>
                        </>
                      }
                    />
                  </Col>
                  <Col>
                    <Form.Check
                      type="radio"
                      name="paymentMethod"
                      label={
                        <>
                          Paypal <br />
                          <small className="text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</small>
                        </>
                      }
                    />
                  </Col>
                </Row>

                <Form.Group className="mb-3" controlId="note">
                  <Form.Label>Note</Form.Label>
                  <Form.Control as="textarea" placeholder="Take a note here" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="termsCheckbox2">
                  <Form.Check type="checkbox" label="Agree to terms and conditions" />
                </Form.Group>

                <Button variant="primary" type="submit">
                  Submit form
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Validation;
