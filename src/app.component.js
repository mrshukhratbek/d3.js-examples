import React from "react";
import "./app.css";
import { data } from "./data";
import { hoc } from "./utils";
import { useAppProps } from "./app.props";
import { CustomTree, TreeContainer, TreeNode } from "./components";
import { Modal } from "./components/modal/modal.component";

export const App = hoc(
  useAppProps,
  ({ addModal, setAddModal, editModal, setEditModal }) => {
    return (
      <TreeContainer>
        <CustomTree
          data={data}
          orientation="vertical"
          renderCustomNodeElement={(rd3tProps) => <TreeNode {...rd3tProps} />}
        />
        <Modal open={addModal} setOpen={setAddModal}>
          <>Qo'shish</>
        </Modal>
        <Modal open={editModal} setOpen={setEditModal}>
          <>O'zgartirish</>
        </Modal>
      </TreeContainer>
    );
  }
);
