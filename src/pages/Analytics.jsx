import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Card } from "react-bootstrap";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
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

const Analytics = () => {
  return (
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
  );
};

export default Analytics;
