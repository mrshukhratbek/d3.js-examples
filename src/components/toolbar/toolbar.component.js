import './toolbar.css';
import { hoc } from '../../utils';
import { useToolbarProps } from './toolbar.props';

export const Toolbar = hoc(
  useToolbarProps,
  ({
    handleOpen,
    open,
    handleChangeOrientation,
    configTree,
    handleZoomIn,
    handleZoomOut,
    handleSearch,
    handleSelected,
  }) => {
    return (
      <div className={`toolbar ${open && 'toolbar-open'}`}>
        <button className="toolbar-btn" onClick={handleOpen}>
          {!open ? 'Open' : 'Close'}
        </button>
        <div className="toolabr-component">
          <h3 className="toolbar-title">Toolbar</h3>

          <form>
            <div className="search-wrapper">
              <input
                className="modal-input"
                type="text"
                placeholder="Search"
                onChange={handleSearch}
                required
              />

              <ul className="datalist">
                <li onClick={handleSelected}>Something</li>
                <li onClick={handleSelected}>Something</li>
              </ul>
            </div>

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
              <button
                type="button"
                onClick={handleZoomIn}
                disabled={configTree.zoom.toFixed(1) - 0 === 0.1 ? true : false}
              >
                -
              </button>
              <button
                type="button"
                onClick={handleZoomOut}
                disabled={configTree.zoom.toFixed(1) - 0 === 1.5 ? true : false}
              >
                +
              </button>
              <output>{configTree.zoom.toFixed(1)}</output>
            </div>
          </form>
        </div>
      </div>
    );
  }
);
