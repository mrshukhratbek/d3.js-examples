// @react
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const useAppProps = () => {
  const { search } = useLocation();
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

  return { addModal, setAddModal, editModal, setEditModal };
};
