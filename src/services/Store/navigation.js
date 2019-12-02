export default (
  state = {
    links: [
      {
        path: '/',
        title: 'Main'
      },
      {
        path: '/popular',
        title: 'Popular'
      },
      {
        path: '/sport',
        title: 'Sport'
      },
      {
        path: '/art',
        title: 'Art'
      }
    ]
  },
  action
) => {
  return { ...state };
};
