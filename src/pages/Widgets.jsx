import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Card, ProgressBar, Image } from "react-bootstrap";
import { FaClipboardCheck, FaShoppingCart, FaFilter, FaChartLine } from "react-icons/fa";
import { Dropdown } from "react-bootstrap";
import { ThreeDotsVertical } from "react-bootstrap-icons";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { PieChart, Pie, Cell, ResponsiveContainer, LineChart, Line, BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";

import "react-circular-progressbar/dist/styles.css";

import {
  Radar, RadarChart, PolarGrid,
  PolarAngleAxis, PolarRadiusAxis
} from "recharts";






const InfoCard = ({ title, value, icon, subtext, highlight, progress }) => (
  <Card className="border-0 shadow-sm">
    <Card.Body className="d-flex align-items-center gap-3">
      <div className="rounded-circle bg-primary bg-opacity-10 p-3 text-primary fs-5">
        {icon}
      </div>
      <div className="flex-grow-1">
        <div className="text-muted small mb-1">{title}</div>
        <div className="fw-bold fs-5 d-flex align-items-center gap-2">
          {value} {subtext && <small className={highlight}>{subtext}</small>}
        </div>
        {progress !== undefined && (
          <ProgressBar
            now={progress}
            style={{ height: "4px", marginTop: "4px" }}
            variant="success"
          />
        )}
      </div>
    </Card.Body>
  </Card>
);

const Widgets = () => {
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884d8"];
  const metrics = [
  { title: "$1.2K", subtitle: "Monthly Sales", change: "+15.5%", color: "success" },
  { title: "1K+", subtitle: "Orders", change: "+16.5%", color: "success" },
  { title: "186", subtitle: "Customers", change: "+1.5%", color: "warning" },
  { title: "108", subtitle: "Visitors", change: "+37.7%", color: "success" },
  { title: "1168", subtitle: "Page Views", change: "-18.9%", color: "danger" },
  { title: "68", subtitle: "Conversion", change: "+1.9%", color: "primary" },
];

const pieData = [
    { name: "Cloud Server", value: 31.9 },
    { name: "CDN", value: 24.9 },
    { name: "Databases", value: 11.3 },
    { name: "Other", value: 23.2 },
    { name: "Extra", value: 9.6 },
  ];

  const lineData = [
    { name: 'Mon', uv: 300, pv: 240 },
    { name: 'Tue', uv: 400, pv: 260 },
    { name: 'Wed', uv: 350, pv: 300 },
    { name: 'Thu', uv: 500, pv: 450 },
    { name: 'Fri', uv: 450, pv: 420 },
    { name: 'Sat', uv: 550, pv: 480 },
    { name: 'Sun', uv: 600, pv: 500 },
  ];

  const barData = [
    { name: "Item 1", cost: 40, revenue: 70 },
    { name: "Item 2", cost: 30, revenue: 50 },
    { name: "Item 3", cost: 60, revenue: 100 },
  ];
  const data = [
  { name: "1", uv: 400, pv: 240 },
  { name: "2", uv: 300, pv: 139 },
  { name: "3", uv: 200, pv: 980 },
  { name: "4", uv: 278, pv: 390 },
  { name: "5", uv: 189, pv: 480 },
  { name: "6", uv: 239, pv: 380 },
  { name: "7", uv: 349, pv: 430 },
  { name: "8", uv: 200, pv: 500 },
];


const stats = [
  { label: 'Direct', value: 218, change: '+10%', color: '#00c9a7' },
  { label: 'Organic Search', value: 1002, change: '+0.6%', color: '#ffcc00' },
  { label: 'Referral', value: 67, change: '+1.6%', color: '#4d79ff' },
  { label: 'Social', value: 386, change: '+118%', color: '#444' },
];

 const mydata = [
    { country: "France", value: 118, change: "+10%" },
    { country: "Netherlands", value: 1008, change: "+0.6%" },
    { country: "Italy", value: 67, change: "+1.6%" },
    { country: "Spain", value: 186, change: "+118%" },
  ];

  const percentage = 86;

  const newdata = [
  { subject: "01", A: 80, B: 60, C: 40 },
  { subject: "02", A: 90, B: 70, C: 50 },
  { subject: "03", A: 60, B: 110, C: 70 },
  { subject: "04", A: 50, B: 80, C: 90 },
  { subject: "05", A: 95, B: 40, C: 50 },
  { subject: "06", A: 70, B: 85, C: 30 },
];

const strong = [
  { name: "Desktop", value: 1086 },
  { name: "Tablet", value: 175 },
  { name: "Mobile", value: 126 },
];

 const NEWCOLORS = ["#007bff", "#28c76f", "#6f42c1"]; // Blue, Green, Purple


 



  return (<>
    <Container className="my-4">
      <h5 className="fw-semibold">Info Widgets</h5>
      <p className="text-muted" style={{ maxWidth: 600 }}>
        This primitive is meant to make it easy to display both user-centric or activity-centric actions in your app.
        Sometimes it makes sense to even blend both in a single timeline, which works perfectly.
      </p>

      <Row className="g-3">
        <Col md={3}>
          <Card className="border-0 text-white" style={{ backgroundColor: '#1e50ff' }}>
            <Card.Body className="d-flex align-items-center gap-3">
              <div className="rounded-circle bg-white bg-opacity-10 p-3 text-white fs-5">
                <FaClipboardCheck />
              </div>
              <div className="flex-grow-1">
                <div className="small">Monthly Sales</div>
                <div className="fw-bold fs-4">$1250 <small>+5.5%</small></div>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col md={3}>
          <InfoCard
            title="Orders"
            value="1,869"
            icon={<FaShoppingCart />}
            subtext="+16.5%"
            highlight="text-success"
          />
        </Col>

        <Col md={3}>
          <InfoCard
            title="Conversion"
            value="86.6%"
            icon={<FaFilter />}
            progress={86.6}
          />
        </Col>

        <Col md={3}>
          <InfoCard
            title="AVG Orders"
            value="$80"
            icon={<FaChartLine />}
          />
        </Col>
      </Row>
    </Container>

     <div className="container mt-4">
      
      <div className="row g-3">
        {metrics.map((item, index) => (
          <div className="col-md-4" key={index}>
            <div className="card shadow-sm">
              <div className="card-body">
                <h4>{item.title}</h4>
                <p className="text-muted mb-2">{item.subtitle}</p>
                <span className={`badge bg-${item.color}`}>{item.change}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

     <div className="container mt-4">
      <div className="row g-4">

        {/* Today Card */}
        <div className="col-md-3">
          <div className="card shadow-sm position-relative">
            <div className="card-body">
              <div className="d-flex justify-content-between">
                <h6 className="text-muted">Today</h6>
                <Dropdown align="end">
                  <Dropdown.Toggle variant="link" bsPrefix="p-0 border-0 bg-transparent">
                    <ThreeDotsVertical />
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item>Details</Dropdown.Item>
                    <Dropdown.Item>Refresh</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
              <h3 className="fw-bold">120</h3>
              <small className="text-success">+20%</small>{" "}
              <small className="text-muted">last week</small>
            </div>
          </div>
        </div>

        {/* Yesterday Card */}
        <div className="col-md-3">
          <div className="card shadow-sm">
            <div className="card-body">
              <div className="d-flex justify-content-between">
                <h6 className="text-muted">Yesterday</h6>
                <span className="text-muted small">+1.8%</span>
              </div>
              <h3 className="fw-bold">2068</h3>
              <div className="d-flex justify-content-between align-items-end mt-2" style={{ height: "30px" }}>
                {[4, 6, 8, 5, 9].map((val, idx) => (
                  <div
                    key={idx}
                    style={{
                      width: "6px",
                      height: `${val * 3}px`,
                      backgroundColor: "#0d6efd",
                    }}
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CPU Usage Card */}
        <div className="col-md-3">
          <div className="card shadow-sm text-center">
            <div className="card-body">
              <div style={{ width: 60, height: 60, margin: "0 auto" }}>
                <CircularProgressbar
                  value={15}
                  text={`15%`}
                  styles={buildStyles({
                    pathColor: "#28a745",
                    textColor: "#212529",
                    trailColor: "#e9ecef",
                    textSize: "24px"
                  })}
                />
              </div>
              <p className="text-muted mt-2 mb-0">Cpu Usage</p>
            </div>
          </div>
        </div>

        {/* RAM Usage Card */}
        <div className="col-md-3">
          <div className="card shadow-sm text-center">
            <div className="card-body">
              <div style={{ width: 60, height: 60, margin: "0 auto" }}>
                <CircularProgressbar
                  value={65}
                  text={`65%`}
                  styles={buildStyles({
                    pathColor: "#0d6efd",
                    textColor: "#212529",
                    trailColor: "#e9ecef",
                    textSize: "24px"
                  })}
                />
              </div>
              <p className="text-muted mt-2 mb-0">Ram Usage</p>
            </div>
          </div>
        </div>

      </div>
    </div>


    {/* second Cards  */}
     <div className="container mt-4">

       <h5 className="fw-semibold">Cards</h5>
      <p className="text-muted" style={{ maxWidth: 600 }}>
       This primitive is meant to make it easy to display both user-centric or activity-centric actions in your app. Sometimes it makes sense to even blend both in a single timeline, which works perfectly.
      </p>
      <Row className="g-4">
        <Col md={4}>
          <Card className="p-5 text-center h-100">
            <h6>Real time</h6>
            <h3>1,254</h3>
            <span className="text-success">+2%</span>
            <div className="mt-3">
              <div className="d-flex justify-content-between small">
                <span className="text-danger">High</span>
                <span className="text-warning">Medium</span>
                <span className="text-success">Low</span>
              </div>
              <ProgressBar>
                <ProgressBar striped variant="danger" now={15} key={1} />
                <ProgressBar striped variant="warning" now={30} key={2} />
                <ProgressBar striped variant="success" now={20} key={3} />
              </ProgressBar>
            </div>
          </Card>
        </Col>

        <Col md={4}>
          <Card className="p-5 text-center">
            <h6>TODAY</h6>
            <h3>$2,562.30</h3>
            <span className="text-success">+18.9% Last week</span>
            <ResponsiveContainer width="100%" height={100}>
              <LineChart data={lineData}>
                <Line type="monotone" dataKey="uv" stroke="#8884d8" strokeWidth={2} />
                <Line type="monotone" dataKey="pv" stroke="#82ca9d" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
            <div className="d-flex justify-content-between">
              <div>
                <small>Completions</small>
                <div>26 <span className="text-success">+20%</span></div>
              </div>
              <div>
                <small>Goal Value</small>
                <div>$260 <span className="text-success">+6%</span></div>
              </div>
              <div>
                <small>Conversion</small>
                <div>6% <span className="text-danger">-2%</span></div>
              </div>
            </div>
          </Card>
        </Col>

        <Col md={4}>
          <Card className="p-3 h-100 text-center">
            <h6>Services</h6>
            <ResponsiveContainer width="100%" height={150}>
              <PieChart>
                <Pie
                  data={pieData}
                  dataKey="value"
                  nameKey="name"
                  innerRadius={40}
                  outerRadius={60}
                  fill="#8884d8"
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={NEWCOLORS[index % NEWCOLORS.length]} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <ul className="list-unstyled">
              <li>Cloud Server <span className="text-primary">+85%</span></li>
              <li>CDN <span className="text-primary">+75%</span></li>
              <li>Databases <span className="text-primary">+62%</span></li>
            </ul>
          </Card>
        </Col>

        <Col md={4}>
          <Card className="p-5 text-center h-100">
            <div style={{ width: 100, margin: "0 auto" }}>
              <CircularProgressbar
                value={75}
                text={`75%`}
                styles={buildStyles({ pathColor: "#007bff", textColor: "#333" })}
              />
            </div>
            <div className="mt-3 d-flex justify-content-between">
              <div>Yesterday <strong>126</strong> <span className="text-success">+5.5%</span></div>
              <div>Today <strong>86</strong> <span className="text-danger">-5.5%</span></div>
            </div>
          </Card>
        </Col>

        <Col md={4}>
          <Card className="p-5 h-100 text-center">
            <h6>Total</h6>
            <h3>108</h3>
            <span className="text-success">+3.77%</span>
            <ResponsiveContainer width="100%" height={100}>
              <BarChart layout="vertical" data={barData}>
                <XAxis type="number" hide />
                <Bar dataKey="cost" stackId="a" fill="#8884d8" />
                <Bar dataKey="revenue" stackId="a" fill="#82ca9d" />
              </BarChart>
            </ResponsiveContainer>
            <div className="d-flex justify-content-between">
              <div>Cost <strong>108</strong> <span className="text-success">+3.77%</span></div>
              <div>Revenue <strong>1168</strong> <span className="text-danger">-18.9%</span></div>
            </div>
          </Card>
        </Col>

      <Col className="container mt-4">
      <Card className="card shadow-sm p-4">
        <ResponsiveContainer width="100%" height={100}>
          <BarChart data={data}>
            <XAxis dataKey="name" hide />
            <YAxis hide />
            <Tooltip />
            <Bar dataKey="uv" fill="#007bff" barSize={10} radius={5} />
            <Bar dataKey="pv" fill="#17c671" barSize={10} radius={5} />
          </BarChart>
        </ResponsiveContainer>

        <div className="row text-center mt-4">
          <div className="col-6">
            <p className="mb-1 text-muted">Total</p>
            <h5 className="mb-0 text-primary">830</h5>
            <small className="text-success">+5.5%</small>
          </div>
          <div className="col-6">
            <p className="mb-1 text-muted">Target</p>
            <h5 className="mb-0 text-dark">4,830</h5>
            <small className="text-danger">-5.5%</small>
          </div>
          <div className="col-6 mt-3">
            <p className="mb-1 text-muted">Total</p>
            <h5 className="mb-0 text-primary">680</h5>
            <small className="text-success">+5.5%</small>
          </div>
          <div className="col-6 mt-3">
            <p className="mb-1 text-muted">Target</p>
            <h5 className="mb-0 text-dark">430</h5>
            <small className="text-danger">-5.5%</small>
          </div>
        </div>
      </Card>
    </Col>

     <Col className="container mt-4">
      <Card className="card shadow-sm p-4" style={{ width:331, margin: 'auto', height:392 }}>
        <div className="d-flex justify-content-center">
          <div style={{ width: 120, height:200 }}>
            <CircularProgressbar
              value={70}
              text="70%"
              styles={buildStyles({
                textColor: '#333',
                pathColor: '#007bff',
                trailColor: '#e9ecef',
                textSize: '18px',
                strokeLinecap: 'round',
              })}
            />
          </div>
        </div>

        <div className="mt-4 " >
          <Row className="text-center">
            <Col>
              <div style={{ fontSize: '0.85rem', color: '#6c757d' }}>Cost</div>
              <strong>$1,823</strong>
              <div className="text-muted">+12%</div>
            </Col>
            <Col>
              <div style={{ fontSize: '0.85rem', color: '#6c757d' }}>Revenue</div>
              <strong>$6,830</strong>
              <div className="text-muted">+8%</div>
            </Col>
            <Col>
              <div style={{ fontSize: '0.85rem', color: '#6c757d' }}>Earning</div>
              <strong>$4,830</strong>
              <div className="text-muted">+8%</div>
            </Col>
          </Row>
        </div>

        
      </Card>
      </Col>
      

      <Col className="container mt-4">
 <Card className="card shadow-sm p-2"style={{ width:331, margin: 'auto', height:392 }} >
      {/* Replace this with real multi-ring chart or animated SVG if needed */}
      <div className="d-flex justify-content-center " >
        <img src="./src/assets/Direct.png" alt="Chart" />
      </div>

      {stats.map((s, i) => (
        <Row key={i} className="align-items-center mb-1">
          <Col xs={6}>
            <div style={{ fontSize: '0.9rem' }}>{s.label}</div>
            <div className="text-muted" style={{ fontSize: '0.8rem' }}>{s.change}</div>
          </Col>
          <Col xs={4} className="text-end fw-bold">{s.value}</Col>
          <Col xs={2}>
            <span style={{
              width: 10, height: 10, borderRadius: '50%',
              backgroundColor: s.color, display: 'inline-block'
            }}></span>
          </Col>
        </Row>
      ))}
    </Card>
    </Col>

<Col className="container mt-4">
     <Card className="card shadow-sm p-4" style={{ width:331, height:392}}>
      <h6 className="fw-bold mb-3">Region</h6>

      {/* Inline SVG Map */}
      <div  style={{ width: '75%' }}>
        <div className="d-flex justify-content-center  ms-5 ">

       <img src="./src/assets/maps_logo.png" alt="" className="overflow-hidden  " />
        </div>
        
          <g fill="#d6d6d6" stroke="#fff" strokeWidth="1">
            {/* Example states — highlight selected in blue */}
            <path d="M100,300 L150,300 L150,350 L100,350 Z" fill="#007bff" /> {/* CA */}
            <path d="M250,300 L300,300 L300,350 L250,350 Z" fill="#007bff" /> {/* TX */}
            <path d="M400,200 L450,200 L450,250 L400,250 Z" fill="#007bff" /> {/* NY */}
            <path d="M320,250 L360,250 L360,300 L320,300 Z" fill="#007bff" /> {/* CO */}
            {/* Add more <path> elements or replace this with real US map SVG paths */}
          </g>
       
      </div>

      {/* Country Stats */}
      {mydata.map((item, idx) => (
        <Row key={idx} className="align-items-center mb-1">
          <Col xs={6}>
            <div style={{ fontSize: '0.9rem' }}>{item.country}</div>
            <div className="text-muted" style={{ fontSize: '0.8rem' }}>{item.change}</div>
          </Col>
          <Col xs={3} className="fw-bold">{item.value}</Col>
          <Col xs={3}>
            <div style={{
              width: 30,
              height: 4,
              backgroundColor: '#007bff',
              borderRadius: 2
            }} />
          </Col>
        </Row>
      ))}
    </Card>
    </Col>

<Col className="container mt-4">
 <Card className="card shadow-sm p-4 h-100 ">
      <div className="row">
        <div className="col-7">
          <h6 className="text-muted">EARNING</h6>
          <h3 className="fw-bold text-dark">$2,562</h3>
          <p className="text-muted small">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <div className="col-5 d-flex align-items-center justify-content-center">
          <div style={{ width: 60, height: 60 }}>
            <CircularProgressbar
              value={percentage}
              text={`${percentage}`}
              styles={buildStyles({
                pathColor: "#007bff",
                textColor: "#333",
                trailColor: "#f0f0f0",
                textSize: "24px",
              })}
            />
          </div>
        </div>
      </div>
      <hr />
      <div className="row text-center">
        <div className="col">
          <div className="fw-bold">108</div>
          <div className="text-muted small">Cost</div>
          <div className="text-primary small">37.7% Last week</div>
        </div>
        <div className="col">
          <div className="fw-bold">1168</div>
          <div className="text-muted small">Revenue</div>
          <div className="text-danger small">-18.9% Last week</div>
        </div>
      </div>
    </Card>
    </Col>

<Col className="container mt-4">
 <Card className="card shadow-sm p-3 ">
      <h6 className="mb-3">Browsers</h6>
      <div className="d-flex justify-content-center">
        <RadarChart outerRadius={90} width={250} height={200} data={newdata}>
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" />
          <PolarRadiusAxis angle={30} domain={[0, 120]} />
          <Radar name="Chrome" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
          <Radar name="Firefox" dataKey="B" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
          <Radar name="Edge" dataKey="C" stroke="#ffc658" fill="#ffc658" fillOpacity={0.6} />
        </RadarChart>
      </div>
      <div className="row text-center mt-3">
        {[
          { name: "Safari", value: 118, change: "+10%" },
          { name: "Chrome", value: 1008, change: "+36%" },
          { name: "Opera", value: 67, change: "+1.6%" },
          { name: "Edge", value: 186, change: "+118%" },
        ].map((browser, idx) => (
          <div className="col-6 mb-3" key={idx}>
            <div className="fw-bold">{browser.name}</div>
            <div className="text-primary">{browser.value}</div>
            <div className="text-muted small">{browser.change}</div>
            <div className="progress" style={{ height: "4px" }}>
              <div
                className="progress-bar bg-primary"
                role="progressbar"
                style={{ width: `${Math.min(browser.value / 10, 100)}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </Card>
</Col>

<Col className="container mt-4">
  <Card className="p-3 shadow-sm sm-3 h-100">
      <h5>Devices</h5>
      <PieChart width={220} height={220}>
       
        <Pie
          data={strong}
          cx="50%"
          cy="50%"
          innerRadius={50}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
          label={({ percent }) => `${(percent * 100).toFixed(1)}%`}
        >
          {strong.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index]} />
          ))}
        </Pie>
        
        <Tooltip />
      </PieChart>

      <div className="d-flex justify-content-around mt-3">
        <div className="text-center">
          <i className="bi bi-display" style={{ fontSize: "1.5rem" }}></i>
          <div><strong>1086</strong></div>
          <small className="text-success">+68%</small>
        </div>
        <div className="text-center">
          <i className="bi bi-tablet" style={{ fontSize: "1.5rem" }}></i>
          <div><strong>175</strong></div>
          <small className="text-success">+18%</small>
        </div>
        <div className="text-center">
          <i className="bi bi-phone" style={{ fontSize: "1.5rem" }}></i>
          <div><strong>126</strong></div>
          <small className="text-danger">-8%</small>
        </div>
      </div>
    </Card>
</Col>

    

    
      </Row>

        <Container className="mt-5">
      <h5>Timeline & Activity</h5>
      <p className="text-muted">
        This primitive is meant to make it easy to display both user-centric or activity-centric actions in your app.
      </p>
      <Row>
        {/* Recent Activity */}
        <Col md={6}>
          <Card className="mb-3">
            <Card.Header className="d-flex justify-content-between">
              <span>Recent Activity</span>
              <a href="#">View all</a>
            </Card.Header>
            <Card.Body>
              <div className="d-flex mb-3 ">
                <Image src="https://i.pravatar.cc/40?img=1" roundedCircle className="me-3" style={{height:"70px", width:"70px"}} />
                <div>
                  <strong>Brown, Asher</strong>
                  <div className="text-muted small">Just create new layout Index, form, table</div>
                  <div className="text-muted small">1h ago</div>
                </div>
              </div>
              <div className="d-flex mb-3">
                <Image src="https://i.pravatar.cc/40?img=2" roundedCircle className="me-3" style={{height:"70px", width:"70px"}} />
                <div>
                  <strong>Hester, Nissim</strong>
                  <div className="text-muted small">Fusce dapibus, tellus ac cursus commodo</div>
                  <div className="text-muted small">2h ago</div>
                </div>
              </div>
              <div className="d-flex">
                <Image src="https://i.pravatar.cc/40?img=3" roundedCircle className="me-3" style={{height:"70px", width:"70px"}} />
                <div>
                  <strong>Kelley, Sonya</strong>
                  <div className="text-muted small">Created new layout for widgets</div>
                  <div className="text-muted small">4h ago</div>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>

        {/* Recent Orders */}
        <Col md={6}>
          <Card>
            <Card.Header className="d-flex justify-content-between">
              <span>Recent Orders</span>
              <a href="#">View all</a>
            </Card.Header>
            <Card.Body>
              <div className="mb-4">
                <strong>Fusion Backpack</strong>
                <div className="text-muted small">Gear, Bags</div>
                <ProgressBar now={85} label={`+85%`} className="mt-1" />
              </div>
              <div className="mb-4">
                <strong>Luma hoodies</strong>
                <div className="text-muted small">Jackets, Men</div>
                <ProgressBar now={75} label={`+75%`} className="mt-1" />
              </div>
              <div className="mb-4">
                <strong>Luma shorts</strong>
                <div className="text-muted small">Shorts, Men</div>
                <ProgressBar now={62} label={`+62%`} className="mt-1" />
              </div>
              <div>
                <strong>Brown Trousers</strong>
                <div className="text-muted small">Trousers, Women</div>
                <ProgressBar now={24} label={`+24%`} className="mt-1" />
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    </div>
 </> );
};

export default Widgets;
