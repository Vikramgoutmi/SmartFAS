// import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// //import imag from "C:/Users/ab/OneDrive/Desktop/Finance/public/map_logo.png"
// import { Container, Row, Col, Card } from "react-bootstrap";
// import {
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   Tooltip,
//   Legend,
//   ResponsiveContainer,
//    RadialBarChart,
//   RadialBar,
//   PolarAngleAxis,
//   RadarChart,
//   PolarGrid,
//   PolarAngleAxis as RadarAngle,
//   Radar,
// } from "recharts";

// const data = [
//   { date: "Jan 01", pageViews: 10, visitors: 20, orders: 5 },
//   { date: "Jan 02", pageViews: 30, visitors: 45, orders: 25 },
//   { date: "Jan 03", pageViews: 20, visitors: 15, orders: 10 },
//   { date: "Jan 04", pageViews: 35, visitors: 30, orders: 20 },
//   { date: "Jan 05", pageViews: 50, visitors: 40, orders: 30 },
//   { date: "Jan 06", pageViews: 100, visitors: 55, orders: 28 },
//   { date: "Jan 07", pageViews: 95, visitors: 45, orders: 20 },
//   { date: "Jan 08", pageViews: 25, visitors: 25, orders: 5 },
//   { date: "Jan 09", pageViews: 35, visitors: 30, orders: 10 },
//   { date: "Jan 10", pageViews: 40, visitors: 40, orders: 15 },
//   { date: "Jan 11", pageViews: 45, visitors: 65, orders: 35 },
//   { date: "Jan 12", pageViews: 60, visitors: 55, orders: 45 },
//   { date: "Jan 13", pageViews: 30, visitors: 35, orders: 25 },
//   { date: "Jan 14", pageViews: 45, visitors: 40, orders: 10 },
//   { date: "Jan 15", pageViews: 50, visitors: 50, orders: 20 },
//   { date: "Jan 16", pageViews: 95, visitors: 60, orders: 25 },
//   { date: "Jan 17", pageViews: 90, visitors: 65, orders: 30 },
//   { date: "Jan 18", pageViews: 115, visitors: 80, orders: 65 },
// ];


// // threed pats 


// const regionData = [
//   { country: "France", value: 118, change: "+10%" },
//   { country: "Netherlands", value: 1008, change: "+0.6%" },
//   { country: "Italy", value: 67, change: "+1.6%" },
//   { country: "Spain", value: 186, change: "+118%" },
// ];

// const trafficData = [
//   { name: "Direct", value: 218, fill: "#00C49F" },
//   { name: "Organic Search", value: 1002, fill: "#FFBB28" },
//   { name: "Referral", value: 67, fill: "#0088FE" },
//   { name: "Social", value: 386, fill: "#8884d8" },
// ];

// const browserData = [
//   { browser: "Safari", value: 118 },
//   { browser: "Chrome", value: 1008 },
//   { browser: "Opera", value: 67 },
//   { browser: "Edge", value: 186 },
// ];

// const radarData = [
//   { subject: "01", Safari: 80, Chrome: 120 },
//   { subject: "02", Safari: 90, Chrome: 110 },
//   { subject: "03", Safari: 75, Chrome: 105 },
//   { subject: "04", Safari: 100, Chrome: 90 },
//   { subject: "05", Safari: 95, Chrome: 80 },
//   { subject: "06", Safari: 110, Chrome: 70 },
// ];



// const Analytics = () => {
//   return (<>
//     <Container className="mt-4">
//       {/* Stats Cards */}
//       <Row className="mb-4">
//         <Col md={4}>
//           <Card className="shadow-sm">
//             <Card.Body>
//               <h6>Page Views</h6>
//               <h3>1168</h3>
//               <small className="text-danger">↓ -18.9% Last week</small>
//             </Card.Body>
//           </Card>
//         </Col>
//         <Col md={4}>
//           <Card className="shadow-sm">
//             <Card.Body>
//               <h6>Conversion</h6>
//               <h3>68</h3>
//               <small className="text-success">↑ +1.9% Last week</small>
//             </Card.Body>
//           </Card>
//         </Col>
//         <Col md={4}>
//           <Card className="shadow-sm">
//             <Card.Body>
//               <h6>Visitors</h6>
//               <h3>108</h3>
//               <small className="text-success">↑ +37.7% Last week</small>
//             </Card.Body>
//           </Card>
//         </Col>
//       </Row>

//       {/* Chart */}
//       <Row>
//         <Col>
//           <Card className="shadow-sm">
//             <Card.Body>
//               <ResponsiveContainer width="100%" height={300}>
//                 <LineChart data={data}>
//                   <XAxis dataKey="date" />
//                   <YAxis />
//                   <Tooltip />
//                   <Legend />
//                   <Line type="monotone" dataKey="pageViews" stroke="#007bff" name="Page Views" />
//                   <Line type="monotone" dataKey="visitors" stroke="#28a745" name="Visitors" />
//                   <Line type="monotone" dataKey="orders" stroke="#6f42c1" name="Orders" />
//                 </LineChart>
//               </ResponsiveContainer>
//             </Card.Body>
//           </Card>
//         </Col>
//       </Row>
//     </Container>


// {/* second code  */}

// <div className="container my-4">
//       <div className="row g-4">
//         {/* Goal Card */}
//         <div className="col-md-6">
//           <div className="card shadow-sm">
//             <div className="card-body">
//               <h5 className="card-title">Goal</h5>
//               <div className="d-flex justify-content-between text-center my-3">
//                 <div>
//                   <div className="fw-bold fs-4">26</div>
//                   <small className="text-success">+20%</small>
//                   <div>Completions</div>
//                 </div>
//                 <div>
//                   <div className="fw-bold fs-4">$260</div>
//                   <small className="text-success">+6%</small>
//                   <div>Goal Value</div>
//                 </div>
//                 <div>
//                   <div className="fw-bold fs-4">6%</div>
//                   <small className="text-danger">-2%</small>
//                   <div>Conversion</div>
//                 </div>
//               </div>

//               <hr />
//               <table className="table table-sm">
//                 <thead>
//                   <tr>
//                     <th>Goal</th>
//                     <th>Conversion</th>
//                     <th>Completions</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   <tr>
//                     <td>Checkout</td>
//                     <td>5%</td>
//                     <td>260</td>
//                   </tr>
//                   <tr>
//                     <td>Add to Cart</td>
//                     <td>55%</td>
//                     <td>1260</td>
//                   </tr>
//                   <tr>
//                     <td>Contact</td>
//                     <td>18%</td>
//                     <td>460</td>
//                   </tr>
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         </div>

//         {/* Top Selling Card */}
//         <div className="col-md-6">
//           <div className="card shadow-sm">
//             <div className="card-body">
//               <div className="d-flex justify-content-between">
//                 <h5 className="card-title">Top Selling</h5>
//                 <a href="#" className="text-primary">View all</a>
//               </div>

//               {[
//                 { name: "Fusion Backpack", type: "Gear, Bags", value: 85 },
//                 { name: "Luma hoodies", type: "Jackets, Men", value: 75 },
//                 { name: "Luma shorts", type: "Shorts, Men", value: 62 },
//                 { name: "Brown Trousers", type: "Trousers, Women", value: 24 },
//               ].map((item, i) => (
//                 <div key={i} className="d-flex align-items-center my-3">
//                   <div className="me-3">
//                     <div className="bg-secondary rounded-circle" style={{ width: 40, height: 40 }}></div>
//                   </div>
//                   <div className="flex-grow-1">
//                     <div className="fw-bold">{item.name}</div>
//                     <div className="text-muted small">{item.type}</div>
//                   </div>
//                   <div className="text-end">
//                     <div className="text-primary fw-bold">+{item.value}%</div>
//                     <div className="progress" style={{ height: "5px", width: "100px" }}>
//                       <div
//                         className="progress-bar bg-primary"
//                         role="progressbar"
//                         style={{ width: `${item.value}%` }}
//                       ></div>
//                     </div>
//                   </div>
//                 </div>
//               ))}

//             </div>
//           </div>
//         </div>
//       </div>
//     </div>

//     {/* threed code  */}

//      <div className="container my-4">
//       <div className="row g-4">

//         {/* Region Section */}
//         <div className="col-md-4">
//           <div className="card shadow-sm">
//             <div className="card-body">
//               <h5 className="card-title">Region</h5>
//               <div className="my-3">
//                 {/* Map would go here - placeholder */}
//                 <div
//                   className="bg-secondary mb-3"
//                   style={{ width: "100%", height: "150px" }}
//                   />
//               </div>
//                    {/* <img src={imag} alt="" /> */}

//               {regionData.map((item, i) => (
//                 <div key={i} className="d-flex justify-content-between mb-2">
//                   <div>
//                     <div>{item.country}</div>
//                     <small className="text-muted">{item.change}</small>
//                   </div>
//                   <div>{item.value}</div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Traffic Section */}
//         <div className="col-md-4">
//           <div className="card shadow-sm">
//             <div className="card-body">
//               <div className="d-flex justify-content-between">
//                 <h5 className="card-title">Traffic</h5>
//                 <a href="#" className="text-primary">View all</a>
//               </div>
//               <RadialBarChart
//                 width={250}
//                 height={250}
//                 cx={125}
//                 cy={125}
//                 innerRadius={50}
//                 outerRadius={100}
//                 barSize={10}
//                 data={trafficData}
//               >
//                 <PolarAngleAxis
//                   type="number"
//                   domain={[0, 1200]}
//                   angleAxisId={0}
//                   tick={false}
//                 />
//                 <RadialBar
//                   background
//                   clockWise
//                   dataKey="value"
//                   cornerRadius={5}
//                 />
//               </RadialBarChart>

//               {trafficData.map((item, i) => (
//                 <div key={i} className="d-flex justify-content-between">
//                   <div>
//                     {item.name}
//                     <div className="text-muted small">+{Math.floor(Math.random() * 10)}%</div>
//                   </div>
//                   <div>{item.value}</div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Browsers Section */}
//         <div className="col-md-4">
//           <div className="card shadow-sm">
//             <div className="card-body">
//               <h5 className="card-title">Browsers</h5>

//               <RadarChart cx={130} cy={130} outerRadius={100} width={260} height={260} data={radarData}>
//                 <PolarGrid />
//                 <RadarAngle dataKey="subject" />
//                 <Radar
//                   name="Safari"
//                   dataKey="Safari"
//                   stroke="#8884d8"
//                   fill="#8884d8"
//                   fillOpacity={0.6}
//                 />
//                 <Radar
//                   name="Chrome"
//                   dataKey="Chrome"
//                   stroke="#82ca9d"
//                   fill="#82ca9d"
//                   fillOpacity={0.6}
//                 />
//                 <Legend />
//               </RadarChart>

//               {browserData.map((item, i) => (
//                 <div key={i} className="d-flex justify-content-between">
//                   <div>
//                     {item.browser}
//                     <div className="text-muted small">
//                       +{Math.floor(Math.random() * 10 + 1)}%
//                     </div>
//                   </div>
//                   <div>{item.value}</div>
//                 </div>
//               ))}

//             </div>
//           </div>
//         </div>

//       </div>
//     </div>

//  </> );
// };

// export default Analytics;





import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
//import imag from "C:/Users/ab/OneDrive/Desktop/Finance/public/map_logo.png"
import { Container, Row, Col, Card } from "react-bootstrap";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
   RadialBarChart,
  RadialBar,
  PolarAngleAxis,
  RadarChart,
  PolarGrid,
  PolarAngleAxis as RadarAngle,
  Radar,
} from "recharts";

const data = [
  { date: "Jan 01", pageViews: 10, visitors: 20, orders: 5 },
  { date: "Jan 02", pageViews: 30, visitors: 45, orders: 25 },
  { date: "Jan 03", pageViews: 20, visitors: 15, orders: 10 },
  { date: "Jan 04", pageViews: 35, visitors: 30, orders: 20 },
  { date: "Jan 05", pageViews: 50, visitors: 40, orders: 30 },
  { date: "Jan 06", pageViews: 100, visitors: 55, orders: 28 },
  { date: "Jan 07", pageViews: 95, visitors: 45, orders: 20 },
  { date: "Jan 08", pageViews: 25, visitors: 25, orders: 5 },
  { date: "Jan 09", pageViews: 35, visitors: 30, orders: 10 },
  { date: "Jan 10", pageViews: 40, visitors: 40, orders: 15 },
  { date: "Jan 11", pageViews: 45, visitors: 65, orders: 35 },
  { date: "Jan 12", pageViews: 60, visitors: 55, orders: 45 },
  { date: "Jan 13", pageViews: 30, visitors: 35, orders: 25 },
  { date: "Jan 14", pageViews: 45, visitors: 40, orders: 10 },
  { date: "Jan 15", pageViews: 50, visitors: 50, orders: 20 },
  { date: "Jan 16", pageViews: 95, visitors: 60, orders: 25 },
  { date: "Jan 17", pageViews: 90, visitors: 65, orders: 30 },
  { date: "Jan 18", pageViews: 115, visitors: 80, orders: 65 },
];


// threed pats 


const regionData = [
  { country: "France", value: 118, change: "+10%" },
  { country: "Netherlands", value: 1008, change: "+0.6%" },
  { country: "Italy", value: 67, change: "+1.6%" },
  { country: "Spain", value: 186, change: "+118%" },
];

const trafficData = [
  { name: "Direct", value: 218, fill: "#00C49F" },
  { name: "Organic Search", value: 1002, fill: "#FFBB28" },
  { name: "Referral", value: 67, fill: "#0088FE" },
  { name: "Social", value: 386, fill: "#8884d8" },
];

const browserData = [
  { browser: "Safari", value: 118 },
  { browser: "Chrome", value: 1008 },
  { browser: "Opera", value: 67 },
  { browser: "Edge", value: 186 },
];

const radarData = [
  { subject: "01", Safari: 80, Chrome: 120 },
  { subject: "02", Safari: 90, Chrome: 110 },
  { subject: "03", Safari: 75, Chrome: 105 },
  { subject: "04", Safari: 100, Chrome: 90 },
  { subject: "05", Safari: 95, Chrome: 80 },
  { subject: "06", Safari: 110, Chrome: 70 },
];



const Analytics = () => {
  return (<>
    <Container className="mt-4">
      {/* Stats Cards */}
      <Row className="mb-4">
        <Col md={4}>
          <Card className="shadow-sm">
            <Card.Body>
              <h6>Page Views</h6>
              <h3>1168</h3>
              <small className="text-danger">↓ -18.9% Last week</small>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="shadow-sm">
            <Card.Body>
              <h6>Conversion</h6>
              <h3>68</h3>
              <small className="text-success">↑ +1.9% Last week</small>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="shadow-sm">
            <Card.Body>
              <h6>Visitors</h6>
              <h3>108</h3>
              <small className="text-success">↑ +37.7% Last week</small>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Chart */}
      <Row>
        <Col>
          <Card className="shadow-sm">
            <Card.Body>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={data}>
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="pageViews" stroke="#007bff" name="Page Views" />
                  <Line type="monotone" dataKey="visitors" stroke="#28a745" name="Visitors" />
                  <Line type="monotone" dataKey="orders" stroke="#6f42c1" name="Orders" />
                </LineChart>
              </ResponsiveContainer>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>


{/* second code  */}

<div className="container my-4">
      <div className="row g-4">
        {/* Goal Card */}
        <div className="col-md-6">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Goal</h5>
              <div className="d-flex justify-content-between text-center my-3">
                <div>
                  <div className="fw-bold fs-4">26</div>
                  <small className="text-success">+20%</small>
                  <div>Completions</div>
                </div>
                <div>
                  <div className="fw-bold fs-4">$260</div>
                  <small className="text-success">+6%</small>
                  <div>Goal Value</div>
                </div>
                <div>
                  <div className="fw-bold fs-4">6%</div>
                  <small className="text-danger">-2%</small>
                  <div>Conversion</div>
                </div>
              </div>

              <hr />
              <table className="table table-sm">
                <thead>
                  <tr>
                    <th>Goal</th>
                    <th>Conversion</th>
                    <th>Completions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Checkout</td>
                    <td>5%</td>
                    <td>260</td>
                  </tr>
                  <tr>
                    <td>Add to Cart</td>
                    <td>55%</td>
                    <td>1260</td>
                  </tr>
                  <tr>
                    <td>Contact</td>
                    <td>18%</td>
                    <td>460</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Top Selling Card */}
        <div className="col-md-6">
          <div className="card shadow-sm">
            <div className="card-body">
              <div className="d-flex justify-content-between">
                <h5 className="card-title">Top Selling</h5>
                <a href="#" className="text-primary">View all</a>
              </div>

              {[
                { name: "Fusion Backpack", type: "Gear, Bags", value: 85 },
                { name: "Luma hoodies", type: "Jackets, Men", value: 75 },
                { name: "Luma shorts", type: "Shorts, Men", value: 62 },
                { name: "Brown Trousers", type: "Trousers, Women", value: 24 },
              ].map((item, i) => (
                <div key={i} className="d-flex align-items-center my-3">
                  <div className="me-3">
                    <div className="bg-secondary rounded-circle" style={{ width: 40, height: 40 }}></div>
                  </div>
                  <div className="flex-grow-1">
                    <div className="fw-bold">{item.name}</div>
                    <div className="text-muted small">{item.type}</div>
                  </div>
                  <div className="text-end">
                    <div className="text-primary fw-bold">+{item.value}%</div>
                    <div className="progress" style={{ height: "5px", width: "100px" }}>
                      <div
                        className="progress-bar bg-primary"
                        role="progressbar"
                        style={{ width: `${item.value}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}

            </div>
          </div>
        </div>
      </div>
    </div>

    {/* threed code  */}

     <div className="container my-4">
      <div className="row g-4">

        {/* Region Section */}
        <div className="col-md-4">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Region</h5>
              <div className="my-3">
                {/* Map would go here - placeholder */}
                <div
                  className="bg-secondary mb-3"
                  style={{ width: "100%", height: "150px" }}
                  />
              </div>
                   {/* <img src={imag} alt="" /> */}

              {regionData.map((item, i) => (
                <div key={i} className="d-flex justify-content-between mb-2">
                  <div>
                    <div>{item.country}</div>
                    <small className="text-muted">{item.change}</small>
                  </div>
                  <div>{item.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Traffic Section */}
        <div className="col-md-4">
          <div className="card shadow-sm">
            <div className="card-body">
              <div className="d-flex justify-content-between">
                <h5 className="card-title">Traffic</h5>
                <a href="#" className="text-primary">View all</a>
              </div>
              <RadialBarChart
                width={250}
                height={250}
                cx={125}
                cy={125}
                innerRadius={50}
                outerRadius={100}
                barSize={10}
                data={trafficData}
              >
                <PolarAngleAxis
                  type="number"
                  domain={[0, 1200]}
                  angleAxisId={0}
                  tick={false}
                />
                <RadialBar
                  background
                  clockWise
                  dataKey="value"
                  cornerRadius={5}
                />
              </RadialBarChart>

              {trafficData.map((item, i) => (
                <div key={i} className="d-flex justify-content-between">
                  <div>
                    {item.name}
                    <div className="text-muted small">+{Math.floor(Math.random() * 10)}%</div>
                  </div>
                  <div>{item.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Browsers Section */}
        <div className="col-md-4">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Browsers</h5>

              <RadarChart cx={130} cy={130} outerRadius={100} width={260} height={260} data={radarData}>
                <PolarGrid />
                <RadarAngle dataKey="subject" />
                <Radar
                  name="Safari"
                  dataKey="Safari"
                  stroke="#8884d8"
                  fill="#8884d8"
                  fillOpacity={0.6}
                />
                <Radar
                  name="Chrome"
                  dataKey="Chrome"
                  stroke="#82ca9d"
                  fill="#82ca9d"
                  fillOpacity={0.6}
                />
                <Legend />
              </RadarChart>

              {browserData.map((item, i) => (
                <div key={i} className="d-flex justify-content-between">
                  <div>
                    {item.browser}
                    <div className="text-muted small">
                      +{Math.floor(Math.random() * 10 + 1)}%
                    </div>
                  </div>
                  <div>{item.value}</div>
                </div>
              ))}

            </div>
          </div>
        </div>

      </div>
    </div>

 </> );
};

export default Analytics;
