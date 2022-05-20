import './toolbar.css';
import { hoc } from '../../utils';
import { useToolbarProps } from './toolbar.props';

export const Toolbar = hoc(
  useToolbarProps,
  ({
    handleOpen,
    open,
    search,
    handleChangeOrientation,
    configTree,
    handleZoomIn,
    handleZoomOut,
    handleSearch,
    handleSelected,
    handleChangeLine,
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
              <label htmlFor="search">Search</label>
              <input
                id="search"
                className="modal-input"
                type="text"
                placeholder="Search"
                onChange={handleSearch}
                required
              />

              {search.length > 0 && (
                <ul className="datalist">
                  {search.map((node) => (
                    <li key={node.id} onClick={handleSelected.bind(null, node)}>
                      {node.name}
                    </li>
                  ))}
                </ul>
              )}
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

            <label htmlFor="line">Line</label>
            <select
              className="modal-select"
              id="line"
              defaultValue={configTree.pathFunc}
              onChange={handleChangeLine}
            >
              <option value="diagonal">Diagonal</option>
              <option value="elbow">Elbow</option>
              <option value="straight">Straight</option>
              <option value="step">Step</option>
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
