import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Typography = () => {
  return (<>
    <div className="container my-4">
      <h5>Typography</h5>
      <p className="text-muted">
        This primitive is meant to make it easy to display both user-centric or activity-centric actions in your app...
      </p>

      <div className="row g-4">
        {/* Left: Heading */}
        <div className="col-md-6 ">
          <div className="border rounded p-4 bg-white ">
            <h6 className="border-bottom pb-5 ">Heading</h6>
            <h1>h1. Bootstrap heading</h1>
            <h2>h2. Bootstrap heading</h2>
            <h3>h3. Bootstrap heading</h3>
            <h4>h4. Bootstrap heading</h4>
            <h5>h5. Bootstrap heading</h5>
            <h6>h6. Bootstrap heading</h6>
          </div>
        </div>

        {/* Right: Inline Text Elements */}
        <div className="col-md-6">
          <div className="border rounded p-3 bg-white">
            <h6 className="border-bottom pb-2">Inline text elements</h6>
            <p>You can use the <mark>mark</mark> tag to highlight text.</p>
            <p><del>This line of text is meant to be treated as deleted text.</del></p>
            <p><s>This line of text is meant to be treated as no longer accurate.</s></p>
            <p><ins>This line of text is meant to be treated as an addition to the document.</ins></p>
            <p><u>This line of text will render as underlined.</u></p>
            <p><small>This line of text is meant to be treated as fine print.</small></p>
            <p><strong>This line rendered as bold text.</strong></p>
            <p><em>This line rendered as italicized text.</em></p>
          </div>
        </div>
      </div>
    </div>
      <div className="container mt-4">
      <div className="card shadow-sm">
        <div className="card-header fw-bold">
          Paragraph
        </div>
        <div className="card-body text-secondary">
          <p>
            Lorem ipsum dolor sit amet, te dolores sapientem eos, nonumy civibus volutpat an vis.
            Vis vide definitiones mediocritatem te. Ad erant aperiri sit, eu eum alii tempor,
            stet evertitur assentior ei est. Omnis fuisset antiopam eu eum.
          </p>
          <p>
            Ex tale mutat duo, nostro propriae ei cum, modo fabellas nominati in eos. Bonorum
            deleniti percipitur sit ad, in pri prima meliore euripidis. Ne ancillae apeirian eam.
            Tollit virtute conceptam in eos. Qui quaeque delectus maluisset no, id nulla partem
            erroribus sed.
          </p>
          <p>
            Sea ut stet maluisset, an denique adolescens eam, vim ancillae mediocrem ad. Te quot
            virtute sea, vero blandit usu no. Dico utinam vituperata nam ad, ne est autem similique
            dissentiunt. Eum ne natum tempor cetero. Sit vero vocent interesset ea.
          </p>
        </div>
      </div>
    </div>

     <div className="container mt-4">
      {/* Top Blockquote and Lead */}
      <div className="row mb-4">
        <div className="col-md-6">
          <h6 className="fw-bold">Blockquote</h6>
          <blockquote className="blockquote">
            <p className="mb-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.
            </p>
            <footer className="blockquote-footer mt-1">
              Someone famous in <cite title="Source Title">Source Title</cite>
            </footer>
          </blockquote>
        </div>
        <div className="col-md-6">
          <h6 className="fw-bold">Lead text</h6>
          <p className="lead">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.
          </p>
        </div>
      </div>

      {/* Cards with Lists */}
      <div className="row">
        {/* Unordered List */}
        <div className="col-md-4 mb-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header fw-bold">Unordered List</div>
            <div className="card-body">
              <ul>
                <li>Lorem ipsum dolor sit amet</li>
                <li>Consectetur adipiscing elit</li>
                <li>Integer molestie lorem at massa</li>
                <li>Facilisis in pretium nisl aliquet</li>
                <li>
                  Nulla volutpat aliquam velit
                  <ul>
                    <li>Phasellus iaculis neque</li>
                    <li>Purus sodales ultricies</li>
                    <li>Vestibulum laoreet porttitor sem</li>
                    <li>Ac tristique libero volutpat at</li>
                  </ul>
                </li>
                <li>Faucibus porta lacus fringilla vel</li>
                <li>Aenean sit amet erat nunc</li>
                <li>Eget porttitor lorem</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Ordered List */}
        <div className="col-md-4 mb-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header fw-bold">Ordered List</div>
            <div className="card-body">
              <ol>
                <li>Lorem ipsum dolor sit amet</li>
                <li>Consectetur adipiscing elit</li>
                <li>Integer molestie lorem at massa</li>
                <li>Facilisis in pretium nisl aliquet</li>
                <li>
                  Nulla volutpat aliquam velit
                  <ol>
                    <li>Phasellus iaculis neque</li>
                    <li>Purus sodales ultricies</li>
                    <li>Vestibulum laoreet porttitor sem</li>
                    <li>Ac tristique libero volutpat at</li>
                  </ol>
                </li>
                <li>Faucibus porta lacus fringilla vel</li>
                <li>Aenean sit amet erat nunc</li>
                <li>Eget porttitor lorem</li>
              </ol>
            </div>
          </div>
        </div>

        {/* Unstyled List */}
        <div className="col-md-4 mb-4">
          <div className="card h-100 shadow-sm">
            <div className="card-header fw-bold">Unstyled Lists</div>
            <div className="card-body">
              <ul className="list-unstyled">
                <li>Lorem ipsum dolor sit amet</li>
                <li>Consectetur adipiscing elit</li>
                <li>Integer molestie lorem at massa</li>
                <li>Facilisis in pretium nisl aliquet</li>
                <li>
                  Nulla volutpat aliquam velit
                  <ul>
                    <li>Phasellus iaculis neque</li>
                    <li>Purus sodales ultricies</li>
                    <li>Vestibulum laoreet porttitor sem</li>
                    <li>Ac tristique libero volutpat at</li>
                  </ul>
                </li>
                <li>Faucibus porta lacus fringilla vel</li>
                <li>Aenean sit amet erat nunc</li>
                <li>Eget porttitor lorem</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Typography;
