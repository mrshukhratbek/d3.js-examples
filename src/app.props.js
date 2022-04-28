import { useCenteredTree } from './utils';

export const useAppProps = () => {
  const [translate, containerRef] = useCenteredTree();
  const nodeSize = { x: 200, y: 200 };

  const renderForeignObjectNode = ({
    nodeDatum,
    toggleNode,
    foreignObjectProps,
  }) => (
    <g>
      <circle r={15}></circle>
      {/* `foreignObject` requires width & height to be explicitly set. */}
      <foreignObject {...foreignObjectProps}>
        <div style={{ border: '1px solid black', backgroundColor: '#dedede' }}>
          <h3 style={{ textAlign: 'center' }}>{nodeDatum.name}</h3>
          {nodeDatum.children && (
            <button style={{ width: '100%' }} onClick={toggleNode}>
              {nodeDatum.__rd3t.collapsed ? 'Expand' : 'Collapse'}
            </button>
          )}
        </div>
      </foreignObject>
    </g>
  );

  const foreignObjectProps = { width: nodeSize.x, height: nodeSize.y, x: 20 };

  return {
    translate,
    containerRef,
    nodeSize,
    renderForeignObjectNode,
    foreignObjectProps,
  };
};
