// @react
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
// @hook
import { useValues } from "./hooks";
// @utils
import { findParentNode } from "./utils";

export const useAppProps = () => {
  const { pathname, search } = useLocation();
  const navigate = useNavigate();
  const [innitialValue] = useValues();
  // @states
  const [addModal, setAddModal] = React.useState(false);
  const [editModal, setEditModal] = React.useState(false);
  // @refs
  const inputRef = React.useRef(null);

  React.useEffect(() => {
    if (search === "?add-modal=true") {
      return setAddModal(true);
    } else {
      setAddModal(false);
    }

    if (search === "?edit-modal=true") {
      return setEditModal(true);
    } else {
      setEditModal(false);
    }
  }, [search]);

  const handleAddNode = (evt) => {
    evt.preventDefault();

    if (!innitialValue.parentNode) {
      return;
    }

    const newNode = {
      id: Math.random(),
      name: inputRef.current.value,
      children: [],
    };

    const addedNode = {
      ...innitialValue.parentNode,
      children: [...innitialValue.parentNode.children, newNode],
    };

    const result = findParentNode(innitialValue.data, addedNode);

    innitialValue.setData({ ...result });

    inputRef.current.value = null;
    navigate(pathname);
  };

  return {
    addModal,
    setAddModal,
    editModal,
    setEditModal,
    handleAddNode,
    inputRef,
    data: innitialValue.data,
  };
};
