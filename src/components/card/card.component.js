export const Card = ({ nodeData }) => (
  <div>
    <div className="card">
      <div className="card-body">
        <h5 style={{ margin: '5px' }} className="card-title">
          {nodeData.attributes.title}
        </h5>
        <h6 style={{ margin: '5px' }} className="card-subtitle mb-2 text-muted">
          {nodeData.attributes.subtitle}
        </h6>
        <p style={{ margin: '5px' }} className="card-text">
          {nodeData.attributes.text}
        </p>
      </div>
    </div>
  </div>
);
