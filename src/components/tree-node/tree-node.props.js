import { useNavigate } from "react-router-dom";

export const useTreeNode = () => {
  const navigate = useNavigate();

  const nodeSize = { x: 250, y: 250 };

  const foreignObjectProps = {
    width: nodeSize.x,
    height: nodeSize.y,
    x: -100,
    y: -50,
  };

  const handleAdd = () => {
    navigate("..?add-modal=true", { replace: true });
  };

  return { foreignObjectProps, handleAdd };
};
