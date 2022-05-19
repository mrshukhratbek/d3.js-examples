// @react
import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
// @hook
import { useValues } from './hooks';
// @utils
import { addNode, editNode } from './utils';
import { v4 } from 'uuid';

export const useAppProps = () => {
  const { pathname, search } = useLocation();
  const navigate = useNavigate();
  const [innitialValue] = useValues();
  // @states
  const [addModal, setAddModal] = React.useState(false);
  const [editModal, setEditModal] = React.useState(false);
  const [modal, setModal] = React.useState(false);
  // @refs
  const inputRef = React.useRef(null);
  const editInputRef = React.useRef(null);

  React.useEffect(() => {
    if (search === '?add-modal=true') {
      return setAddModal(true);
    } else {
      setAddModal(false);
    }

    if (search === '?edit-modal=true') {
      return setEditModal(true);
    } else {
      setEditModal(false);
    }
  }, [search]);

  useEffect(() => {
    if (addModal) {
      inputRef.current.focus();
    }
  }, [addModal]);

  const handleAddNode = (evt) => {
    evt.preventDefault();
    if (!innitialValue.parentNode) {
      return;
    }

    const newNode = {
      id: v4(),
      name: inputRef.current.value,
    };

    const addedNode = {
      ...innitialValue.parentNode,
      children: innitialValue.parentNode.children
        ? [...innitialValue.parentNode.children, newNode]
        : [newNode],
    };

    const result = addNode(innitialValue.data, addedNode);
    innitialValue.setData({ ...result });

    inputRef.current.value = null;
    navigate(pathname);
  };

  useEffect(() => {
    if (innitialValue.parentNode && editModal) {
      editInputRef.current.focus();
      editInputRef.current.value = innitialValue.parentNode.name;
    }
  }, [editModal]);

  const handleEditNode = (evt) => {
    evt.preventDefault();

    innitialValue.parentNode.name = editInputRef.current.value;

    const result = editNode(innitialValue.data, innitialValue.parentNode);
    innitialValue.setData({ ...result });

    navigate(pathname);
  };

  return {
    inputRef,
    editInputRef,
    modal,
    addModal,
    editModal,
    setModal,
    setAddModal,
    setEditModal,
    handleAddNode,
    handleEditNode,
    data: innitialValue.data,
  };
};
