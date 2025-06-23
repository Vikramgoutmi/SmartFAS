import React from 'react';
import  { useState } from "react";
import { FaInfoCircle, FaCheckCircle, FaExclamationTriangle, FaExclamationCircle, FaCog, FaLink, FaCircle } from 'react-icons/fa';
import "bootstrap/dist/js/bootstrap.bundle.min.js";
const Notifications = () => {
     const [showToast, setShowToast] = useState(true);
  return ( <>
   <div className='container my-4'>
     <h5>Alerts</h5>
      <p className="text-muted">
       This primitive is meant to make it easy to display both user-centric or activity-centric actions in your app. Sometimes it makes sense to even blend both in a single timeline, which works perfectly.
      </p>
   </div>
    <div className="container my-4">
      <div className="row">
        {/* Left Column - Normal Alerts */}
        <div className="col-md-6">
          <div className="card mb-4">
            <div className="card-body">
              <h5 className="card-title">Notifications</h5>
              <div className="alert alert-primary">A simple primary alert—check it out!</div>
              <div className="alert alert-secondary">A simple secondary alert—check it out!</div>
              <div className="alert alert-success">A simple success alert—check it out!</div>
              <div className="alert alert-danger">A simple danger alert—check it out!</div>
              <div className="alert alert-warning">A simple warning alert—check it out!</div>
              <div className="alert alert-info">A simple info alert—check it out!</div>
              <div className="alert alert-light">A simple light alert—check it out!</div>
              <div className="alert alert-dark">A simple dark alert—check it out!</div>
            </div>
          </div>
        </div>

        {/* Right Column - Alerts with Icons */}
        <div className="col-md-6">
          <div className="card mb-4">
            <div className="card-body">
              <h5 className="card-title">Notifications with icons</h5>
              <div className="alert alert-primary d-flex align-items-center gap-2">
                <FaInfoCircle /> A simple primary alert—check it out!
              </div>
              <div className="alert alert-secondary d-flex align-items-center gap-2">
                <FaCircle /> A simple secondary alert—check it out!
              </div>
              <div className="alert alert-success d-flex align-items-center gap-2">
                <FaCheckCircle /> A simple success alert—check it out!
              </div>
              <div className="alert alert-danger d-flex align-items-center gap-2">
                <FaExclamationCircle /> A simple danger alert—check it out!
              </div>
              <div className="alert alert-warning d-flex align-items-center gap-2">
                <FaExclamationTriangle /> A simple warning alert—check it out!
              </div>
              <div className="alert alert-info d-flex align-items-center gap-2">
                <FaCog /> A simple info alert—check it out!
              </div>
              <div className="alert alert-light d-flex align-items-center gap-2">
                <FaLink /> A simple light alert—check it out!
              </div>
              <div className="alert alert-dark d-flex align-items-center gap-2">
                <FaCircle /> A simple dark alert—check it out!
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

     <div className="container my-4">
      {/* Success Alert with Heading and Paragraph */}
      <div className="alert alert-success" role="alert">
        <h4 className="alert-heading">Well done!</h4>
        <p>
          Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.
        </p>
        <hr />
        <p className="mb-0">
          Whenever you need to, be sure to use margin utilities to keep things nice and tidy.
        </p>
      </div>

      {/* Warning Alert with Dismiss Button */}
      <div className="alert alert-warning alert-dismissible fade show" role="alert">
        <strong>Holy guacamole!</strong> You should check in on some of those fields below.
        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>

      {/* Toast Notification */}
      <h2 className="mt-5">Toasts</h2>
      <p className="text-muted">
        Push notifications to your visitors with a toast, a lightweight and easily customizable alert message.
      </p>

      <div
        className="toast show align-items-center text-bg-white border-0 shadow-sm"
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
        style={{ width: "300px" }}
      >
        <div className="toast-header">
          <strong className="me-auto">New update</strong>
          <small className="text-muted">11 mins ago</small>
          <button
            type="button"
            className="btn-close ms-2 mb-1"
            data-bs-dismiss="toast"
            aria-label="Close"
            onClick={() => setShowToast(false)}
          ></button>
        </div>
        <div className="toast-body">Hello, world! This is a toast message.</div>
      </div>
    </div>
  </>);
};

export default Notifications;
