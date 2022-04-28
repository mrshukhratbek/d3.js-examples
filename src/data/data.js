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
              children: [
                {
                  name: 'Intern #1',
                },
                {
                  name: 'Intern #2',
                },
              ],
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
