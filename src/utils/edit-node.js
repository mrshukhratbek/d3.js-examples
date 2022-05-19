export const editNode = (obj, node) => {
  const myData = obj;

  if (obj.id === node.id) {
    if (obj.name !== node.name) {
      obj.name = node.name;
    }
  } else {
    obj.children?.forEach((item) => {
      if (item.id === node.id) {
        if (item.name !== node.name) {
          item.name = node.name;
        }
      } else {
        editNode(item, node);
      }
    });
  }

  return myData;
};
