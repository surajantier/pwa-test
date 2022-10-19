import "./GridContainer.scss";

const griddata = [
  { id: 1, title: "John Doe" },
  { id: 2, title: "Victor Wayne" },
  { id: 3, title: "Jane Doe" },
  { id: 4, title: "John Doe" },
  { id: 5, title: "Victor Wayne" },
  { id: 6, title: "Jane Doe" },
  { id: 7, title: "John Doe" },
  { id: 8, title: "Victor Wayne" },
  { id: 9, title: "Jane Doe" },
];

const GridContainer = () => {
  return (
    <div className="grid-container">
      <h3 className="small-title">Our Services</h3>
      <div className="grid-row">
        {griddata.map((data) => (
          <GridCard title={data.title} />
        ))}
      </div>
    </div>
  );
};

const GridCard = ({ title, icon }) => {
  return (
    <div className="grid-card">
      <span className="d-block">{icon}</span>
      <p>{title}</p>
    </div>
  );
};

export default GridContainer;
