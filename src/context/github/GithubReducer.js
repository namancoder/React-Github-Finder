const githubReducer = (state, action) => {
  switch (action.type) {
    case "getUsers":
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    case "getUser":
      return {
        ...state,
        user: action.payload,
        loading: false,
      };
    case "setLoading":
      return { ...state, loading: true };
    case "clearUsers":
      return { users: [], loading: false };
    default:
      return state;
  }
};

export default githubReducer;
