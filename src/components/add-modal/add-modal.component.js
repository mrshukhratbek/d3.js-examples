import { Modal } from '../modal';

export const AddModal = ({ open, setOpen }) => {
  return (
    <Modal open={open} setOpen={setOpen}>
      <form className="modal-form">
        <select className="modal-select">
          <option selected disabled>
            Select parent node
          </option>
        </select>
        <input
          className="modal-input"
          type="text"
          placeholder="Node name"
          required
        />

        <button className="modal-btn">Edit</button>
      </form>
    </Modal>
  );
};
