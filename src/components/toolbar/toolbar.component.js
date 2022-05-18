import "./toolbar.css";
import { hoc } from "../../utils";
import { useToolbarProps } from "./toolbar.props";

export const Toolbar = hoc(useToolbarProps, ({ handleOpen, open }) => {
  return (
    <div className={`toolbar ${open && "toolbar-open"}`}>
      <button className="toolbar-btn" onClick={handleOpen}>
        {!open ? "Open" : "Close"}
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
        </form>
      </div>
    </div>
  );
});
