import { Modal } from '../modal';
import { hoc } from '../../utils';
import { useAddModalProps } from './add-modal.props';

export const AddModal = hoc(
  useAddModalProps,
  ({ open, setOpen, inputRef, handleChange, handleSubmit, nodeArr }) => {
    console.log(nodeArr);
    return (
      <Modal open={open} setOpen={setOpen}>
        <form
          className="modal-form"
          onSubmit={handleSubmit}
          defaultValue="select"
        >
          <select className="modal-select" onChange={handleChange}>
            <option value={'select'}>Select parent node</option>
            {nodeArr.map((node, i) => (
              <option key={i}>{node.name}</option>
            ))}
          </select>

          <input
            ref={inputRef}
            className="modal-input"
            type="text"
            placeholder="Node name"
            required
          />
          <button className="modal-btn">Edit</button>
        </form>
      </Modal>
    );
  }
);
