export const findParentNode = (obj, node) => {
  const myData = obj;

  if (obj.id === node.id) {
    if (obj.name !== node.name) {
      obj.name = node.name;
    }
    obj.children = node.children;
  } else {
    obj.children?.forEach((item) => {
      if (item.id === node.id) {
        if (item.name !== node.name) {
          item.name = node.name;
        }
        item.children = node.children;
      } else {
        findParentNode(item, node);
      }
    });
  }

  return myData;
};
