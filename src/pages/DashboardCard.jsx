import React from "react";
import { Row, Col, Card, Table } from "react-bootstrap";
import { BsThreeDotsVertical } from "react-icons/bs";
import {
  AreaChart,
  BarChart,
  Bar,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

const data = [
  { date: "01 Jan", value1: 40, value2: 30, value3: 20 },
  { date: "03 Jan", value1: 70, value2: 40, value3: 20 },
  { date: "06 Jan", value1: 120, value2: 60, value3: 30 },
  { date: "09 Jan", value1: 40, value2: 30, value3: 10 },
  { date: "12 Jan", value1: 100, value2: 60, value3: 40 },
  { date: "15 Jan", value1: 90, value2: 50, value3: 30 },
  { date: "18 Jan", value1: 150, value2: 80, value3: 50 },
];

const barData = [
  { name: "", uv: 40, pv: 60, amt: 20 },
  { name: "", uv: 70, pv: 20, amt: 10 },
  { name: "", uv: 60, pv: 30, amt: 40 },
  { name: "", uv: 90, pv: 10, amt: 20 },
  { name: "", uv: 20, pv: 50, amt: 60 },
  { name: "", uv: 40, pv: 30, amt: 10 },
];

const activityData = [
  {
    user: "@Brown Asher",
    action: "Just create new layout Index, form, table",
    tag: "Tiny Admin",
    category: "Creative Design",
    time: "1h ago",
    color: "primary",
  },
  {
    user: "@Hester Nissim",
    action: "has upload new files to",
    tag: "Tiny Admin",
    category: "Front-End Development",
    time: "1h ago",
    color: "warning",
  },
  {
    user: "@Kelley Sonya",
    action: "has commented on",
    tag: "Advanced table",
    category: "",
    time: "2h ago",
    color: "success",
  },
];

const tableData = [
  {
    id: 2474,
    name: "Brown, Asher D.",
    address: "Ap #331-7123 Lobortis Avenue",
    date: "13/09/2020",
  },
  {
    id: 2786,
    name: "Leblanc, Yoshio V.",
    address: "287-8300 Nisl. St.",
    date: "04/05/2019",
  },
  {
    id: 2747,
    name: "Hester, Nissim L.",
    address: "4577 Cras St.",
    date: "04/06/2019",
  },
  {
    id: 2639,
    name: "Gardner, Leigh S.",
    address: "P.O. Box 228, 7512 Lectus Ave",
    date: "04/08/2019",
  },
  {
    id: 2238,
    name: "Higgins, Uriah L.",
    address: "Ap #377-5357 Sed Road",
    date: "04/01/2019",
  },
];

const DashboardCard = () => {
  return (
    <>
      <Card className="p-4 ">
        <Row className="text-center">
          <Col>
            <h6 className="text-muted">Balance</h6>
            <h4>
              $12,600 <span className="text-success">+20%</span>
            </h4>
            <p className="text-muted small">
              Curabitur ullamcorper ultricies nisi
            </p>
          </Col>
          <Col>
            <h6 className="text-muted">Today</h6>
            <h4>
              $2600 <span className="text-success">+20%</span>
            </h4>
          </Col>
          <Col>
            <h6 className="text-muted">Goal Value</h6>
            <h4>
              $260 <span className="text-success">+6%</span>
            </h4>
          </Col>
          <Col>
            <h6 className="text-muted">Completions</h6>
            <h4>
              26 <span className="text-success">+20%</span>
            </h4>
            <h1></h1>
          </Col>
          <Col>
            <h6 className="text-muted">Conversion</h6>
            <h4>
              6% <span className="text-danger">-2%</span>
            </h4>
          </Col>
        </Row>

        <ResponsiveContainer width="100%" height={250}>
          <AreaChart
            data={data}
            margin={{ top: 20, right: 0, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="color1" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#4f46e5" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#4f46e5" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="color2" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#14b8a6" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#14b8a6" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="color3" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#6366f1" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#6366f1" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="date" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="value1"
              stackId="1"
              stroke="#4f46e5"
              fill="url(#color1)"
            />
            <Area
              type="monotone"
              dataKey="value2"
              stackId="1"
              stroke="#14b8a6"
              fill="url(#color2)"
            />
            <Area
              type="monotone"
              dataKey="value3"
              stackId="1"
              stroke="#6366f1"
              fill="url(#color3)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </Card>

      {/* second part  */}

      <Row className="g-3 mt-1">
        {/* Card 1 */}
        <Col md={4}>
          <Card className="p-2 h-100 ">
            <h6 className="text-muted">EARNING</h6>
            <h4>$2,562</h4>
            <p className="text-muted small">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <div
              className="d-flex justify-content-center my-3"
              style={{ width: 80, height: 80, margin: "0 auto" }}
            >
              <CircularProgressbar
                value={86}
                text={`86`}
                styles={buildStyles({
                  pathColor: "#1976d2",
                  textColor: "#333",
                  trailColor: "#eee",
                })}
              />
            </div>
            <Row className="text-center mt-3">
              <Col>
                <h6>Cost</h6>
                <p>
                  108
                  <br />
                  <small className="text-muted">+37.7% Last week</small>
                </p>
              </Col>
              <Col>
                <h6>Revenue</h6>
                <p>
                  1168
                  <br />
                  <small className="text-muted">-18.9% Last week</small>
                </p>
              </Col>
            </Row>
          </Card>
        </Col>

        {/* Card 2 */}
        <Col md={4}>
          <Card className="p-2 text-center h-100 ">
            <div style={{ width: 100, height: 100, margin: "0 auto" }}>
              <CircularProgressbar
                value={70}
                text={`70%`}
                styles={buildStyles({
                  pathColor: "#007bff",
                  textColor: "#333",
                  trailColor: "#eee",
                })}
              />
            </div>
            <p className="mt-4">Percent</p>
            <Row className="text-center mt-3">
              <Col>
                <h6>Cost</h6>
                <p>
                  $1,823
                  <br />
                  <small className="text-success">+12%</small>
                </p>
              </Col>
              <Col>
                <h6>Revenue</h6>
                <p>
                  $6,830
                  <br />
                  <small className="text-success">+8%</small>
                </p>
              </Col>
              <Col>
                <h6>Earning</h6>
                <p>
                  $4,830
                  <br />
                  <small className="text-success">+8%</small>
                </p>
              </Col>
            </Row>
          </Card>
        </Col>

        {/* Card 3 */}
        <Col md={4}>
          <Card className="p-2 text-center h-100  ">
            <h6>Total</h6>
            <h4>108</h4>
            <p className="text-success p-3">+37.7%</p>
            <ResponsiveContainer width="100%" height={92}>
              <BarChart data={barData} layout="vertical">
                <XAxis type="number" hide />
                <Tooltip />
                <Bar dataKey="uv" stackId="a" fill="#8b5cf6" />
                <Bar dataKey="pv" stackId="a" fill="#34d399" />
                <Bar dataKey="amt" stackId="a" fill="#3b82f6" />
              </BarChart>
            </ResponsiveContainer>
            <Row className="text-center mt-3">
              <Col>
                <h6>Cost</h6>
                <p>
                  108
                  <br />
                  <small className="text-success">+377%</small>
                </p>
              </Col>
              <Col>
                <h6>Revenue</h6>
                <p>
                  1168
                  <br />
                  <small className="text-danger">-18.9%</small>
                </p>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>

      {/* tharee page  */}

      <Row className="g-4 mt-4" style={{ width: "99%" }}>
        {/* Recent Activity */}
        <Col md={6}>
          <Card className="p-3 h-100 ">
            <Card.Header className="d-flex justify-content-between align-items-center border-0 bg-white">
              <h6 className="mb-0">Recent Activity</h6>
              <a href="#">View all</a>
            </Card.Header>
            <Card.Body className="pt-0">
              {activityData.map((item, index) => (
                <div key={index} className="d-flex mb-4">
                  <div className="me-3">
                    <span
                      className={`d-block rounded-circle bg-${item.color}`}
                      style={{ width: 10, height: 10, marginTop: 6 }}
                    ></span>
                  </div>
                  <div>
                    <p className="mb-1">
                      <strong>{item.user}</strong> {item.action}{" "}
                      <strong>{item.tag}</strong>
                    </p>
                    {item.category && (
                      <small className="text-muted d-block">
                        {item.category}
                      </small>
                    )}
                    <small className="text-muted">{item.time}</small>
                  </div>
                </div>
              ))}
            </Card.Body>
          </Card>
        </Col>

        {/* Recent Data Table */}
        <Col md={6}>
          <Card className="p-3">
            <Card.Header className="d-flex justify-content-between align-items-center border-0 bg-white">
              <h6 className="mb-0">Recent Data</h6>
              <a href="#">View all</a>
            </Card.Header>
            <Card.Body className="pt-0">
              <Table responsive borderless className="align-middle">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Address</th>
                    <th>Date</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {tableData.map((row, index) => (
                    <tr key={index}>
                      <td>{row.id}</td>
                      <td>{row.name}</td>
                      <td>{row.address}</td>
                      <td>{row.date}</td>
                      <td>
                        <BsThreeDotsVertical />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default DashboardCard;
