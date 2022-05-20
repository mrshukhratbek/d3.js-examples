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
