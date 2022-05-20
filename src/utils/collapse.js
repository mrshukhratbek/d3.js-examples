export const collapse = (obj, node) => {
  const myData = obj;

  if (obj.id === node.id) {
    obj.isOpen = !obj.isOpen;
    console.log(obj);
  } else {
    obj.children?.forEach((item) => {
      collapse(item, node);
    });
  }

  return myData;
};

export const collapseParentNode = (obj, node, array) => {
  const myData = obj;
  const parentNodeId = node.parentId;

  if (obj.id === parentNodeId) {
    obj.isOpen = true;

    const foundObj = array.find((item) => item.id === obj.id);
    if (foundObj.parentId) {
      console.log(foundObj);
      collapseParentNode(myData, foundObj, array);
    }
  } else {
    obj.children?.forEach((item) => {
      collapseParentNode(item, node, array);
    });
  }

  return myData;
};
