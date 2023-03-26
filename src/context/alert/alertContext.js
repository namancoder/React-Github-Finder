import GithubContext from "../github/GithubContext";
import alertReducer from "./alertReducer";

const { createContext, useReducer } = require("react");

const AlertContext = createContext();

export const AlertProvider = ({ children }) => {
  const initState = null;
  const [state, dispatch] = useReducer(alertReducer, initState);
  const setAlert = (msg, type) => {
    dispatch({ type: "setAlert", payload: { msg, type } });

    setTimeout(() => dispatch({ type: "removeAlert" }), 3000);
  };
  return (
    <AlertContext.Provider value={{ alert: state, setAlert }}>
      {children}
    </AlertContext.Provider>
  );
};

export default AlertContext;
