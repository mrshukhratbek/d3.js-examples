// @react
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const useModalProps = ({ open }) => {
  const { pathname, search } = useLocation();
  const navigate = useNavigate();
  const elModal = React.useRef();

  const handleClose = () => {
    navigate(pathname);
  };

  const handleCloseClick = (evt) => {
    if (evt.target === elModal.current) {
      navigate(pathname);
    }
  };

  React.useEffect(() => {
    elModal.current.addEventListener("click", handleCloseClick);

    return () => elModal.current.removeEventListener("click", handleCloseClick);
  }, [search]);

  return {
    handleClose,
    elModal,
  };
};
