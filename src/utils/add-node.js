export const addNode = (obj, node) => {
  const myData = obj;

  if (obj.id === node.id) {
    obj.children = node.children;
  } else {
    obj.children?.forEach((item) => {
      if (item.id === node.id) {
        item.children = node.children;
      } else {
        addNode(item, node);
      }
    });
  }

  return myData;
};
