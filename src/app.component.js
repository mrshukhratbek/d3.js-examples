import React from "react";
import "./app.css";
import { hoc } from "./utils";
import { useAppProps } from "./app.props";
import { CustomTree, TreeContainer, TreeNode } from "./components";
import { Modal } from "./components/modal/modal.component";

export const App = hoc(
  useAppProps,
  ({
    addModal,
    setAddModal,
    editModal,
    setEditModal,
    handleAddNode,
    handleEditNode,
    inputRef,
    editInputRef,
    data,
  }) => {
    return (
      <TreeContainer>
        <CustomTree
          data={data}
          orientation="vertical"
          renderCustomNodeElement={(rd3tProps) => <TreeNode {...rd3tProps} />}
        />
        <Modal open={addModal} setOpen={setAddModal} title="Add">
          <form className="modal-form" onSubmit={handleAddNode}>
            <input
              ref={inputRef}
              className="modal-input"
              type="text"
              placeholder="Node name"
              required
            />

            <button className="modal-btn">Add</button>
          </form>
        </Modal>
        <Modal open={editModal} setOpen={setEditModal} title="Edit">
          <form className="modal-form" onSubmit={handleEditNode}>
            <input
              ref={editInputRef}
              className="modal-input"
              type="text"
              placeholder="Node name"
              required
            />

            <button className="modal-btn">Edit</button>
          </form>
        </Modal>
      </TreeContainer>
    );
  }
);
