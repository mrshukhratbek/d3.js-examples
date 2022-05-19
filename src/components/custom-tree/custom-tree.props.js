import { useCenteredTree } from "../../hooks";

export const useCustomTreeProps = () => {
  const nodeSize = { x: 250, y: 150 };
  const [translate] = useCenteredTree();

  return { nodeSize, translate };
};
