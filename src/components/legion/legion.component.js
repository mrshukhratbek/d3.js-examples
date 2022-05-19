import { config } from '../../config';

export const Legion = () => {
  return (
    <div className="legion-wrapper">
      <ul>
        {config.map((item) => (
          <li>
            <span
              style={{ backgroundColor: item.color }}
              className="color-palette"
            ></span>
            <span className="type">{item.type}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
