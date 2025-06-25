import React from 'react'
 const BasicElements = () => {
  return (<>
    <div className="container mt-5">
      <h2>Form elements</h2>
      <p className="text-muted">
        Demo for form control styles, layout options, and custom components for creating a wide variety of forms.
      </p>

      <div className="card">
        <div className="card-header">
          <strong>Form controls</strong>
        </div>
        <div className="card-body">
          <div className="row g-3">
            <div className="col-md-6">
              <label className="form-label">Text</label>
              <input type="text" className="form-control" />

              <label className="form-label mt-3">Email</label>
              <input type="email" className="form-control" placeholder="Email" />

              <label className="form-label mt-3">Password</label>
              <input type="password" className="form-control" />

              <label className="form-label mt-3">Placeholder</label>
              <input type="text" className="form-control" placeholder="placeholder" />
            </div>

            <div className="col-md-6">
              <label className="form-label">Helping text</label>
              <input type="text" className="form-control" placeholder="Input with helping text" />
              <small className="text-muted">A block of help text that breaks onto a new line.</small>

              <label className="form-label mt-3">Readonly</label>
              <input type="text" className="form-control" value="Readonly value" readOnly />

              <label className="form-label mt-3">Disabled</label>
              <input type="text" className="form-control" value="Disabled value" disabled />

              <label className="form-label mt-3">Static control</label>
              <p className="form-control-plaintext">j@example.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>

     <div className="container mt-4">
      <div className="row g-4">
        {/* Text Area */}
        <div className="col-md-6">
          <div className="card p-3">
            <label className="form-label">Text area</label>
            <textarea className="form-control" rows="4"></textarea>
          </div>
        </div>

        {/* File Inputs */}
        <div className="col-md-6">
          <div className="card p-3">
            <label className="form-label">Default file input</label>
            <input type="file" className="form-control mb-3" />
            
            <label className="form-label">Custom file input</label>
            <input type="file" className="form-control" />
          </div>
        </div>

        {/* Input Select and Multiple Select */}
        <div className="col-md-6">
          <div className="card p-3">
            <label className="form-label">Input Select</label>
            <select className="form-select mb-3" defaultValue="3">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>

            <label className="form-label">Multiple Select</label>
            <select className="form-select" multiple size="5">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>
        </div>

        {/* Custom Selects */}
        <div className="col-md-6">
          <div className="card p-3">
            <label className="form-label">Custom Select</label>
            <select className="form-select mb-3">
              <option>Open this select menu</option>
              <option>Option 1</option>
              <option>Option 2</option>
              <option>Option 3</option>
              <option>Option 4</option>
              <option>Option 5</option>
              <option>Option 6</option>
            </select>

            <label className="form-label">Custom Multiple Select</label>
            <select className="form-select" multiple size="4">
              <option>Open this select menu</option>
              <option>One</option>
              <option>Two</option>
              <option>Three</option>
            </select>
          </div>
        </div>
      </div>
    </div>



     <div className="container mt-4">
      <div className="row g-4">
        {/* Checkboxes */}
        <div className="col-md-6">
          <div className="p-3 border rounded">
            <h6>Checkboxes</h6>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="defaultCheck1" />
              <label className="form-check-label" htmlFor="defaultCheck1">
                Default checkbox
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="defaultCheck2" disabled />
              <label className="form-check-label" htmlFor="defaultCheck2">
                Disabled checkbox
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="checkbox" id="inlineCheck1" />
              <label className="form-check-label" htmlFor="inlineCheck1">1</label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="checkbox" id="inlineCheck2" />
              <label className="form-check-label" htmlFor="inlineCheck2">2</label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="checkbox" id="inlineCheck3" disabled />
              <label className="form-check-label" htmlFor="inlineCheck3">3 (disabled)</label>
            </div>
          </div>
        </div>

        {/* Custom checkboxes */}
        <div className="col-md-6">
          <div className="p-3 border rounded">
            <h6>Custom checkboxes</h6>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="customCheck1" />
              <label className="form-check-label" htmlFor="customCheck1">
                Check this first custom checkbox
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="customCheck2" />
              <label className="form-check-label" htmlFor="customCheck2">
                Check this secondary custom checkbox
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="customCheck3" checked readOnly disabled />
              <label className="form-check-label" htmlFor="customCheck3">
                Disabled custom checkbox
              </label>
            </div>
          </div>
        </div>

        {/* Default radio */}
        <div className="col-md-6">
          <div className="p-3 border rounded">
            <h6>Default radio</h6>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="defaultRadio" id="defaultRadio1" defaultChecked />
              <label className="form-check-label" htmlFor="defaultRadio1">
                This is default radio
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="defaultRadio" id="defaultRadio2" disabled />
              <label className="form-check-label" htmlFor="defaultRadio2">
                Disabled radio
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="inlineRadio" id="inlineRadio1" />
              <label className="form-check-label" htmlFor="inlineRadio1">1</label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="inlineRadio" id="inlineRadio2" />
              <label className="form-check-label" htmlFor="inlineRadio2">2</label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="inlineRadio" id="inlineRadio3" disabled />
              <label className="form-check-label" htmlFor="inlineRadio3">3 (disabled)</label>
            </div>
          </div>
        </div>

        {/* Custom radios */}
        <div className="col-md-6">
          <div className="p-3 border rounded">
            <h6>Custom Radios</h6>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="customRadio" id="customRadio1" />
              <label className="form-check-label" htmlFor="customRadio1">
                Toggle this custom radio
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="customRadio" id="customRadio2" defaultChecked />
              <label className="form-check-label" htmlFor="customRadio2">
                Or toggle this other custom radio
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="customRadio" id="customRadio3" disabled />
              <label className="form-check-label" htmlFor="customRadio3">
                Disabled this custom radio
              </label>
            </div>
          </div>
        </div>

        {/* Input Sizing */}
        <div className="col-12">
          <div className="p-3 border rounded">
            <h6>Sizing</h6>
            <input className="form-control form-control-lg mb-2" type="text" placeholder=".form-control-lg" />
            <input className="form-control mb-2" type="text" placeholder="Default input" />
            <input className="form-control form-control-sm" type="text" placeholder=".form-control-sm" />
          </div>
        </div>
      </div>
    </div>
  </>)
}

export default BasicElements;