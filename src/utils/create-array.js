// const recursiveArray = (data) => {
//   let arr = [];
//   arr.push({ id: data.id, name: data.name, type: data.type });

//   if (data.children) {
//     data.children.forEach((obj) => {
//       console.log(obj);
//       recursiveArray(obj);
//     });
//   }
//   console.log(data, arr);

//   return arr;
// };

// export const createArray = (data) => {
//   let arr = [];

//   arr.push([...arr, ...recursiveArray(data)]);

//   console.log(arr);
//   return arr;
// };

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
