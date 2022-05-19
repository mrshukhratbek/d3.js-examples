// @react
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export const useModalProps = ({ setOpen }) => {
  const { pathname, search } = useLocation();
  const navigate = useNavigate();
  const elModal = React.useRef();

  const handleClose = () => {
    navigate(pathname);
    setOpen(false);
  };

  const handleCloseClick = (evt) => {
    if (evt.target === elModal.current) {
      navigate(pathname);
      setOpen(false);
    }
  };

  React.useEffect(() => {
    elModal.current.addEventListener('click', handleCloseClick);
  }, [search]);

  return {
    handleClose,
    elModal,
  };
};
