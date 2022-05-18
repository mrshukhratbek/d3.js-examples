// @react
import { useNavigate } from "react-router-dom";
// hook
import { useValues } from "../../hooks";

export const useTreeNode = () => {
  const navigate = useNavigate();
  const [innitialValue, setInnitialValue] = useValues();

  const nodeSize = { x: 250, y: 250 };

  const foreignObjectProps = {
    width: nodeSize.x,
    height: nodeSize.y,
    x: -100,
    y: -50,
  };

  const handleAdd = (data) => {
    console.log(data);
    setInnitialValue({
      ...innitialValue,
      parentNode: data,
    });

    navigate("..?add-modal=true", { replace: true });
  };

  const handleEdit = (data) => {
    setInnitialValue({
      ...innitialValue,
      parentNode: data,
    });

    navigate("..?edit-modal=true", { replace: true });
  };

  return { foreignObjectProps, handleAdd, handleEdit };
};
