import React from 'react';

const colors = [
  { name: "Primary", color: "#007bff" },
  { name: "Success", color: "#28a745" },
  { name: "Warning", color: "#f0ad4e" },
  { name: "Danger", color: "#dc3545" },
  { name: "Secondary", color: "#6c757d" },
  { name: "Info", color: "#17a2b8" }
];

const grays = [
  { name: "White", color: "#fff" },
  { name: "Light", color: "#f8f9fa" },
  { name: "Bordered", color: "#dee2e6" },
  { name: "Muted", color: "#6c757d" },
  { name: "Regular", color: "#343a40" },
  { name: "Headings", color: "#212529" }
];

const ColorBlock = ({ title, color }) => (
  <div className="p-3 text-white" style={{ backgroundColor: color, minHeight: '60px' }}>
    {title} color <span className="float-end">{color}</span>
  </div>
);

const Color = () => {
  return (
    <div className="container my-4">
      <h5>Colors</h5>
      <p className="text-muted">Lorem ipsum dolor sit amet...</p>
      <div className="row g-3">
        {colors.map((c, i) => (
          <div className="col-md-4" key={i}>
            <ColorBlock title={c.name} color={c.color} />
          </div>
        ))}
      </div>

      <h5 className="mt-5">Gray Levels</h5>
      <p className="text-muted">Lorem ipsum dolor sit amet...</p>
      <div className="row g-0">
        {grays.map((g, i) => (
          <div className="col text-center border" key={i} style={{ backgroundColor: g.color, padding: '20px 0' }}>
            {g.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Color;
