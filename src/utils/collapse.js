export const collapse = (obj, node) => {
  const myData = obj;

  if (obj.id === node.id) {
    obj.isOpen = !obj.isOpen;
  } else {
    obj.children?.forEach((item) => {
      collapse(item, node);
    });
  }

  return myData;
};

function open(obj, node, array, allObj) {
  const myData = obj;
  const parentNodeId = node.parentId;

  if (obj.id === parentNodeId) {
    obj.isOpen = true;

    const foundObj = array.find((item) => item.id === obj.id);
    if (foundObj.parentId) {
      open(allObj, foundObj, array, allObj);
    }
  } else {
    obj.children?.forEach((item) => {
      open(item, node, array, allObj);
    });
  }
  return myData;
}

export const collapseParentNode = (obj, node, array) => {
  const allObj = { ...obj };

  const result = open(obj, node, array, allObj);
  result.isOpen = true;

  return result;
};
