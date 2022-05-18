export const addNode = (obj, node) => {
  const myData = obj;

  if (obj.name === node.name) {
    obj.children = node.children;
  } else {
    obj.children?.forEach((item) => {
      if (item.name === node.name) {
        item.children = node.children;
      } else {
        addNode(item, node);
      }
    });
  }

  return myData;
};
