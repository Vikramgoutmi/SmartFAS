import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

const Modals = () => {
  const [show, setShow] = useState(false);
  const [size, setSize] = useState(null);
  const [fullscreen, setFullscreen] = useState(false);
  const [centered, setCentered] = useState(false);

  const openModal = ({ modalSize, fullscreenMode, centeredMode }) => {
    setSize(modalSize || null);
    setFullscreen(fullscreenMode || false);
    setCentered(centeredMode || false);
    setShow(true);
  };

  return (
    <div className="container my-5">
      <h2>Modals</h2>
      <p className="text-muted">
        Use Bootstrap’s modal plugin to show custom dialogs, notifications, or lightboxes.
      </p>

      <div className="row g-3">
        {/* Default Modal */}
        <div className="col-md-4">
          <div className="card p-3">
            <h6>Default Modal</h6>
            <p>With supporting text below...</p>
            <Button variant="primary" onClick={() => openModal({})}>
              Launch demo modal
            </Button>
          </div>
        </div>

        {/* Centered Modal */}
        <div className="col-md-4">
          <div className="card p-3">
            <h6>Vertically centered</h6>
            <p>With supporting text below...</p>
            <Button variant="success" onClick={() => openModal({ centeredMode: true })}>
              Launch demo modal
            </Button>
          </div>
        </div>

        {/* Varying Content */}
        <div className="col-md-4">
          <div className="card p-3">
            <h6>Varying modal content</h6>
            <p>With supporting text below...</p>
            <Button variant="outline-dark" onClick={() => openModal({})}>
              Open modal
            </Button>
          </div>
        </div>

        {/* Modal Sizes */}
        <div className="col-md-8">
          <div className="card p-3">
            <h6>Modal sizes</h6>
            <p>With supporting text below...</p>
            <div className="row-2">
            <Button className="me-2" variant="primary" onClick={() => openModal({ modalSize: "xl" })}>
              Extra large modal
            </Button>
            <Button className="me-2" variant="outline-success" onClick={() => openModal({ modalSize: "lg" })}>
              Large modal
            </Button>
            <Button variant="outline-dark" onClick={() => openModal({ modalSize: "sm" })}>
              Small modal
            </Button>
            </div>
          </div>
        </div>

        {/* Custom Modals */}
        <div className="col-md-4">
          <div className="card p-3">
            <h6>Custom modals</h6>
            <p>With supporting text below...</p>
             <div className="row-2">
            <Button className="me-2" variant="primary" onClick={() => openModal({})}>
              Slide Right
            </Button>
            <Button variant="dark" onClick={() => openModal({ fullscreenMode: true })}>
              Full Screen
            </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bootstrap Modal */}
      <Modal
        show={show}
        onHide={() => setShow(false)}
        size={size}
        centered={centered}
        fullscreen={fullscreen}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>This is the content of the modal.</Modal.Body>
        <Modal.Footer>
            
          <Button variant="secondary" onClick={() => setShow(false)}>Close</Button>
          <Button variant="primary">Save changes</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Modals;
