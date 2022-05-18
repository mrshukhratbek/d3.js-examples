// @react
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
// @hook
import { useValues } from "./hooks";

export const useAppProps = () => {
  const { search } = useLocation();
  const [innitialValue] = useValues();
  const [addModal, setAddModal] = React.useState(false);
  const [editModal, setEditModal] = React.useState(false);

  useEffect(() => {
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
    console.log(innitialValue);
  };

  return { addModal, setAddModal, editModal, setEditModal, handleAddNode };
};
