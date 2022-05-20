// @react
import { useNavigate } from 'react-router-dom';
// @hooks
import { useValues } from '../../hooks';
// @utils
import { collapse } from '../../utils';

export const useTreeNodeProps = () => {
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
    setInnitialValue({
      ...innitialValue,
      parentNode: data,
    });

    navigate('..?add-modal=true', { replace: true });
  };

  const handleEdit = (data) => {
    setInnitialValue({
      ...innitialValue,
      parentNode: data,
    });

    navigate('..?edit-modal=true', { replace: true });
  };

  const customToggle = (params) => {
    const result = collapse(innitialValue.data, params);

    innitialValue.setData({ ...result });
  };

  return { foreignObjectProps, handleAdd, handleEdit, customToggle };
};
