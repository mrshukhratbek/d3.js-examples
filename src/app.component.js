import React from 'react';
import './app.css';
import { hoc } from './utils';
import { useAppProps } from './app.props';
import {
  CustomTree,
  TreeContainer,
  TreeNode,
  Toolbar,
  AddBtn,
  AddModal,
  Legion,
} from './components';
import { Modal } from './components/modal/modal.component';

export const App = hoc(
  useAppProps,
  ({
    modal,
    setModal,
    addModal,
    setAddModal,
    editModal,
    setEditModal,
    handleAddNode,
    handleEditNode,
    inputRef,
    editInputRef,
    data,
    configTree,
  }) => {
    return (
      <>
        <TreeContainer>
          <CustomTree
            data={data}
            {...configTree}
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
        <div className="graph-legion">
          <Legion />
        </div>
        <Toolbar />
        <AddBtn setModal={setModal} />
        <AddModal open={modal} setOpen={setModal} title="Add" />
      </>
    );
  }
);
