export const data = {
  id: 1,
  name: "CEO",
  children: [
    {
      id: 2,
      name: "Project Manager",
      attributes: {
        department: "Production",
      },
      children: [
        {
          id: 12,
          name: "Frontent Lead",
          attributes: {
            department: "Programming",
          },
          children: [
            {
              id: 3,
              name: "Programmer #1",
              children: [],
            },
            {
              id: 4,
              name: "Programmer #2",
              children: [],
            },
            {
              id: 5,
              name: "Programmer #3",
              children: [
                {
                  id: 6,
                  name: "Intern #1",
                  children: [],
                },
                {
                  id: 7,
                  name: "Intern #2",
                  children: [],
                },
              ],
            },
          ],
        },
        {
          id: 8,
          name: "Backend Lead",
          attributes: {
            department: "Programming",
          },
          children: [
            {
              id: 9,
              name: "Programmer #1",
              children: [],
            },
            {
              id: 10,
              name: "Programmer #2",
              children: [],
            },
          ],
        },
      ],
    },
  ],
};
