import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import "font-awesome/css/font-awesome.min.css";
// import "./YourCustomStyles.css"; // replace with your actual CSS if needed

const Dashboard = () => {
  return (
    <main role="main" className="main-content">
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-12">
            {/* First Row Cards */}
            <div className="row">
              {/* Monthly Sales */}
              <div className="col-md-6 col-xl-3 mb-4">
                <div className="card shadow bg-primary text-white border-0">
                  <div className="card-body">
                    <div className="row align-items-center">
                      <div className="col-3 text-center">
                        <span className="circle circle-sm bg-primary-light">
                          <i className="fe fe-16 fe-shopping-bag text-white mb-0"></i>
                        </span>
                      </div>
                      <div className="col pr-0">
                        <p className="small text-muted mb-0">Monthly Sales</p>
                        <span className="h3 mb-0 text-white">$1250</span>
                        <span className="small text-muted">+5.5%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Orders */}
              <div className="col-md-6 col-xl-3 mb-4">
                <div className="card shadow border-0">
                  <div className="card-body">
                    <div className="row align-items-center">
                      <div className="col-3 text-center">
                        <span className="circle circle-sm bg-primary">
                          <i className="fe fe-16 fe-shopping-cart text-white mb-0"></i>
                        </span>
                      </div>
                      <div className="col pr-0">
                        <p className="small text-muted mb-0">Orders</p>
                        <span className="h3 mb-0">1,869</span>
                        <span className="small text-success">+16.5%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Conversion */}
              <div className="col-md-6 col-xl-3 mb-4">
                <div className="card shadow border-0">
                  <div className="card-body">
                    <div className="row align-items-center">
                      <div className="col-3 text-center">
                        <span className="circle circle-sm bg-primary">
                          <i className="fe fe-16 fe-filter text-white mb-0"></i>
                        </span>
                      </div>
                      <div className="col">
                        <p className="small text-muted mb-0">Conversion</p>
                        <div className="row align-items-center no-gutters">
                          <div className="col-auto">
                            <span className="h3 mr-2 mb-0">86.6%</span>
                          </div>
                          <div className="col-md-12 col-lg">
                            <div className="progress progress-sm mt-2" style={{ height: "3px" }}>
                              <div className="progress-bar bg-success" role="progressbar" style={{ width: "87%" }}></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* AVG Orders */}
              <div className="col-md-6 col-xl-3 mb-4">
                <div className="card shadow border-0">
                  <div className="card-body">
                    <div className="row align-items-center">
                      <div className="col-3 text-center">
                        <span className="circle circle-sm bg-primary">
                          <i className="fe fe-16 fe-activity text-white mb-0"></i>
                        </span>
                      </div>
                      <div className="col">
                        <p className="small text-muted mb-0">AVG Orders</p>
                        <span className="h3 mb-0">$80</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Filter Row */}
            <div className="row align-items-center my-2">
              <div className="col-auto ml-auto">
                <form className="form-inline">
                  <div className="form-group">
                    <label htmlFor="reportrange" className="sr-only">Date Ranges</label>
                    <div id="reportrange" className="px-2 py-2 text-muted">
                      <i className="fe fe-calendar fe-16 mx-2"></i>
                      <span className="small"></span>
                    </div>
                  </div>
                  <div className="form-group">
                    <button type="button" className="btn btn-sm">
                      <span className="fe fe-refresh-ccw fe-12 text-muted"></span>
                    </button>
                    <button type="button" className="btn btn-sm">
                      <span className="fe fe-filter fe-12 text-muted"></span>
                    </button>
                  </div>
                </form>
              </div>
            </div>

            {/* Chart Section */}
            <div className="row my-4">
              <div className="col-md-12">
                <div className="chart-box">
                  <div id="columnChart"></div>
                </div>
              </div>
            </div>

            {/* Info Cards Row 1 */}
            <div className="row">
              {/* First info card */}
              <div className="col-md-4">
                <div className="card shadow mb-4">
                  <div className="card-body">
                    <div className="chart-widget">
                      <div id="gradientRadial"></div>
                    </div>
                    <div className="row text-center">
                      <div className="col-6">
                        <p className="text-muted mb-0">Yesterday</p>
                        <h4 className="mb-1">126</h4>
                        <p className="text-muted mb-2">+5.5%</p>
                      </div>
                      <div className="col-6">
                        <p className="text-muted mb-0">Today</p>
                        <h4 className="mb-1">86</h4>
                        <p className="text-muted mb-2">-5.5%</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Second info card */}
              <div className="col-md-4">
                <div className="card shadow mb-4">
                  <div className="card-body">
                    <div className="chart-widget mb-2">
                      <div id="radialbar"></div>
                    </div>
                    <div className="row text-center">
                      <div className="col-4">
                        <p className="text-muted mb-1">Cost</p>
                        <h6 className="mb-1">$1,823</h6>
                        <p className="text-muted mb-0">+12%</p>
                      </div>
                      <div className="col-4">
                        <p className="text-muted mb-1">Revenue</p>
                        <h6 className="mb-1">$6,830</h6>
                        <p className="text-muted mb-0">+8%</p>
                      </div>
                      <div className="col-4">
                        <p className="text-muted mb-1">Earning</p>
                        <h6 className="mb-1">$4,830</h6>
                        <p className="text-muted mb-0">+8%</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Third info card */}
              <div className="col-md-4">
                <div className="card shadow mb-4">
                  <div className="card-body">
                    <p className="mb-0">
                      <strong className="text-uppercase text-muted">Today</strong>
                    </p>
                    <h3 className="mb-0">$2,562.30</h3>
                    <p className="text-muted">+18.9% Last week</p>
                    <div className="chart-box mt-n5">
                      <div id="lineChartWidget"></div>
                    </div>
                    <div className="row text-center mt-3">
                      <div className="col-4">
                        <p className="mb-1 text-muted">Completions</p>
                        <h6 className="mb-0">26</h6>
                        <span className="small text-muted">+20%</span>
                        <span className="fe fe-arrow-up text-success fe-12"></span>
                      </div>
                      <div className="col-4">
                        <p className="mb-1 text-muted">Goal Value</p>
                        <h6 className="mb-0">$260</h6>
                        <span className="small text-muted">+6%</span>
                        <span className="fe fe-arrow-up text-success fe-12"></span>
                      </div>
                      <div className="col-4">
                        <p className="mb-1 text-muted">Conversion</p>
                        <h6 className="mb-0">6%</h6>
                        <span className="small text-muted">-2%</span>
                        <span className="fe fe-arrow-down text-danger fe-12"></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Add remaining Region and Product components similarly */}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
