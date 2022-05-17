// @react
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const useAppProps = () => {
  const { search } = useLocation();
  const [addModal, setAddModal] = React.useState(false);

  useEffect(() => {
    if (search === "?add-modal=true") {
      setAddModal(true);
    } else {
      setAddModal(false);
    }
  }, [search]);

  return { addModal, setAddModal };
};
