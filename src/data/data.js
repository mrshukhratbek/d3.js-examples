export const data = {
  name: 'CEO',
  children: [
    {
      name: 'Project Manager',
      attributes: {
        department: 'Production',
      },
      children: [
        {
          name: 'Frontent Lead',
          attributes: {
            department: 'Programming',
          },
          children: [
            {
              name: 'Programmer #1',
            },
            {
              name: 'Programmer #2',
            },
            {
              name: 'Programmer #3',
            },
          ],
        },
        {
          name: 'Backend Lead',
          attributes: {
            department: 'Programming',
          },
          children: [
            {
              name: 'Programmer #1',
            },
            {
              name: 'Programmer #2',
            },
          ],
        },
      ],
    },
  ],
};
