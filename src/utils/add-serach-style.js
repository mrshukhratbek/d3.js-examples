export const addSerachStyle = (node) => {
  const allNodes = document.querySelectorAll('.tree-node');

  allNodes.forEach((elem) => {
    if (elem.querySelector('.node-name').textContent === node.name) {
      elem.style.backgroundColor = '#ff0';
      elem.querySelector('.collapse-btn') &&
        elem.querySelector('.collapse-btn').click();
    }
  });
};
