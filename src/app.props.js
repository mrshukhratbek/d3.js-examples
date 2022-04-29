export const useAppProps = () => {
  // the graph configuration, just override the ones you need
  const myConfig = {
    nodeHighlightBehavior: true,
    width: window.innerWidth,
    height: window.innerHeight,
    node: {
      color: 'lightgreen',
      size: 300,
      highlightStrokeColor: 'blue',
    },
    link: {
      highlightColor: 'lightblue',
    },
  };

  const onClickNode = function(nodeId) {
    window.alert(`Clicked node ${nodeId}`);
  };

  const onClickLink = function(source, target) {
    window.alert(`Clicked link between ${source} and ${target}`);
  };

  return {
    myConfig,
    onClickNode,
    onClickLink,
  };
};
