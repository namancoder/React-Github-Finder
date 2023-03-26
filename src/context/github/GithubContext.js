import { createContext, useReducer, useState } from "react";
import { GITHUB_PAT, GITHUB_URL } from "../../utils/constants";
import githubReducer from "./GithubReducer";

const GithubContext = createContext();

export const GithubProvider = ({ children }) => {
  //   const [users, setUsers] = useState([]);
  //   const [loading, setLoading] = useState(true);

  const initialState = {
    users: [],
    user: {},
    loading: false,
  };
  const [state, dispatch] = useReducer(githubReducer, initialState);

  const searchUsers = async (text) => {
    setLoading();
    const params = new URLSearchParams({ q: text });
    const response = await fetch(`${GITHUB_URL}/search/users?${params}`, {
      headers: { Authorization: `token ${GITHUB_PAT}` },
    });

    const { items: data } = await response.json();
    dispatch({ type: "getUsers", payload: data });
  };
  const getUser = async (login) => {
    setLoading();
    const params = new URLSearchParams({ q: login });
    const response = await fetch(`${GITHUB_URL}/users/${login}`, {
      headers: { Authorization: `token ${GITHUB_PAT}` },
    });

    if (response.status === 404) {
      window.location = "/notfound";
    }
    const data = await response.json();
    console.log(response, data);
    dispatch({ type: "getUser", payload: data });
  };
  const setLoading = () => dispatch({ type: "setLoading" });
  const clearUsers = () => dispatch({ type: "clearUsers" });
  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        loading: state.loading,
        searchUsers,
        clearUsers,
        getUser,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
