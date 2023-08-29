const blogData = localStorage.getItem("Blogs")
  ? JSON.parse(localStorage.getItem("Blogs"))
  : [
    {
      "id": 8,
      "title": "Red Valved",
      "photo": "https://images.unsplash.com/photo-1633436375795-12b3b339712f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHN0ZWFrfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      "desc": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut ab alias at temporibus maxime nostrum inventore totam. Quasi, maxime ratione!"
    },
  ];

export const blogReducer = (state = blogData, action) => {
  switch (action.type) {
    case "CREATE_BLOG":
      return [...state, action.myblog];

    case "UPDATE_BLOG":
      return state.map((b) => {
        if (b.id === action.id) {
          return {
            ...b,
            ...action.update,
          };
        } else {
          return b;
        }
      });

    case "DELETE_BLOG":
      return state.filter(({ id }) => {
        return id !== action.myid;
      });
    default:
      return state;
  }
};
