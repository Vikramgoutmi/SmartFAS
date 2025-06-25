import React, { useRef } from 'react'

 const AdvancedElements = () => {
     const editorRef = useRef(null);

  const formatText = (command) => {
    document.execCommand(command, false, null);
  };
  return (<>
  <div className="container mt-4">
      <h3>Form advanced elements</h3>
      <p className="text-muted">Demo for form control styles, layout options, and custom components for creating a wide variety of forms.</p>

      <div className="row g-4">

        {/* Input group */}
        <div className="col-md-6">
          <div className="p-3 border rounded">
            <h6>Input group</h6>

            {/* Username input */}
            <div className="input-group mb-3">
              <span className="input-group-text">@</span>
              <input type="text" className="form-control" placeholder="Username" />
            </div>

            {/* Email input */}
            <div className="input-group mb-3">
              <input type="text" className="form-control" placeholder="Recipient's username" />
              <span className="input-group-text">@example.com</span>
            </div>

            {/* Vanity URL */}
            <label htmlFor="basic-url" className="form-label">Your vanity URL</label>
            <div className="input-group mb-3">
              <span className="input-group-text">https://example.com/users/</span>
              <input type="text" className="form-control" />
            </div>

            {/* Currency input */}
            <div className="input-group mb-3">
              <span className="input-group-text">$</span>
              <input type="text" className="form-control" />
              <span className="input-group-text">.00</span>
            </div>

            {/* Button with input */}
            <div className="input-group mb-3">
              <input type="text" className="form-control" placeholder="Button addons" />
              <button className="btn btn-primary" type="button">Button</button>
            </div>

            {/* Button with dropdown */}
            <div className="input-group">
              <button className="btn btn-secondary" type="button">Button</button>
              <select className="form-select">
                <option>Choose...</option>
                <option>One</option>
                <option>Two</option>
              </select>
            </div>
          </div>
        </div>


<div  className="col-6 d-flex flex-column ">
        {/* Select2 style (dropdowns) */}
        <div className="col-md-12">
          <div className="p-2 border rounded">
            <h6>Select2</h6>
            <div className="mb-3">
              <label className="form-label">Simple Select</label>
              <select className="form-select">
                <option>Alaska</option>
                <option>Texas</option>
                <option>California</option>
              </select>
            </div>

            <div>
              <label className="form-label">Multiple Select</label>
              <select className="form-select" multiple>
                <option selected>Arizona</option>
                <option>New York</option>
                <option>Washington</option>
              </select>
            </div>
          </div>
        </div>

        {/* Date & Time Picker */}
        <div className="col-md-12 pt-3">
          <div className="p-2 border rounded">
            <h6>Date & Time Pickers</h6>
            <div className="row g-3">
              <div className="col">
                <label className="form-label">Date Picker</label>
                <input type="date" className="form-control" defaultValue="2020-04-24" />
              </div>
              <div className="col">
                <label className="form-label">Time Picker</label>
                <input type="time" className="form-control" />
              </div>
            </div>
          </div>
        </div>

        </div>

         <div className="container mt-4">
      <div className="row g-4">

        {/* Switches */}
        <div className="col-md-6">
          <div className="p-3 border rounded">
            <h6>Switches</h6>
            <div className="form-check form-switch mb-2">
              <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Toggle this switch element</label>
            </div>
            <div className="form-check form-switch">
              <input className="form-check-input" type="checkbox" id="flexSwitchCheckDisabled" disabled />
              <label className="form-check-label" htmlFor="flexSwitchCheckDisabled">Disabled switch element</label>
            </div>
          </div>
        </div>

        {/* Date Range Picker */}
        <div className="col-md-6">
          <div className="p-3 border rounded">
            <h6>Date Range Picker</h6>
            <label className="form-label">Date Range</label>
            <input className="form-control mb-3" type="text" defaultValue="6/25 04:00 PM - 6/27 12:00 AM" />

            <label className="form-label">Predefined Date Ranges</label>
            <div className="form-control d-flex align-items-center">
              <i className="bi bi-calendar me-2"></i>
              May 27, 2025 - June 25, 2025
            </div>
          </div>
        </div>


         <div className="col-md-6 mb-4">
          <div className="card p-3">
            <h5>Input masks</h5>

            <label>Date</label>
            <input type="date" className="form-control mb-2" />

            <label>Month</label>
            <input type="month" className="form-control mb-2" />

            <label>Time</label>
            <input type="time" className="form-control mb-2" />

            <label>Week</label>
            <input type="week" className="form-control mb-2" />

            <label>Number</label>
            <input type="number" className="form-control mb-2" />

            <label>Color</label>
            <input type="color" className="form-control form-control-color mb-2" />
          </div>
        </div>

        {/* === CUSTOM INPUT FIELDS WITH PLACEHOLDERS === */}
        <div className="col-md-6 mb-4">
          <div className="card p-3">
            <h5>Custom input masks</h5>

            <label>Mask placeholder</label>
            <input type="text" className="form-control mb-2" placeholder="__/__/____" />

            <label>Zip code</label>
            <input type="text" className="form-control mb-2" placeholder="___-___" />

            <label>Money</label>
            <input type="text" className="form-control mb-2" placeholder="$0.00" />

            <label>US Telephone</label>
            <input type="text" className="form-control mb-2" placeholder="(987) 654-3210" />

            <label>Mixed mask</label>
            <input type="text" className="form-control mb-2" placeholder="AAA 000-SOS" />

            <label>IP address</label>
            <input type="text" className="form-control mb-2" placeholder="192.168.000.001" />
          </div>
        </div>


      </div>
    </div>


     <div className="card m-1">
      <div className="card-body">
        <h5 className="card-title">Editor</h5>
        <p className="card-text">
          A simple Bootstrap-based rich text editor without extra libraries.
        </p>

        {/* Toolbar */}
        <div className="btn-toolbar mb-2">
          <button className="btn btn-outline-secondary btn-sm me-2" onClick={() => formatText('bold')}>
            <b>B</b>
          </button>
          <button className="btn btn-outline-secondary btn-sm me-2" onClick={() => formatText('italic')}>
            <i>I</i>
          </button>
          <button className="btn btn-outline-secondary btn-sm me-2" onClick={() => formatText('underline')}>
            <u>U</u>
          </button>
          <button className="btn btn-outline-secondary btn-sm me-2" onClick={() => formatText('insertUnorderedList')}>
            • List
          </button>
          <button className="btn btn-outline-secondary btn-sm" onClick={() => formatText('insertOrderedList')}>
            1. List
          </button>
        </div>

        {/* Editable Area */}
        <div
          ref={editorRef}
          className="border p-2"
          contentEditable={true}
          style={{ minHeight: '150px', outline: 'none' }}
        >
          Type your content here...
        </div>
      </div>
    </div>

    

      </div>
    </div>
  </>
    
  )
}

export default AdvancedElements;