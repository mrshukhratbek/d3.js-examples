import { useLocation, useNavigate } from "react-router-dom";

export const useModalProps = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const handleClose = () => {
    navigate(pathname);
  };

  return {
    handleClose,
  };
};
