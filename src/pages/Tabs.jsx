import React from "react";

// import { useState } from 'react';
import { Tab, Nav, Row, Col,Accordion, Card } from 'react-bootstrap';
// import { Accordion, Card, Row, Col } from 'react-bootstrap';
import { FaCube, FaTrashAlt, FaCalendarAlt, FaCoffee } from 'react-icons/fa';


const Tabs = () => {
  return (<>
    <div className="container py-5">
      <h3>Tabs</h3>
      <p className="text-muted">
        Adds the <code>.nav-tabs</code> class to generate a tabbed interface.
      </p>

      <div className="row">
        {/* Tab 1: Nav Tabs */}
        <div className="col-md-4">
          <Tab.Container defaultActiveKey="home1">
            <div className="card p-3">
              <Nav variant="tabs">
                <Nav.Item>
                  <Nav.Link eventKey="home1">Home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="profile1">Profile</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="contact1">Contact</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content className="mt-3">
                <Tab.Pane eventKey="home1">
                 A home loan is a secured loan that is obtained to purchase a property by offering it as collateral. Home loans offer high-value funding at economical interest rates and for long tenures. They are repaid through EMIs. After repayment, the property's title is transferred back to the borrower.

                </Tab.Pane>
                <Tab.Pane eventKey="profile1">
                 Proficient in financial modeling, analysis, and reporting. Strong Excel skills and eager to learn. Detail-oriented financial analyst with 6 months' demonstrable experience in financial analysis. Proven ability to analyze financial data, prepare reports, and support decision-making.
                </Tab.Pane>
                <Tab.Pane eventKey="contact1">Finance, of financing, is the process of raising funds or capital for any kind of expenditure. It is the process of channeling various funds in the form of credit, loans, or invested capital to those economic entities that most need them or can put them to the most productive use.16 May 2025</Tab.Pane>
              </Tab.Content>
            </div>
          </Tab.Container>
        </div>

        {/* Tab 2: Pills */}
        <div className="col-md-4">
          <Tab.Container defaultActiveKey="home2">
            <div className="card p-3">
              <Nav variant="pills">
                <Nav.Item>
                  <Nav.Link eventKey="home2">Pill Home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="profile2">Profile</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="contact2">Contact</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content className="mt-3">
                <Tab.Pane eventKey="home2">
                  The Finance Bill forms a part of the Union Budget, with details about all the legal amendments required for the changes in taxation proposed by the Finance Minister of the country.
                </Tab.Pane>
                <Tab.Pane eventKey="profile2">Proficient in financial modeling, analysis, and reporting. Strong Excel skills and eager to learn. Detail-oriented financial analyst with 6 months' demonstrable experience in financial analysis. Proven ability to analyze financial data, prepare reports, and support decision-making.</Tab.Pane>
                <Tab.Pane eventKey="contact2">It is the process of channeling various funds in the form of credit, loans, or invested capital to those economic entities that most need them or can put them to the most productive use.16 May 2025</Tab.Pane>
              </Tab.Content>
            </div>
          </Tab.Container>
        </div>

        {/* Tab 3: Vertical Pills */}
        <div className="col-md-4">
          <Tab.Container defaultActiveKey="home3">
            <div className="card p-3 d-flex flex-row">
              <Nav variant="pills" className="flex-column me-3">
                <Nav.Item>
                  <Nav.Link eventKey="home3">Home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="profile3">Profile</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="messages3">Messages</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="settings3">Settings</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="home3">
                  The Finance Bill forms a part of the Union Budget, with details about all the legal amendments required for the changes in taxation proposed by the Finance Minister of the country.
                </Tab.Pane>
                <Tab.Pane eventKey="profile3">Proficient in financial modeling, analysis, and reporting. Strong Excel skills and eager to learn. Detail-oriented financial analyst with 6 months' demonstrable experience in financial analysis. Proven ability to analyze financial data, prepare reports, and support decision-making.</Tab.Pane>
                <Tab.Pane eventKey="messages3">A well-written objective or summary on your resume can be the difference between getting rejected, or getting invited for an interview. Copy any of these Finance objective or summary examples, and use it as inspiration for your own resume. All examples are written by certified resume experts, and free for personal use.</Tab.Pane>
                <Tab.Pane eventKey="settings3">Personal finance is the term used to describe all aspects of an individual's money management, including saving and investing. It encompasses budgeting, banking, insurance, mortgages, investments, retirement,</Tab.Pane>
              </Tab.Content>
            </div>
          </Tab.Container>
        </div>
      </div>
    </div>

    {/* second page  */}

     <div className="container py-4 ">
      <h5>Icon tabs</h5>
      <p>Take that same HTML with tabs, but use .nav-pills instead</p>

      {/* Horizontal Icon Tabs */}
      <Tab.Container defaultActiveKey="first" >
        <Nav variant="pills" className="mb-3 justify-content-start ">
          <Nav.Item>
            <Nav.Link eventKey="first"><FaCube /></Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="second"><FaTrashAlt /></Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="third"><FaCalendarAlt /></Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="fourth"><FaCoffee /></Nav.Link>
          </Nav.Item>
        </Nav>
        <Tab.Content>
          <Tab.Pane eventKey="first">
            <p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.</p>
          </Tab.Pane>
          <Tab.Pane eventKey="second">
            <p>The Finance Bill forms a part of the Union Budget, with details about all the legal amendments required for the changes in taxation proposed by the Finance Minister of the country.</p>
          </Tab.Pane>
          <Tab.Pane eventKey="third">
            <p>A well-written objective or summary on your resume can be the difference between getting rejected, or getting invited for an interview. Copy any of these Finance objective or summary examples, and use it as inspiration for your own resume. All examples are written by certified resume experts, and free for personal use.</p>
          </Tab.Pane>
          <Tab.Pane eventKey="fourth">
            <p>Proficient in financial modeling, analysis, and reporting. Strong Excel skills and eager to learn. Detail-oriented financial analyst with 6 months' demonstrable experience in financial analysis. Proven ability to analyze financial data, prepare reports, and support decision-making.</p>
          </Tab.Pane>
        </Tab.Content>
      </Tab.Container>

      <hr />

      {/* Vertical Icon Tabs */}
      <Tab.Container defaultActiveKey="firstVertical">
        <Row>
          <Col sm={2}>
            <Nav variant="pills" className="flex-column">
              <Nav.Item>
                <Nav.Link eventKey="firstVertical"><FaCube /></Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="secondVertical"><FaTrashAlt /></Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="thirdVertical"><FaCalendarAlt /></Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="fourthVertical"><FaCoffee /></Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={10}>
            <Tab.Content>
              <Tab.Pane eventKey="firstVertical">
                <p>nim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.</p>
              </Tab.Pane>
              <Tab.Pane eventKey="secondVertical">
                <p>Proficient in financial modeling, analysis, and reporting. Strong Excel skills and eager to learn. Detail-oriented financial analyst with 6 months' demonstrable experience in financial analysis. Proven ability to analyze financial data, prepare reports, and support decision-making.</p>
              </Tab.Pane>
              <Tab.Pane eventKey="thirdVertical">
                <p>A well-written objective or summary on your resume can be the difference between getting rejected, or getting invited for an interview. Copy any of these Finance objective or summary examples, and use it as inspiration for your own resume. All examples are written by certified resume experts, and free for personal use.</p>
              </Tab.Pane>
              <Tab.Pane eventKey="fourthVertical">
                <p>financial modeling, analysis, and reporting. Strong Excel skills and eager to learn. Detail-oriented financial analyst with 6 months' demonstrable experience in financial analysis. Proven ability to analyze financial data, prepare reports, and support decision-making</p>
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </div>
  
  {/* thared page  */}

   <div className="container py-4">
      <h5>Accordions</h5>
      <p>Using the card component, you can extend the default collapse behavior to create an accordion.</p>

      <Row>
        {/* First Accordion */}
        <Col md={6}>
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>Collapse one</Accordion.Header>
              <Accordion.Body>
                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
                3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
                Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Collapse two</Accordion.Header>
              <Accordion.Body>
               Proficient in financial modeling, analysis, and reporting. Strong Excel skills and eager to learn. Detail-oriented financial analyst with 6 months' demonstrable experience in financial analysis. Proven ability to analyze financial data, prepare reports, and support decision-making.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>Collapse three</Accordion.Header>
              <Accordion.Body>
                A well-written objective or summary on your resume can be the difference between getting rejected, or getting invited for an interview. Copy any of these Finance objective or summary examples, and use it as inspiration for your own resume. All examples are written by certified resume experts, and free for personal use.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Col>

        {/* Second Accordion */}
        <Col md={6}>
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>Collapse boxed One</Accordion.Header>
              <Accordion.Body>
                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
                3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Collapse boxed two</Accordion.Header>
              <Accordion.Body>
                financial modeling, analysis, and reporting. Strong Excel skills and eager to learn. Detail-oriented financial analyst with 6 months' demonstrable experience in financial analysis. Proven ability to analyze financial data, prepare reports, and support decision-making
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>Collapse boxed three</Accordion.Header>
              <Accordion.Body>
                Proficient in financial modeling, analysis, and reporting. Strong Excel skills and eager to learn. Detail-oriented financial analyst with 6 months' demonstrable experience in financial analysis. Proven ability to analyze financial data, prepare reports, and support decision-making.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Col>
      </Row>
    </div>
  
  </>);
};

export default Tabs;
