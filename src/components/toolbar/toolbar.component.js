import './toolbar.css';
import { hoc } from '../../utils';
import { useToolbarProps } from './toolbar.props';

export const Toolbar = hoc(
  useToolbarProps,
  ({ handleOpen, open, handleChangeOrientation, configTree }) => {
    return (
      <div className={`toolbar ${open && 'toolbar-open'}`}>
        <button className="toolbar-btn" onClick={handleOpen}>
          {!open ? 'Open' : 'Close'}
        </button>
        <div className="toolabr-component">
          <h3 className="toolbar-title">Toolbar</h3>

          <form>
            <input
              className="modal-input"
              type="text"
              placeholder="Search"
              required
            />

            <label htmlFor="orientation">Orientation</label>
            <select
              className="modal-select"
              id="orientation"
              defaultValue={configTree.orientation}
              onChange={handleChangeOrientation}
            >
              <option value="horizontal">Horizontal</option>
              <option value="vertical">Vertical</option>
            </select>

            <p>Zoom</p>
            <div className="zoom">
              <button type="button">-</button>
              <button type="button">+</button>
              <output>1</output>
            </div>
          </form>
        </div>
      </div>
    );
  }
);
