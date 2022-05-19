const recursiveArray = (data, arr, parentId) => {
  arr.push({
    id: data.id,
    name: data.name,
    type: data.type,
    parentId: parentId,
  });

  if (data.children) {
    data.children.forEach((obj) => {
      recursiveArray(obj, arr, data.id);
    });
  }
};

export const createArray = (data) => {
  let arr = [];

  recursiveArray(data, arr, null);

  return arr;
};
