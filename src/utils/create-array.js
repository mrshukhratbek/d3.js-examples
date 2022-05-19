const newArr = [];

export const createArray = (data) => {
  if (Array.isArray(data)) {
    data.forEach((obj) => {
      createArray(obj);
    });
  } else {
    if (data.children) {
      createArray(data.children);
      newArr.push(data);
    } else {
      newArr.push(data);
    }
  }

  return newArr;
};
