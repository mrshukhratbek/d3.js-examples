const recursiveArray = (obj, parentNode, newNode) => {
  if (obj.id === parentNode.id) {
    if (obj.children) {
      obj.children = [...obj.children, newNode];
    } else {
      obj.children = [newNode];
    }
  }

  if (obj.children) {
    obj.children.forEach((item) => {
      recursiveArray(item, parentNode, newNode);
    });
  }
};

export const addNodeWithParentId = (data, parentNode, newNode) => {
  let obj = data;

  recursiveArray(obj, parentNode, newNode);

  return obj;
};
