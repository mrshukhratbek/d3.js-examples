export const useTreeNode = () => {
  const nodeSize = { x: 250, y: 250 };

  const foreignObjectProps = {
    width: nodeSize.x,
    height: nodeSize.y,
    x: -100,
    y: -50,
  };

  return { foreignObjectProps };
};
