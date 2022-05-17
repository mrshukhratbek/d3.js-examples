import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const useModalProps = ({ open }) => {
  const { pathname, search } = useLocation();
  const navigate = useNavigate();

  const handleClose = (evt) => {
    navigate(pathname);
  };

  useEffect(() => {
    setTimeout(() => {
      window.addEventListener("click", handleClose);
    }, 200);

    return () => window.removeEventListener("click", handleClose);
  }, [search]);

  return {
    handleClose,
  };
};
