export const findParentNode = (obj, node) => {
  const myData = obj;

  if (obj.id === node.id) {
    obj.children = node.children;
  } else {
    obj.children.forEach((item) => {
      if (item.id === node.id) {
        item.children = node.children;
      } else {
        findParentNode(item, node);
      }
    });
  }

  return myData;
};
